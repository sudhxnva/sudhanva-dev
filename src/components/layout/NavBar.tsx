"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import Link from "next/link"

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "mailto:sudhanva.m@icloud.com" },
  ]

  return (
    // Fixed full-width anchor — transparent, pointer-events:none so it doesn't block page clicks
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: scrolled ? "center" : "flex-end",
        padding: scrolled ? "0" : "20px 32px",
        pointerEvents: "none",
      }}
    >
      <motion.nav
        layout
        transition={{
          layout: { type: "spring", stiffness: 260, damping: 28, mass: 0.9 },
        }}
        style={{
          pointerEvents: "auto",
          marginTop: scrolled ? "16px" : "0",
          padding: scrolled ? "10px 20px" : "0",
          borderRadius: scrolled ? "9999px" : "0px",
          background: scrolled ? `rgba(var(--bg-rgb), 0.92)` : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          whiteSpace: "nowrap",
        }}
      >
        {/* SM — fades in when pill is active. Same element, not a swap. */}
        <AnimatePresence>
          {scrolled && (
            <motion.span
              key="sm-label"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text)",
                overflow: "hidden",
                display: "inline-block",
                paddingRight: "4px",
              }}
            >
              SM
            </motion.span>
          )}
        </AnimatePresence>

        {/* Nav links — always present */}
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="nav-link"
            style={{ fontSize: "13px" }}
          >
            {link.label}
          </Link>
        ))}

        <ThemeToggle />
      </motion.nav>
    </div>
  )
}
