import type { Casino } from "@/data/content";
import { cn } from "@/lib/utils";

type LogoCasino = Pick<Casino, "name" | "rank" | "logoBg" | "logoText" | "logoAccent">;

interface CasinoLogoProps {
  casino: LogoCasino;
  showRank?: boolean;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Custom CSS brand mark (no external images). The 64px tile carries the
 * premium drop shadow; the rank badge overlaps its top-left corner.
 */
export function CasinoLogo({ casino, showRank = false, size = "md", className }: CasinoLogoProps) {
  const isSmall = size === "sm";
  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      <div
        role="img"
        aria-label={`Логотип ${casino.name}`}
        className={cn(
          "relative grid place-items-center overflow-hidden rounded-[10px] transition-transform duration-200 hover:scale-105",
          isSmall ? "size-10 shadow-[0_6px_12px_rgba(0,0,0,0.15)]" : "size-16 shadow-[0_10px_20px_rgba(0,0,0,0.15)]",
        )}
        style={{ background: casino.logoBg }}
      >
        <span
          aria-hidden
          className="absolute inset-[4px] rounded-[7px] border"
          style={{ borderColor: `${casino.logoAccent}55` }}
        />
        <span
          aria-hidden
          className={cn("relative font-heading font-semibold leading-none", isSmall ? "text-lg" : "text-[1.9rem]")}
          style={{ color: casino.logoAccent }}
        >
          {casino.logoText}
        </span>
      </div>
      {showRank && (
        <span
          className="absolute -left-2 -top-2 grid size-6 place-items-center rounded-full bg-rose-gold font-ui text-xs font-bold text-velvet-deep tabular ring-[3px] ring-velvet-surface"
          aria-label={`Місце в рейтингу: ${casino.rank}`}
        >
          {casino.rank}
        </span>
      )}
    </div>
  );
}
