"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useScrollSection } from "@/hooks/useScrollSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navSlideDown } from "@/lib/animations";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/cn";

const SECTION_IDS = ["about", "experience", "projects", "skills", "education", "contact"];

export function NavBar() {
  const { loadingComplete } = useTheme();
  const activeSection = useScrollSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AnimatePresence>
      {loadingComplete && (
        <motion.nav
          key="navbar"
          variants={navSlideDown}
          initial="hidden"
          animate="visible"
          role="navigation"
          aria-label="Main navigation"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backdropFilter: "blur(12px) saturate(180%)",
            WebkitBackdropFilter: "blur(12px) saturate(180%)",
            background: "rgba(5, 10, 5, 0.85)",
            borderBottom: "1px solid var(--green-muted)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1.5rem",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "12px",
                color: "var(--green-primary)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              S.M
            </a>

            {/* Desktop nav links */}
            <div className="nav-links-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              {navLinks.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    className={cn(isActive && "pixel-border")}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: isActive ? "var(--green-bright)" : "var(--gray-400)",
                      textDecoration: "none",
                      padding: isActive ? "4px 10px" : "4px 0",
                      transition: "color 0.2s",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="nav-burger"
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--green-primary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-pixel)",
                  fontSize: "12px",
                  padding: "4px",
                  display: "none",
                }}
              >
                {mobileOpen ? "✕" : "≡"}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  overflow: "hidden",
                  background: "rgba(5, 10, 5, 0.95)",
                  borderTop: "1px solid var(--green-muted)",
                }}
              >
                <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {navLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                        color: "var(--gray-400)",
                        textDecoration: "none",
                        letterSpacing: "0.05em",
                      }}
                    >
                      &gt;_ {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
