"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const symbol = isDark ? "☾" : "☀";

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        "pixel-border",
        "inline-flex items-center justify-center",
        "w-9 h-9",
        "bg-transparent",
        "text-base leading-none",
        "transition-transform duration-150",
        "hover:scale-110 active:scale-95",
        "cursor-pointer",
        className
      )}
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--green-primary)",
      }}
    >
      {symbol}
    </button>
  );
}
