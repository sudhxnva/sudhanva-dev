"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#experience" },
    { label: "Contact", href: "mailto:sudhanva.m@icloud.com" },
  ];

  if (!scrolled) {
    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000,
          transition: "all 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            color: "var(--text)",
          }}
        >
          Sudhanva Manjunath
        </span>
        <div
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    );
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        zIndex: 1000,
        borderRadius: "9999px",
        background: "rgba(13,12,11,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--border)",
        transition: "all 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--accent)",
          marginRight: "8px",
        }}
      >
        SM
      </span>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="nav-link"
        >
          {link.label}
        </a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
