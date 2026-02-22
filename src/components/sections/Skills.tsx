"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PixelStatBar } from "@/components/ui/PixelStatBar";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="skills" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginTop: "3rem",
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--green-primary)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--green-muted)",
                }}
              >
                {cat.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {cat.skills.map((skill) => (
                  <PixelStatBar
                    key={skill.name}
                    label={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
