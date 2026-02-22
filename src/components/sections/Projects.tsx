"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, cardPop } from "@/lib/animations";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="projects" />

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
          className="projects-grid"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={cardPop}
                style={project.highlight ? {
                  boxShadow: "0 0 0 1px var(--amber), 0 0 20px rgba(255,184,0,0.1)",
                } : undefined}
              >
                <GlassCard pixelBorder className={project.highlight ? "project-featured" : ""}>
                  {/* Featured badge */}
                  {project.highlight && (
                    <div style={{ marginBottom: "0.75rem" }}>
                      <span
                        className="pixel-border"
                        style={{
                          fontFamily: "var(--font-pixel)",
                          fontSize: "8px",
                          color: "var(--amber)",
                          padding: "3px 8px",
                          letterSpacing: "0.1em",
                          boxShadow:
                            "0 -4px 0 0 var(--amber), 0 4px 0 0 var(--amber), -4px 0 0 0 var(--amber), 4px 0 0 0 var(--amber), -4px -4px 0 0 var(--bg-primary), 4px -4px 0 0 var(--bg-primary), -4px 4px 0 0 var(--bg-primary), 4px 4px 0 0 var(--bg-primary)",
                        }}
                      >
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-pixel)",
                      fontSize: "10px",
                      color: "var(--white)",
                      margin: "0 0 0.75rem",
                      lineHeight: 1.6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--gray-400)",
                      lineHeight: 1.7,
                      margin: "0 0 1rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Bullets */}
                  <ul
                    style={{
                      margin: "0 0 1rem",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                  >
                    {project.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--gray-400)",
                          display: "flex",
                          gap: "0.5rem",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: project.highlight
                              ? "var(--amber)"
                              : "var(--green-primary)",
                            flexShrink: 0,
                          }}
                        >
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: project.githubUrl || project.liveUrl ? "1rem" : 0,
                    }}
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="pixel-border"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--green-muted)",
                          padding: "3px 8px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem" }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: "var(--green-primary)",
                            textDecoration: "none",
                          }}
                        >
                          ◈ GitHub ↗
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: "var(--green-primary)",
                            textDecoration: "none",
                          }}
                        >
                          ◉ Live ↗
                        </a>
                      )}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
