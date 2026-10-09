import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  value: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
}

/** Five thin stars with fractional fill; announced as text for screen readers. */
export function RatingStars({ value, max = 5, size = "md", className }: RatingStarsProps) {
  const iconSize = size === "sm" ? "size-3.5" : "size-4";
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} role="img" aria-label={`Оцінка ${value.toFixed(1)} з ${max}`}>
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={cn("relative inline-block", iconSize)} aria-hidden>
            <Star className={cn("absolute inset-0 text-velvet-border", iconSize)} strokeWidth={1.5} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={cn("text-rose-gold", iconSize)} fill="currentColor" strokeWidth={1.5} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
