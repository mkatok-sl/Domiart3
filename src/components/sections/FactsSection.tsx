import { Section } from "@/components/Section";
import { QUICK_FACTS } from "@/data/content";

export function FactsSection() {
  return (
    <Section id="facts">
      <dl className="grid gap-x-10 sm:grid-cols-2">
        {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4 border-b border-velvet-border/80 py-4">
            <Icon className="mt-0.5 size-5 shrink-0 text-lavender" strokeWidth={1.25} aria-hidden />
            <div className="min-w-0">
              <dt className="font-ui text-xs text-velvet-muted">{label}</dt>
              <dd className="mt-1 font-ui text-[0.975rem] leading-snug text-rose-white tabular">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </Section>
  );
}
