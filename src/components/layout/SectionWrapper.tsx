"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { fadeInUp } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <section id={id} className={cn("section-padding", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn("section-padding", className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}
