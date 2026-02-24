"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const TARGET = "sudhanva manjunath"
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
const GRID_FONT_SIZE = 18  // px — monospace background grid
const GRID_LINE_HEIGHT = 1.4
const NAME_FONT_SIZE = 36  // px — must match Hero.tsx

interface LoadingScreenProps {
  onComplete: () => void
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function makeGrid() {
  const charW = GRID_FONT_SIZE * 0.55
  const charH = GRID_FONT_SIZE * GRID_LINE_HEIGHT
  const cols = Math.ceil(window.innerWidth / charW) + 2
  const rows = Math.ceil(window.innerHeight / charH) + 2
  return Array.from({ length: cols * rows }, randomChar).join("")
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [bgChars, setBgChars] = useState<string>("")
  // Each name char tracks its current display char and whether it's locked (black)
  const [nameChars, setNameChars] = useState<Array<{ char: string; locked: boolean }>>(
    TARGET.split("").map(() => ({ char: randomChar(), locked: false }))
  )
  const [lockedCount, setLockedCount] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(1)
  const [phase, setPhase] = useState<"scramble" | "lock" | "fadeOut">("scramble")
  // Whether to show anything at all (set false after onComplete fires)
  const [visible, setVisible] = useState(true)

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

  // Phase 1: scramble everything
  useEffect(() => {
    if (prefersReduced) {
      onComplete()
      return
    }

    setBgChars(makeGrid())

    const bgInterval = setInterval(() => setBgChars(makeGrid()), 50)
    const nameInterval = setInterval(() => {
      setNameChars(prev =>
        prev.map(nc => (nc.locked ? nc : { char: randomChar(), locked: false }))
      )
    }, 50)

    const lockStart = setTimeout(() => {
      clearInterval(bgInterval)
      clearInterval(nameInterval)
      setPhase("lock")
    }, 500)

    return () => {
      clearInterval(bgInterval)
      clearInterval(nameInterval)
      clearTimeout(lockStart)
    }
  }, [])

  // Continue scrambling bg + unlocked name chars during lock phase
  useEffect(() => {
    if (phase !== "lock") return
    const bgInterval = setInterval(() => setBgChars(makeGrid()), 50)
    const nameInterval = setInterval(() => {
      setNameChars(prev =>
        prev.map(nc => (nc.locked ? nc : { char: randomChar(), locked: false }))
      )
    }, 50)
    return () => {
      clearInterval(bgInterval)
      clearInterval(nameInterval)
    }
  }, [phase])

  // Lock name chars one by one — each turns black when it locks
  useEffect(() => {
    if (phase !== "lock") return

    if (lockedCount >= TARGET.length) {
      // All chars locked — fade the background grid out
      setPhase("fadeOut")
      setBgOpacity(0)
      // After bg fully faded, fire onComplete → loading screen unmounts
      // The name (with layoutId) records its position; hero h1 springs from there
      setTimeout(() => {
        setVisible(false)
        onComplete()
      }, 700)
      return
    }

    const t = setTimeout(() => {
      setNameChars(prev => {
        const next = [...prev]
        next[lockedCount] = { char: TARGET[lockedCount], locked: true }
        return next
      })
      setLockedCount(c => c + 1)
    }, 75)

    return () => clearTimeout(t)
  }, [phase, lockedCount])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        background: "#fafaf8",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Background grid — single layer of scrambling gray chars, fades when done */}
      <motion.div
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          fontFamily: "var(--font-mono)",
          fontSize: `${GRID_FONT_SIZE}px`,
          lineHeight: GRID_LINE_HEIGHT,
          color: "#b8b0a8",
          userSelect: "none",
          pointerEvents: "none",
          overflowWrap: "break-word",
          wordBreak: "break-all",
        }}
      >
        {bgChars}
      </motion.div>

      {/*
        Name element — visually part of the grid:
        - Solid #fafaf8 background covers the grid chars beneath it (no visual overlap)
        - Individual char spans change color: gray → #0d0c0b as each locks in
        - layoutId="hero-name" enables the "same element" transition to the hero h1:
          when this element unmounts, Framer Motion records its position;
          the hero h1 (same layoutId) springs from here to its actual position.
      */}
      <motion.div
        layoutId="hero-name"
        aria-live="polite"
        style={{
          position: "absolute",
          // Positioned to exactly match the hero h1's left edge and vertical center
          top: "50%",
          left: "max(40px, calc((100vw - 900px) / 2 + 40px))",
          transform: "translateY(-50%)",
          // Solid background covers any grid chars beneath — prevents visual double-layer
          background: "#fafaf8",
          // Vertical padding ensures grid chars from adjacent rows are also covered
          padding: "10px 0",
          fontFamily: "var(--font-serif)",
          fontSize: `${NAME_FONT_SIZE}px`,
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "0.01em",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
          whiteSpace: "nowrap",
        }}
      >
        {nameChars.map((nc, i) => (
          <span
            key={i}
            style={{
              // Gray when scrambling, transitions to black when this char locks in
              color: nc.locked ? "#0d0c0b" : "#b8b0a8",
            }}
          >
            {nc.char}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
