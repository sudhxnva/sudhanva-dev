"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { loadingLogoReveal, crtExit, fadeIn } from "@/lib/animations";
import { bootLines } from "@/lib/data";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showBootOk, setShowBootOk] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Print terminal lines one by one starting at t=600ms
    bootLines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines((n) => n + 1), 600 + i * 350)
      );
    });

    // Boot OK at t=2000ms
    timers.push(setTimeout(() => setShowBootOk(true), 2000));

    // Start CRT exit at t=2400ms
    timers.push(setTimeout(() => setExiting(true), 2400));

    // Call onComplete at t=2600ms
    timers.push(setTimeout(() => onComplete(), 2600));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      key="loading-screen"
      variants={crtExit}
      initial="visible"
      animate={exiting ? "exit" : "visible"}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "top",
      }}
    >
      {/* Logo */}
      <motion.div
        variants={loadingLogoReveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        style={{ marginBottom: "3rem", textAlign: "center" }}
      >
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "16px",
            color: "var(--green-primary)",
            letterSpacing: "0.2em",
          }}
        >
          S.M
        </span>
      </motion.div>

      {/* Terminal lines */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.875rem",
          color: "var(--green-bright)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          minWidth: "280px",
        }}
      >
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* BOOT OK */}
      <AnimatePresence>
        {showBootOk && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <span
              className="neon-glow"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "12px",
                color: "var(--green-bright)",
                letterSpacing: "0.3em",
              }}
            >
              BOOT OK
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
