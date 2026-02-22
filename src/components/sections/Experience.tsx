"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="experience" />

        <div
          style={{
            position: "relative",
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          {/* Vertical timeline line — hidden on mobile via .timeline-line class */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--green-muted)",
              transform: "translateX(-50%)",
            }}
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={isLeft ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="timeline-card-wrapper"
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  paddingLeft: isLeft ? 0 : "calc(50% + 2rem)",
                  paddingRight: isLeft ? "calc(50% + 2rem)" : 0,
                }}
              >
                <GlassCard
                  pixelBorder
                  style={{
                    padding: "1.5rem",
                    maxWidth: "480px",
                    width: "100%",
                  }}
                >
                  {/* Header: company, role, period, location */}
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-pixel)",
                        fontSize: "10px",
                        color: "var(--green-bright)",
                        letterSpacing: "0.05em",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {exp.company}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                        color: "var(--white)",
                        display: "block",
                      }}
                    >
                      {exp.role}
                    </span>
                    <div style={{ display: "flex", gap: "1rem", marginTop: "4px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--gray-400)",
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--green-muted)",
                        }}
                      >
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--gray-400)",
                          lineHeight: 1.6,
                          display: "flex",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{ color: "var(--green-primary)", flexShrink: 0 }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* On mobile: hide the centre line, remove alternating layout */}
      <style>{`
        @media (max-width: 767px) {
          .timeline-line { display: none; }
          .timeline-card-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
