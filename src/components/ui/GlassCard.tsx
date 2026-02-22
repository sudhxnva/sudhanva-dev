import { cn } from "@/lib/cn";
import { PixelBorder } from "@/components/ui/PixelBorder";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  pixelBorder?: boolean;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className, pixelBorder, style }: GlassCardProps) {
  const content = (
    <div
      className={cn("glass-card rounded-sm", className)}
      style={{
        backdropFilter: "blur(12px) saturate(180%)",
        WebkitBackdropFilter: "blur(12px) saturate(180%)",
        background: "rgba(17, 24, 39, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        // overflow: clip is safe to use here if clipping is needed — never overflow: hidden
        ...style,
      }}
    >
      {children}
    </div>
  );

  if (pixelBorder) {
    return <PixelBorder>{content}</PixelBorder>;
  }

  return content;
}
