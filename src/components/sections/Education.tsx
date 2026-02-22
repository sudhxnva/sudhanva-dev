"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { education } from "@/lib/data";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="education" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
          className="education-grid"
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <GlassCard pixelBorder>
                <div style={{ padding: "1.5rem" }}>
                  {/* Institution name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "var(--white)",
                      margin: "0 0 0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.institution}
                  </h3>

                  {/* Degree */}
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      color: "var(--green-primary)",
                      margin: "0 0 1rem",
                    }}
                  >
                    {edu.degree}
                  </p>

                  {/* Meta row: period, location, CGPA badge */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--gray-400)",
                      }}
                    >
                      {edu.period}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--gray-400)" }}>·</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--gray-400)",
                      }}
                    >
                      {edu.location}
                    </span>
                    {/* CGPA badge */}
                    <span
                      className="pixel-border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--green-primary)",
                        padding: "2px 8px",
                        marginLeft: "auto",
                        whiteSpace: "nowrap",
                        transform: "translateZ(0)",
                      }}
                    >
                      GPA {edu.cgpa}
                    </span>
                  </div>

                  {/* Coursework tags */}
                  {edu.coursework.length > 0 && (
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--gray-400)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          margin: "0 0 0.5rem",
                        }}
                      >
                        Coursework
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="pixel-border"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              color: "var(--green-muted)",
                              padding: "3px 8px",
                              letterSpacing: "0.03em",
                              transform: "translateZ(0)",
                            }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .education-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}