"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { PixelSprite } from "@/components/ui/PixelSprite";
import { floatAnimation } from "@/lib/animations";

export function About() {
  return (
    <SectionWrapper id="about">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="about" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            marginTop: "3rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Bio — left */}
          <TerminalWindow title="about.md">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "var(--white)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <p style={{ lineHeight: "1.8", margin: 0 }}>
                Software engineer passionate about the intersection of{" "}
                <span style={{ color: "var(--green-bright)" }}>elegant engineering</span>{" "}
                and{" "}
                <span style={{ color: "var(--green-bright)" }}>exceptional UX</span>.
                Currently pursuing an M.S. in Computer Science at CU Boulder.
              </p>
              <p style={{ lineHeight: "1.8", margin: 0, color: "var(--gray-400)" }}>
                Previously built features used by 10M+ users at Games24x7. Deep interest
                in React Native, AI systems, and human-computer interaction.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                {["React Native", "AI Systems", "Pixel Art", "Pokémon"].map((tag) => (
                  <span
                    key={tag}
                    className="pixel-border"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--green-primary)",
                      padding: "4px 10px",
                      background: "transparent",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TerminalWindow>

          {/* Avatar — right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              position: "relative",
            }}
          >
            <motion.div
              animate={floatAnimation}
              style={{ position: "relative" }}
            >
              {/* Simple pixel avatar: a green-bordered character block */}
              <div
                className="pixel-border"
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--bg-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                🧑‍💻
              </div>
              {/* Decorative sprites */}
              <div style={{ position: "absolute", top: "-16px", right: "-16px" }}>
                <PixelSprite variant="star" style={{ width: "24px", height: "24px" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-16px", left: "-16px" }}>
                <PixelSprite
                  variant="pokeball"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
            </motion.div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--green-primary)",
                  margin: 0,
                }}
              >
                MS CS @ CU Boulder
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--gray-400)",
                  margin: "4px 0 0",
                }}
              >
                Aug 2025 – Present
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive grid: two columns on md+ */}
      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
