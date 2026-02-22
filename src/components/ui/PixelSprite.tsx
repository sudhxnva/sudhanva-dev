import { cn } from "@/lib/cn";

type SpriteVariant = "pokeball" | "star" | "cursor";

interface PixelSpriteProps {
  variant: SpriteVariant;
  className?: string;
  style?: React.CSSProperties;
}

// Each sprite is a 1px × 1px div with box-shadow to paint pixels.
// Scale 4x via transform.
// Colors: R = #e63946 (pokeball red), W = #f5f5f7 (white), B = #1d1d1f (black), G = #39ff14 (green)

const SPRITES: Record<SpriteVariant, string> = {
  // Simple pokeball: 8×8 pixel art
  pokeball: [
    "2px 1px 0 #e63946", "3px 1px 0 #e63946", "4px 1px 0 #e63946", "5px 1px 0 #e63946",
    "1px 2px 0 #e63946", "2px 2px 0 #e63946", "3px 2px 0 #e63946", "4px 2px 0 #e63946", "5px 2px 0 #e63946", "6px 2px 0 #e63946",
    "1px 3px 0 #e63946", "2px 3px 0 #e63946", "3px 3px 0 #e63946", "4px 3px 0 #1d1d1f", "5px 3px 0 #1d1d1f", "6px 3px 0 #e63946",
    "1px 4px 0 #1d1d1f", "2px 4px 0 #1d1d1f", "3px 4px 0 #1d1d1f", "4px 4px 0 #ffffff", "5px 4px 0 #1d1d1f", "6px 4px 0 #1d1d1f",
    "1px 5px 0 #f5f5f7", "2px 5px 0 #f5f5f7", "3px 5px 0 #f5f5f7", "4px 5px 0 #1d1d1f", "5px 5px 0 #f5f5f7", "6px 5px 0 #f5f5f7",
    "1px 6px 0 #f5f5f7", "2px 6px 0 #f5f5f7", "3px 6px 0 #f5f5f7", "4px 6px 0 #f5f5f7", "5px 6px 0 #f5f5f7", "6px 6px 0 #f5f5f7",
    "2px 7px 0 #f5f5f7", "3px 7px 0 #f5f5f7", "4px 7px 0 #f5f5f7", "5px 7px 0 #f5f5f7",
  ].join(", "),

  // Simple 5×5 star
  star: [
    "3px 1px 0 #39ff14",
    "2px 2px 0 #39ff14", "3px 2px 0 #39ff14", "4px 2px 0 #39ff14",
    "1px 3px 0 #39ff14", "2px 3px 0 #39ff14", "3px 3px 0 #39ff14", "4px 3px 0 #39ff14", "5px 3px 0 #39ff14",
    "2px 4px 0 #39ff14", "4px 4px 0 #39ff14",
    "1px 5px 0 #39ff14", "5px 5px 0 #39ff14",
  ].join(", "),

  // Blinking terminal cursor block
  cursor: [
    "1px 1px 0 #39ff14", "2px 1px 0 #39ff14", "3px 1px 0 #39ff14",
    "1px 2px 0 #39ff14", "2px 2px 0 #39ff14", "3px 2px 0 #39ff14",
    "1px 3px 0 #39ff14", "2px 3px 0 #39ff14", "3px 3px 0 #39ff14",
  ].join(", "),
};

export function PixelSprite({ variant, className, style }: PixelSpriteProps) {
  return (
    <div
      className={cn("pixel-sprite", className)}
      aria-hidden="true"
      style={{
        position: "relative",
        display: "inline-block",
        width: "8px",
        height: "8px",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          boxShadow: SPRITES[variant],
          transform: "scale(4)",
          transformOrigin: "top left",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
