import { Section } from "@/components/Section";
import { NEWS } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function NewsSection() {
  return (
    <Section id="news">
      <ol className="relative max-w-[64ch] border-l border-velvet-border pl-7">
        {NEWS.map((item, i) => (
          <li key={item.title} className="relative pb-8 last:pb-0">
            <span
              aria-hidden
              className={
                i === NEWS.length - 1
                  ? "absolute -left-[33px] top-1.5 size-2.5 rounded-full bg-rose-gold ring-4 ring-velvet-bg"
                  : "absolute -left-[33px] top-1.5 size-2.5 rounded-full border border-lavender bg-velvet-bg ring-4 ring-velvet-bg"
              }
            />
            <p className="font-ui text-xs text-velvet-muted tabular">{item.when}</p>
            <h3 className="mt-1 font-ui text-base font-semibold text-rose-white-light">{item.title}</h3>
            <p className="mt-1.5 text-[1rem] leading-relaxed text-velvet-secondary">{formatText(item.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
