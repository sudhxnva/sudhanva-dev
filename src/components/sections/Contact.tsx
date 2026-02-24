"use client";

import { motion } from "motion/react";

const contactLinks = [
  { label: "sudhanva.m@icloud.com", href: "mailto:sudhanva.m@icloud.com", external: false },
  { label: "linkedin", href: "https://linkedin.com/in/sudhanva-m", external: true },
  { label: "github", href: "https://github.com/sudhxnva", external: true },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
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
            marginBottom: "40px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="draw-underline"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "24px",
                color: "var(--text)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {link.label}
              {link.external && <span style={{ fontSize: "18px" }}>↗</span>}
            </motion.a>
          ))}
        </div>

        <motion.p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--text-faint)",
            marginTop: "80px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © 2025 Sudhanva Manjunath
        </motion.p>
      </div>
    </section>
  );
}
