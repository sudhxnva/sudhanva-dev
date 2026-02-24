"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
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

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  minWidth: "120px",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}
              >
                {group.category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--text)",
                  lineHeight: 1.5,
                }}
              >
                {group.skills.map((s) => s.name).join(" · ")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
