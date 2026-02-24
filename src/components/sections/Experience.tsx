"use client";

import { motion } from "motion/react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work
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

        {experiences.map((job, i) => (
          <motion.div
            key={job.company}
            className="work-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-faint)",
                paddingTop: "2px",
              }}
            >
              {job.period}
            </span>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: "4px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {job.company}
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                  fontSize: "14px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {job.role}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
