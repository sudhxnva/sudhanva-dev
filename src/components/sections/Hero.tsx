"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const nameY = useTransform(scrollY, [0, 400], [0, -40])
  const subtitleY = useTransform(scrollY, [0, 400], [0, -20])

  const blurFade = {
    initial: { opacity: 0, filter: "blur(8px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  }

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
      <motion.h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(40px, 8vw, 88px)",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: "24px",
          fontWeight: 400,
          y: nameY,
        }}
        {...blurFade}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Sudhanva Manjunath
      </motion.h1>

      <motion.p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "18px",
          color: "var(--text-muted)",
          lineHeight: 1.6,
          maxWidth: "480px",
          marginBottom: "16px",
          y: subtitleY,
        }}
        {...blurFade}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        Software engineer building thoughtful systems at the intersection of UX and engineering.
      </motion.p>

      <motion.p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--text-faint)",
          marginBottom: "48px",
        }}
        {...blurFade}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        MS CS @ CU Boulder · Boulder, CO
      </motion.p>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ color: "var(--text-faint)", fontSize: "20px" }}
      >
        ↓
      </motion.div>
    </section>
  )
}
