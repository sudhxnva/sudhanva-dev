"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

// Must match LoadingScreen.tsx NAME_FONT_SIZE
const NAME_FONT_SIZE = 36 // px

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const nameY = useTransform(scrollY, [0, 400], [0, -30])
  const subtitleY = useTransform(scrollY, [0, 400], [0, -15])

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 40px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* "Hello, I'm" — animates AFTER name */}
      <motion.p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "var(--text-muted)",
          marginBottom: "10px",
          letterSpacing: "0.02em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Hello, I&apos;m
      </motion.p>

      {/* Name — opacity only (no blur/translate) for seamless loader hand-off */}
      <motion.h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: `${NAME_FONT_SIZE}px`,
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: "20px",
          fontWeight: 400,
          y: nameY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        Sudhanva Manjunath
      </motion.h1>

      {/* Subtitle — serif as user requested */}
      <motion.p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "18px",
          color: "var(--text-muted)",
          lineHeight: 1.65,
          maxWidth: "420px",
          marginBottom: "48px",
          y: subtitleY,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        an engineer who bridges UX and engineering.
      </motion.p>

      {/* Bouncing arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: "var(--text-faint)", fontSize: "18px" }}
      >
        ↓
      </motion.div>
    </section>
  )
}
