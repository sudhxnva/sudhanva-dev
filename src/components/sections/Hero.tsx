"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { letterReveal, staggerFast, fadeIn } from "@/lib/animations";
import { heroRoles } from "@/lib/data";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

// Inline typewriter (TypewriterText from #3 may not be merged into master yet)
function useTypewriterSimple(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

const NAME = "SUDHANVA MANJUNATH";
const NAME_CHARS = NAME.split("");

export function Hero() {
  const { loadingComplete } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const displayedRole = useTypewriterSimple(heroRoles[roleIndex], 60);

  useEffect(() => {
    if (displayedRole === heroRoles[roleIndex]) {
      const t = setTimeout(() => setRoleIndex((i) => (i + 1) % heroRoles.length), 1800);
      return () => clearTimeout(t);
    }
  }, [displayedRole, roleIndex]);

  return (
    <section
      id="hero"
      className={cn("hero-grid")}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0 1.5rem",
      }}
    >
      <AnimatePresence>
        {loadingComplete && (
          <motion.div
            key="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ textAlign: "center", maxWidth: "900px", width: "100%" }}
          >
            {/* Name with letter stagger */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0",
                marginBottom: "1.5rem",
                perspective: "400px",
              }}
            >
              {NAME_CHARS.map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterReveal}
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "clamp(10px, 2.5vw, 16px)",
                    color: "var(--white)",
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : "normal",
                    padding: char === " " ? "0 0.2em" : "0",
                    lineHeight: 1.4,
                    letterSpacing: "0.05em",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Typewriter subtitle */}
            <motion.div variants={fadeIn} style={{ marginBottom: "2.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                  color: "var(--green-bright)",
                }}
              >
                {displayedRole}
                <span className="cursor-blink" style={{ marginLeft: "2px" }}>▋</span>
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeIn}
              style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <a
                href="#projects"
                className="pixel-border"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--green-primary)",
                  padding: "0.75rem 1.5rem",
                  background: "transparent",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                View Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--gray-400)",
                  padding: "0.75rem 1.5rem",
                  border: "1px solid var(--gray-700, #3a3a3c)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Resume ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      {loadingComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--gray-400)", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--green-primary)", fontSize: "1rem" }}
          >
            ↓
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
