import { Note, Paragraph, Section } from "@/components/Section";
import { LIVE } from "@/data/content";

export function LiveSection() {
  return (
    <Section id="live">
      <Paragraph text={LIVE.intro} />
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
        {LIVE.games.map(({ title, text, icon: Icon }) => (
          <li
            key={title}
            className="arch flex flex-col items-center border border-velvet-border bg-velvet-surface px-4 pb-5 pt-9 text-center transition-colors duration-200 hover:border-rose-gold/70"
          >
            <span className="arch grid h-14 w-11 place-items-center border border-lavender/35 bg-velvet-bg/60 pt-1.5">
              <Icon className="size-5 text-lavender" strokeWidth={1.25} aria-hidden />
            </span>
            <h3 className="mt-4 font-ui text-[0.95rem] font-semibold text-rose-white-light">{title}</h3>
            <p className="mt-1.5 text-[0.875rem] leading-snug text-velvet-secondary">{text}</p>
          </li>
        ))}
      </ul>
      <Note text={LIVE.note} />
    </Section>
  );
}
