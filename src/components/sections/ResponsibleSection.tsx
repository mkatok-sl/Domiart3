import { ExternalLink as ExternalIcon, Phone } from "lucide-react";
import { ExternalLink } from "@/components/OutboundLink";
import { BulletList, Paragraph, Section, SubHeading } from "@/components/Section";
import { RESPONSIBLE, SITE } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function ResponsibleSection() {
  return (
    <Section id="responsible">
      <Paragraph text={RESPONSIBLE.intro} />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-5">
          <SubHeading>Тривожні ознаки</SubHeading>
          <BulletList items={RESPONSIBLE.signs} />
        </div>
        <div className="space-y-5">
          <SubHeading>Що допоможе</SubHeading>
          <ul className="space-y-5">
            {RESPONSIBLE.tools.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-lavender" strokeWidth={1.25} aria-hidden />
                <div>
                  <p className="font-ui font-semibold text-rose-white">{title}</p>
                  <p className="mt-1 text-[1rem] leading-relaxed text-velvet-secondary">{formatText(text)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1 font-ui text-sm">
            <a href={`tel:${SITE.hotline}`} className="inline-flex items-center gap-2 text-lavender hover:text-rose-white">
              <Phone className="size-4" strokeWidth={1.5} aria-hidden />
              Подзвонити {SITE.hotline}
            </a>
            <ExternalLink href={SITE.gamblingTherapyUrl} className="inline-flex items-center gap-2 text-lavender hover:text-rose-white">
              Gambling Therapy
              <ExternalIcon className="size-3.5" strokeWidth={1.5} aria-hidden />
            </ExternalLink>
            <ExternalLink href={SITE.regulatorUrl} className="inline-flex items-center gap-2 text-lavender hover:text-rose-white">
              PlayCity
              <ExternalIcon className="size-3.5" strokeWidth={1.5} aria-hidden />
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border border-velvet-border bg-velvet-deep/60 p-5 sm:flex-row sm:items-center sm:p-6">
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-rose-gold/60 font-ui text-sm font-semibold text-rose-gold tabular">
          {SITE.legalAge}+
        </span>
        <p className="font-ui text-sm leading-relaxed text-rose-white/90">{SITE.statutoryWarning}</p>
      </div>
    </Section>
  );
}
