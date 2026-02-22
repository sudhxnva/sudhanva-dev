"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { underlineDraw } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2
        style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "14px",
          color: "var(--white)",
          letterSpacing: "0.05em",
          marginBottom: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--green-bright)",
            marginRight: "0.5rem",
          }}
        >
          {">_"}
        </span>
        {title}
      </h2>
      <motion.div
        variants={underlineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          height: "2px",
          background: "var(--green-primary)",
          transformOrigin: "left",
          width: "100%",
          maxWidth: "200px",
        }}
      />
    </div>
  );
}
