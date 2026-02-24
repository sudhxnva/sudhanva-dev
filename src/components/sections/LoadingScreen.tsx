"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
const TARGET = "sudhanva manjunath";

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [display, setDisplay] = useState(
    TARGET.split("").map(() => " ")
  );
  const [lockedCount, setLockedCount] = useState(0);
  const [phase, setPhase] = useState<"scramble" | "lock" | "hold" | "fade">(
    "scramble"
  );
  const [visible, setVisible] = useState(true);

  // Check for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Phase 1: Scramble all positions
    const scrambleInterval = setInterval(() => {
      setDisplay(
        TARGET.split("").map((char) =>
          char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
        )
      );
    }, 40);

    // Phase 2: Start locking in after 300ms
    const lockStart = setTimeout(() => {
      clearInterval(scrambleInterval);
      setPhase("lock");
    }, 300);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(lockStart);
    };
  }, []);

  useEffect(() => {
    if (phase !== "lock") return;

    if (lockedCount >= TARGET.length) {
      setPhase("hold");
      // Phase 3 → 4: fade after hold
      setTimeout(() => {
        setPhase("fade");
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 300);
      }, 300);
      return;
    }

    const lockTimer = setTimeout(() => {
      setDisplay((prev) => {
        const next = [...prev];
        next[lockedCount] = TARGET[lockedCount];
        return next;
      });
      setLockedCount((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(lockTimer);
  }, [phase, lockedCount]);

  // Keep scrambling unlocked chars during lock phase
  useEffect(() => {
    if (phase !== "lock") return;
    const interval = setInterval(() => {
      setDisplay((prev) =>
        prev.map((char, i) => {
          if (i < lockedCount) return TARGET[i];
          if (TARGET[i] === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
      );
    }, 40);
    return () => clearInterval(interval);
  }, [phase, lockedCount]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fade" ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0d0c0b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(28px, 5vw, 60px)",
          color: "#f0ede8",
          letterSpacing: "0.02em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {display.join("")}
      </span>
    </motion.div>
  );
}
