import { Check, Copy, Crown, Gift } from "lucide-react";
import { useState } from "react";
import { CasinoLink } from "@/components/OutboundLink";
import { BulletList, Note, Paragraph, Paragraphs, Section, SubHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { BONUSES, FEATURED } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { formatUAH } from "@/lib/utils";

function PromoBox() {
  const code = FEATURED.bonus.promoCode;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="programme-frame flex flex-col gap-5 bg-velvet-surface p-6 sm:flex-row sm:items-center sm:p-7">
      <Gift className="size-8 shrink-0 text-rose-gold" strokeWidth={1.1} aria-hidden />
      <div className="min-w-0 flex-1">
        {code ? (
          <>
            <p className="font-ui text-xs text-velvet-secondary">Промокод для нових гравців</p>
            <p className="mt-1 font-heading text-2xl tracking-[0.08em] text-rose-white-light">{code}</p>
          </>
        ) : (
          <p className="max-w-[46ch] text-[1.0313rem] leading-relaxed text-rose-white/90">{formatText(BONUSES.promoFallback)}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2.5">
        {code && (
          <Button variant="outline" onClick={copy} aria-live="polite">
            {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
            {copied ? "Скопійовано" : "Копіювати код"}
          </Button>
        )}
        <Button asChild>
          <CasinoLink href={FEATURED.affiliateUrl}>Отримати бонус</CasinoLink>
        </Button>
      </div>
    </div>
  );
}

function WagerExample() {
  const { bonus, multiplier, cap } = BONUSES.wagerExample;
  const rows = [
    { label: "Бонус на рахунку", value: formatUAH(bonus) },
    { label: `Вейджер`, value: `× ${multiplier}` },
    { label: "Потрібно поставити", value: formatUAH(bonus * multiplier), strong: true },
    { label: `Максимальний виграш з бонусу (х${cap})`, value: formatUAH(bonus * cap) },
  ];
  return (
    <figure className="max-w-md rounded-lg border border-velvet-border bg-velvet-surface">
      <figcaption className="border-b border-velvet-border px-5 py-3 font-ui text-xs text-velvet-secondary">
        Приклад розрахунку
      </figcaption>
      <dl className="divide-y divide-velvet-border/70 font-ui text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-4 px-5 py-3">
            <dt className="text-velvet-secondary">{r.label}</dt>
            <dd className={r.strong ? "font-semibold text-rose-gold tabular" : "text-rose-white tabular"}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

export function BonusesSection() {
  return (
    <Section id="bonuses">
      <Paragraph text={BONUSES.intro} />

      <SubHeading>{FEATURED.bonus.title}</SubHeading>
      <Paragraph text={BONUSES.welcomeIntro} />

      <div className="programme-frame bg-velvet-surface/70 p-5 sm:p-7">
        <ol className="grid gap-x-8 sm:grid-cols-2">
          {BONUSES.welcomePackage.map((step, i) => (
            <li
              key={step.reward + i}
              className="flex gap-4 border-t border-velvet-border/70 py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
            >
              <span className="w-8 shrink-0 pt-0.5 font-heading text-xl leading-none text-lavender tabular" aria-label={`Депозит ${i + 1}`}>
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-ui font-semibold text-rose-white tabular">{step.reward}</span>
                <span className="mt-0.5 block font-ui text-sm text-velvet-secondary">{step.condition}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="flex gap-4 border-t border-velvet-border/70 py-4">
          <span className="w-8 shrink-0 pt-0.5 text-rose-gold" aria-hidden>
            <Crown className="size-5" strokeWidth={1.25} />
          </span>
          <span className="min-w-0">
            <span className="block font-ui font-semibold text-rose-gold tabular">«Суперсекретний» бонус до 335 000 ₴</span>
            <span className="mt-0.5 block font-ui text-sm text-velvet-secondary">відкривається після сьомого депозиту</span>
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-velvet-border/70 pt-6">
          <Button asChild>
            <CasinoLink href={FEATURED.affiliateUrl}>Отримати вітальний пакет</CasinoLink>
          </Button>
          <p className="font-ui text-xs text-velvet-muted">Вейджер {FEATURED.wagering}. 21+. Умови можуть змінюватися.</p>
        </div>
      </div>
      <Note text={BONUSES.welcomeNote} />

      <SubHeading>{BONUSES.loyaltyTitle}</SubHeading>
      <div className="programme-frame flex flex-col gap-5 bg-velvet-surface p-6 sm:flex-row sm:p-7">
        <Crown className="size-8 shrink-0 text-rose-gold" strokeWidth={1.1} aria-hidden />
        <Paragraphs items={BONUSES.loyalty} />
      </div>

      <SubHeading>Регулярні акції та турніри</SubHeading>
      <BulletList items={BONUSES.promos} />

      <SubHeading id="promo">Промокод {FEATURED.name}</SubHeading>
      <Paragraph text={BONUSES.promoText} />
      <PromoBox />

      <SubHeading>Як працює вейджер {FEATURED.wagering}</SubHeading>
      <Paragraphs items={BONUSES.wagerText} />
      <WagerExample />
    </Section>
  );
}
