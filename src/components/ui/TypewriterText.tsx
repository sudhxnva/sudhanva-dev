"use client";

import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
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
  const [index, setIndex] = useState(0);
  const displayed = useTypewriter(texts[index], speed);

  useEffect(() => {
    if (displayed === texts[index]) {
      // Finished typing — pause, then advance
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
      }, pauseDuration);
      return () => clearTimeout(t);
    }
  }, [displayed, texts, index, pauseDuration]);

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
