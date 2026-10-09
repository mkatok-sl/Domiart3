import { Section } from "@/components/Section";
import { TIPS } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function TipsSection() {
  return (
    <Section id="tips">
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {TIPS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4 border-t border-velvet-border/80 py-6">
            <Icon className="mt-1 size-5 shrink-0 text-lavender" strokeWidth={1.25} aria-hidden />
            <div className="min-w-0">
              <h3 className="font-ui text-base font-semibold text-rose-white-light">{title}</h3>
              <p className="mt-2 text-[1rem] leading-relaxed text-velvet-secondary">{formatText(text)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
