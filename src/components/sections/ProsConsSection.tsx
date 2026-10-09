import { Minus, Plus } from "lucide-react";
import { Section } from "@/components/Section";
import { FEATURED } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function ProsConsSection() {
  return (
    <Section id="pros-cons">
      <div className="grid gap-px overflow-hidden rounded-lg border border-velvet-border bg-velvet-border md:grid-cols-[1.08fr_1fr]">
        <div className="bg-velvet-surface p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 font-ui text-base font-semibold text-sage">
            <Plus className="size-4" strokeWidth={2} aria-hidden />
            Переваги
          </h3>
          <ul className="mt-5 space-y-4">
            {FEATURED.pros.map((item) => (
              <li key={item} className="flex gap-3 text-[1.0313rem] leading-[1.6] text-rose-white/90">
                <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-sage" />
                <span>{formatText(item)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-velvet-bg/70 p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 font-ui text-base font-semibold text-dusty-rose">
            <Minus className="size-4" strokeWidth={2} aria-hidden />
            Недоліки
          </h3>
          <ul className="mt-5 space-y-4">
            {FEATURED.cons.map((item) => (
              <li key={item} className="flex gap-3 text-[1.0313rem] leading-[1.6] text-rose-white/90">
                <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-dusty-rose" />
                <span>{formatText(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
