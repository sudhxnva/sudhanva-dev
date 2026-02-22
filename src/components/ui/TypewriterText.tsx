"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypewriterText({
  texts,
  speed = 60,
  pauseDuration = 1800,
  className,
}: TypewriterTextProps) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  // When reduced-motion is on, pass speed=0 to instantly display the full text
  const displayed = useTypewriter(texts[index], reducedMotion ? 0 : speed);

  useEffect(() => {
    if (displayed === texts[index]) {
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
      }, reducedMotion ? 2000 : pauseDuration);
      return () => clearTimeout(t);
    }
  }, [displayed, texts, index, pauseDuration, reducedMotion]);

  return (
    <span
      className={cn(className)}
      style={{ fontFamily: "var(--font-mono)", color: "var(--green-bright)" }}
    >
      {displayed}
      <span className="cursor-blink" style={{ marginLeft: "2px" }}>
        ▋
      </span>
    </span>
  );
}
