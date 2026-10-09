import type { ReactNode } from "react";
import { SECTIONS, type SectionId } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { cn } from "@/lib/utils";

const TITLES = Object.fromEntries(SECTIONS.map((s) => [s.id, s.title])) as Record<SectionId, string>;

/** Main content section: one H2 per section, ids match the table of contents. */
export function Section({ id, children, className }: { id: SectionId; children: ReactNode; className?: string }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "scroll-mt-[calc(var(--header-h)+4.5rem)] border-t border-velvet-border/70 py-12 first:border-t-0 first:pt-4 md:py-16 lg:scroll-mt-[calc(var(--header-h)+1.5rem)]",
        className,
      )}
    >
      <h2 id={`${id}-title`} className="max-w-[26ch] text-[clamp(1.7rem,1.2rem+1.6vw,2.4rem)] leading-[1.14]">
        {TITLES[id]}
      </h2>
      <div className="mt-7 space-y-7">{children}</div>
    </section>
  );
}

export function SubHeading({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h3
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-h)+4.5rem)] pt-3 text-[clamp(1.3rem,1.1rem+0.6vw,1.6rem)] leading-snug lg:scroll-mt-[calc(var(--header-h)+1.5rem)]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ text, className }: { text: string; className?: string }) {
  return <p className={cn("max-w-[68ch] text-[1rem] leading-[1.75] text-rose-white/90 sm:text-[1.0625rem] sm:leading-[1.8]", className)}>{formatText(text)}</p>;
}

export function Paragraphs({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      {items.map((text) => (
        <Paragraph key={text.slice(0, 40)} text={text} />
      ))}
    </div>
  );
}

/** Unordered list with a small lavender lozenge marker. */
export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("max-w-[68ch] space-y-3", className)}>
      {items.map((text) => (
        <li key={text} className="flex gap-3.5 text-[1rem] leading-[1.7] text-rose-white/90 sm:text-[1.0625rem]">
          <span aria-hidden className="mt-[0.72em] size-[5px] shrink-0 rotate-45 bg-lavender" />
          <span>{formatText(text)}</span>
        </li>
      ))}
    </ul>
  );
}

/** Ordered list for genuine sequences (registration, payments, installs). */
export function StepList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ol className={cn("max-w-[68ch] space-y-4", className)}>
      {items.map((text, i) => (
        <li key={text} className="flex gap-4">
          <span
            aria-hidden
            className="grid size-8 shrink-0 place-items-center rounded-full border border-lavender/45 font-heading text-sm text-lavender tabular"
          >
            {i + 1}
          </span>
          <span className="pt-1 text-[1rem] leading-[1.65] text-rose-white/90 sm:text-[1.0625rem]">{formatText(text)}</span>
        </li>
      ))}
    </ol>
  );
}

export function Note({ text, className }: { text: string; className?: string }) {
  return (
    <p className={cn("max-w-[68ch] border-l border-lavender/50 pl-4 font-ui text-sm leading-relaxed text-velvet-secondary", className)}>
      {formatText(text)}
    </p>
  );
}
