"use client";
import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "link" | "project";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Don't show on touch devices
    if (navigator.maxTouchPoints > 0) return;

    function onMouseMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card")) {
        setCursorState("project");
      } else if (target.closest("a, button, [role='button']")) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    }

    function loop() {
      const lerp = 0.15;
      current.current.x += (pos.current.x - current.current.x) * lerp;
      current.current.y += (pos.current.y - current.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }
      if (pillRef.current) {
        pillRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dotSize = cursorState === "link" ? 16 : 8;

  return (
    <>
      {/* Main dot cursor */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          backgroundColor: "var(--text)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 150ms ease, height 150ms ease, opacity 150ms ease",
          opacity: cursorState === "project" ? 0 : 1,
          willChange: "transform",
        }}
      />
      {/* Project card pill cursor */}
      <div
        ref={pillRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          padding: "8px 14px",
          borderRadius: "9999px",
          backgroundColor: "var(--text)",
          color: "var(--bg)",
          fontSize: "12px",
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          fontWeight: 500,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: cursorState === "project" ? 1 : 0,
          transition: "opacity 150ms ease",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        View Case Study →
      </div>
    </>
  );
}
