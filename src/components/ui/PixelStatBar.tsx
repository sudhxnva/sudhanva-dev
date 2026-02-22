"use client";

import { motion } from "motion/react";
import { statBarFill } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface PixelStatBarProps {
  level: number; // 0–100
  label: string;
  className?: string;
}

function getBarColor(level: number): string {
  if (level >= 75) return "var(--green-primary)";
  if (level >= 50) return "var(--amber)";
  return "var(--green-muted)";
}

export function PixelStatBar({ level, label, className }: PixelStatBarProps) {
  const color = getBarColor(level);

  return (
    <div className={cn(className)} style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--white)",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--gray-400)",
          }}
        >
          {level}
        </span>
      </div>
      {/* Segmented bar container */}
      <div
        style={{
          display: "flex",
          gap: "2px",
          height: "10px",
          background: "var(--bg-tertiary, #111827)",
          padding: "1px",
        }}
      >
        {/* Animated fill */}
        <motion.div
          variants={statBarFill(level)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            background: color,
            height: "100%",
            transformOrigin: "left",
            boxShadow: level >= 75 ? `0 0 6px ${color}` : "none",
          }}
        />
      </div>
    </div>
  );
}
