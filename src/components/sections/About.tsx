"use client"

import { motion } from "motion/react"

const bio = "I'm a software engineer who cares deeply about the craft of building — from systems architecture to the micro-interactions that make products feel alive. Currently pursuing an M.S. in Computer Science at CU Boulder, where I'm exploring AI, HCI, and the intersection of engineering and design."

export function About() {
  return (
    <section id="about" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "1px",
            background: "var(--border)",
            transformOrigin: "left",
            marginBottom: "32px",
          }}
        />

        <motion.p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            lineHeight: 1.75,
            color: "var(--text)",
          }}
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {bio}
        </motion.p>
      </div>
    </section>
  )
}
