"use client";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 100,
        backgroundColor: "transparent",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background: "var(--text-faint)",
          width,
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
