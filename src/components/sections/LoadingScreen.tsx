"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const TARGET = "sudhanva manjunath"
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
const GRID_FONT_SIZE = 18  // px
const GRID_LINE_HEIGHT = 1.4
const NAME_FONT_SIZE = 36  // px — must match Hero.tsx h1 fontSize

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
  const [nameDisplay, setNameDisplay] = useState<string[]>(
    TARGET.split("").map(() => randomChar())
  )
  const [lockedCount, setLockedCount] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(1)
  const [done, setDone] = useState(false)
  const [phase, setPhase] = useState<"scramble" | "lock" | "fadeOut" | "complete">("scramble")

  // Initialize full-screen character grid
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false

    if (prefersReduced) {
      onComplete()
      return
    }

    setBgChars(makeGrid())

    // Scramble bg chars continuously
    const bgInterval = setInterval(() => setBgChars(makeGrid()), 50)

    // Begin locking name after 500ms
    const lockTimeout = setTimeout(() => {
      clearInterval(bgInterval)
      setPhase("lock")
    }, 500)

    return () => {
      clearInterval(bgInterval)
      clearTimeout(lockTimeout)
    }
  }, [])

  // Keep bg scrambling during lock phase
  useEffect(() => {
    if (phase !== "lock") return

    const interval = setInterval(() => setBgChars(makeGrid()), 50)
    return () => clearInterval(interval)
  }, [phase])

  // Lock name chars one by one
  useEffect(() => {
    if (phase !== "lock") return

    if (lockedCount >= TARGET.length) {
      // Name complete — fade out background
      setPhase("fadeOut")
      setBgOpacity(0)
      setTimeout(() => {
        setDone(true)
        onComplete()
      }, 700)
      return
    }

    const timer = setTimeout(() => {
      setNameDisplay(prev => {
        const next = [...prev]
        next[lockedCount] = TARGET[lockedCount]
        return next
      })
      setLockedCount(c => c + 1)
    }, 75)

    return () => clearTimeout(timer)
  }, [phase, lockedCount])

  if (done) return null

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
      {/* Full-screen scrambling background */}
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

      {/* Name overlay — positioned to match hero h1 exactly */}
      <div
        aria-live="polite"
        style={{
          position: "absolute",
          top: "50%",
          left: "max(40px, calc((100vw - 900px) / 2 + 40px))",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-serif)",
          fontSize: `${NAME_FONT_SIZE}px`,
          fontWeight: 400,
          color: "#0d0c0b",
          letterSpacing: "0.01em",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
          whiteSpace: "nowrap",
          lineHeight: 1.1,
        }}
      >
        {nameDisplay.join("")}
      </div>
    </div>
  )
}
