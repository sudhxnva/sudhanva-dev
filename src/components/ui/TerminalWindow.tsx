import { cn } from "@/lib/cn";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title = "terminal",
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn("glass-card", className)}
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--green-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.875rem",
      }}
    >
      {/* Terminal header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 14px",
          borderBottom: "1px solid var(--green-muted)",
          background: "rgba(0, 166, 81, 0.05)",
        }}
      >
        {/* Pixel dot decorations */}
        {(["#ff5f57", "#ffbd2e", "#28c840"] as const).map((color, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: color,
              borderRadius: "50%",
              opacity: 0.8,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "auto",
            color: "var(--gray-400)",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </span>
      </div>
      {/* Terminal body */}
      <div
        style={{ padding: "16px 20px", color: "var(--white)", lineHeight: "1.7" }}
      >
        <span style={{ color: "var(--green-bright)", marginRight: "8px" }}>
          $
        </span>
        {children}
      </div>
    </div>
  );
}
