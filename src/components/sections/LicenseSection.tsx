import { ExternalLink as ExternalIcon } from "lucide-react";
import { ExternalLink } from "@/components/OutboundLink";
import { BulletList, Paragraph, Section, StepList, SubHeading } from "@/components/Section";
import { FEATURED, LICENSE_INFO, SITE } from "@/data/content";
import { formatDateUk } from "@/lib/utils";

export function LicenseSection() {
  const l = FEATURED.license;
  const rows = [
    { label: "Регулятор", value: `${l.regulator} (до 2025 року — ${l.formerRegulator})` },
    { label: "Номер ліцензії", value: l.number },
    { label: "Дата видачі", value: formatDateUk(l.issued) },
    { label: "Ліцензіат", value: l.holder },
    { label: "Строк дії", value: l.term },
    { label: "Вид діяльності", value: l.activity },
    { label: "Офіційний домен", value: FEATURED.domain },
  ];

  return (
    <Section id="license">
      <Paragraph text={LICENSE_INFO.intro} />

      <dl className="overflow-hidden rounded-lg border border-velvet-border bg-velvet-surface font-ui text-sm">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 border-b border-velvet-border/70 px-5 py-3.5 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:gap-6">
            <dt className="text-velvet-muted">{r.label}</dt>
            <dd className="text-rose-white tabular">{r.value}</dd>
          </div>
        ))}
      </dl>

      <SubHeading>Як перевірити ліцензію самостійно</SubHeading>
      <StepList items={LICENSE_INFO.verifySteps} />
      <ExternalLink
        href={SITE.regulatorUrl}
        className="inline-flex items-center gap-2 font-ui text-sm text-lavender underline-offset-4 hover:text-rose-white hover:underline"
      >
        Відкрити сайт PlayCity
        <ExternalIcon className="size-3.5" strokeWidth={1.5} aria-hidden />
      </ExternalLink>

      <SubHeading>Що дає ліцензія гравцю</SubHeading>
      <BulletList items={LICENSE_INFO.benefits} />
    </Section>
  );
}
