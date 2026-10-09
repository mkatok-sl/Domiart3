import { RatingStars } from "@/components/RatingStars";
import { Paragraphs, Section, SubHeading } from "@/components/Section";
import { Progress } from "@/components/ui/progress";
import { FEATURED, METHODOLOGY } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { formatRating } from "@/lib/utils";

export function RatingsSection() {
  const criteria = FEATURED.ratingBreakdown;
  const average = criteria.reduce((s, c) => s + c.score, 0) / criteria.length;

  return (
    <Section id="ratings">
      <div className="grid gap-8 rounded-lg border border-velvet-border bg-velvet-surface p-6 sm:p-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <div>
          <p className="font-ui text-sm text-velvet-secondary">Загальна оцінка</p>
          <p className="mt-2 flex items-baseline gap-2">
            <span className="font-heading text-[4rem] leading-none text-rose-gold tabular">{formatRating(average)}</span>
            <span className="font-ui text-sm text-velvet-muted">з 5</span>
          </p>
          <RatingStars value={average} className="mt-3" />
        </div>
        <ul className="space-y-5">
          {criteria.map((c) => (
            <li key={c.label}>
              <div className="flex items-baseline justify-between gap-4 font-ui text-sm">
                <span className="font-semibold text-rose-white">{c.label}</span>
                <span className="font-semibold text-rose-white tabular">{formatRating(c.score)}</span>
              </div>
              <Progress value={c.score} max={5} className="mt-2" aria-label={`${c.label}: ${formatRating(c.score)} з 5`} />
              <p className="mt-1.5 font-ui text-xs leading-relaxed text-velvet-secondary">{formatText(c.note)}</p>
            </li>
          ))}
        </ul>
      </div>

      <SubHeading>Як ми оцінюємо казино</SubHeading>
      <Paragraphs items={METHODOLOGY} />
    </Section>
  );
}
