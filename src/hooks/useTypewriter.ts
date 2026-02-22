"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed: number = 50): string {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let index = 0;
    const id = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return displayed;
}
