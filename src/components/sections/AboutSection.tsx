import { Check, X } from "lucide-react";
import { Section } from "@/components/Section";
import { ABOUT_ROWS } from "@/data/content";

export function AboutSection() {
  return (
    <Section id="about">
      <dl className="overflow-hidden rounded-lg border border-velvet-border bg-velvet-surface font-ui text-sm">
        {ABOUT_ROWS.map((row) => (
          <div
            key={row.label}
            className="grid gap-2 border-b border-velvet-border/70 px-5 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6"
          >
            <dt className="text-velvet-muted">{row.label}</dt>
            <dd>
              {typeof row.value === "boolean" ? (
                row.value ? (
                  <span className="inline-flex items-center gap-1.5 text-sage">
                    <Check className="size-4" strokeWidth={2} aria-hidden /> Так
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-dusty-rose">
                    <X className="size-4" strokeWidth={2} aria-hidden /> Немає
                  </span>
                )
              ) : (
                <ul className="flex flex-wrap gap-1.5">
                  {row.value.map((v) => (
                    <li key={v} className="rounded-md bg-velvet-elevated px-2.5 py-1 text-rose-white tabular">
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
