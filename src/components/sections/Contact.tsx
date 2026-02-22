"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactLinks } from "@/lib/data";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeading title="contact" />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem", marginTop: "3rem" }}>
          {/* Terminal window */}
          <div
            style={{
              width: "100%",
              background: "var(--bg-secondary)",
              border: "1px solid var(--green-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {/* Terminal header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 14px",
                borderBottom: "1px solid var(--green-muted)",
                background: "rgba(0, 166, 81, 0.05)",
              }}
            >
              {(["#ff5f57", "#ffbd2e", "#28c840"] as const).map((color, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    background: color,
                    borderRadius: "50%",
                    opacity: 0.8,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "auto",
                  color: "var(--gray-400)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                }}
              >
                contact.sh
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: "1.5rem 1.25rem" }}>
              {/* Shell invocation line */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--green-bright)",
                  marginBottom: "1rem",
                }}
              >
                $ ./contact.sh
              </motion.div>

              {/* Available channels label */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--gray-400)",
                  marginBottom: "0.75rem",
                }}
              >
                &gt; Available channels:
              </motion.div>

              {/* Contact links — staggered */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
              >
                {contactLinks.map((link) => (
                  <motion.div key={link.label} variants={fadeInUp}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="contact-link"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                        color: "var(--white)",
                        textDecoration: "none",
                        transition: "color 0.2s, text-shadow 0.2s",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--gray-400)", minWidth: "1rem", textAlign: "center" }}>
                        &gt;
                      </span>
                      <span style={{ color: "var(--green-primary)", minWidth: "1rem" }}>
                        {link.icon}
                      </span>
                      <span
                        style={{
                          color: "var(--gray-400)",
                          minWidth: "5.5rem",
                          display: "inline-block",
                        }}
                      >
                        {link.label}
                      </span>
                      <span style={{ color: "var(--white)" }}>
                        {link.value}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--gray-400)",
              textAlign: "center",
              margin: 0,
              letterSpacing: "0.03em",
            }}
          >
            Built with Next.js + motion + ♥
          </p>
        </div>
      </div>

      <style>{`
        .contact-link:hover {
          color: var(--green-primary) !important;
          text-shadow: 0 0 8px rgba(0, 166, 81, 0.6);
        }
        .contact-link:hover span {
          color: var(--green-primary) !important;
        }
      `}</style>
    </SectionWrapper>
  );
}