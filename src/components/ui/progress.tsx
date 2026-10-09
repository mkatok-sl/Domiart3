import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Lightweight, dependency-free shadcn-style progress bar. */
function Progress({
  value,
  max = 100,
  className,
  indicatorClassName,
  ...props
}: ComponentProps<"div"> & { value: number; max?: number; indicatorClassName?: string }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      data-slot="progress"
      className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-velvet-elevated", className)}
      {...props}
    >
      <div
        data-slot="progress-indicator"
        className={cn("h-full rounded-full bg-lavender transition-[width] duration-500", indicatorClassName)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export { Progress };
