"use client";

import { motion } from "motion/react";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
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
            marginBottom: "0",
          }}
        />

        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 1fr auto",
              gap: "16px 32px",
              borderBottom: "1px solid var(--border)",
              padding: "20px 0",
              alignItems: "center",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-faint)",
              }}
            >
              {edu.period}
            </span>
            <span style={{ fontWeight: 500, color: "var(--text)" }}>
              {edu.institution}
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              {edu.degree}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-faint)",
                whiteSpace: "nowrap",
              }}
            >
              {edu.cgpa}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
