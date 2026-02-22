import { cn } from "@/lib/cn";

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function PixelBorder({ children, className, color }: PixelBorderProps) {
  const borderColor = color ?? "var(--green-primary)";
  const bgColor = "var(--bg-primary)";

  const boxShadow = [
    `0 -4px 0 0 ${borderColor}`,
    `0 4px 0 0 ${borderColor}`,
    `-4px 0 0 0 ${borderColor}`,
    `4px 0 0 0 ${borderColor}`,
    `-4px -4px 0 0 ${bgColor}`,
    `4px -4px 0 0 ${bgColor}`,
    `-4px 4px 0 0 ${bgColor}`,
    `4px 4px 0 0 ${bgColor}`,
  ].join(", ");

  return (
    <div
      className={cn(className)}
      style={{
        boxShadow,
        transform: "translateZ(0)",
      }}
    >
      {children}
    </div>
  );
}
