import { Check, ShieldCheck } from "lucide-react";
import { CasinoLogo } from "@/components/CasinoLogo";
import { CasinoLink } from "@/components/OutboundLink";
import { RatingStars } from "@/components/RatingStars";
import { Paragraph, Section, SubHeading } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AUTHOR, CASINOS_DATA, VERDICT_INTRO, type Casino } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { formatRating, formatUAH } from "@/lib/utils";

/** Top-pick card. SEO: brand names are H3 for the first five casinos. */
export function CasinoCard({ casino }: { casino: Casino }) {
  const Title = casino.rank <= 5 ? "h3" : "p";
  const facts = [
    { label: "Вейджер", value: casino.wagering },
    { label: "Виплати", value: "до 24 год" },
    { label: "Мін. депозит", value: formatUAH(casino.minDeposit) },
    { label: "Мін. виведення", value: formatUAH(casino.minWithdrawal) },
  ];

  return (
    <article className="rounded-lg border border-velvet-border bg-velvet-surface p-5 sm:p-7">
      <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] md:gap-9">
        <div className="min-w-0">
          <header className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <CasinoLogo casino={casino} showRank />
            <div className="min-w-[10rem] flex-1">
              <Title className="font-heading text-[1.75rem] leading-none text-rose-white-light">{casino.name}</Title>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-ui text-sm">
                <RatingStars value={casino.rating} size="sm" />
                <span className="font-semibold text-rose-white tabular">{formatRating(casino.rating)}</span>
                <Badge variant="sage">
                  <ShieldCheck strokeWidth={1.5} aria-hidden />
                  Ліцензія {casino.license.number}
                </Badge>
              </div>
            </div>
          </header>

          <p className="mt-5 max-w-[48ch] text-[1.0625rem] italic leading-relaxed text-velvet-secondary">{casino.tagline}</p>

          <ul className="mt-5 space-y-2.5">
            {casino.highlights.map((item) => (
              <li key={item} className="flex gap-3 font-ui text-[0.9375rem] leading-snug text-rose-white/90">
                <Check className="mt-0.5 size-4 shrink-0 text-sage" strokeWidth={2} aria-hidden />
                <span>{formatText(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="programme-frame bg-velvet-bg/40 p-5 sm:p-6">
          <p className="font-ui text-xs text-velvet-secondary">{casino.bonus.title}</p>
          <p className="mt-2 font-heading text-[2rem] leading-none text-rose-gold tabular">
            <span className="mr-1.5 font-ui text-sm font-normal text-velvet-secondary">до</span>
            {formatUAH(casino.bonus.maxAmount)}
          </p>
          <p className="mt-1.5 font-ui text-sm text-rose-white">+ {casino.bonus.freeSpins} фріспінів</p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 font-ui text-sm">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs text-velvet-muted">{f.label}</dt>
                <dd className="mt-0.5 font-semibold text-rose-white tabular">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button asChild className="flex-1">
              <CasinoLink href={casino.affiliateUrl}>Грати</CasinoLink>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href="#overview">Повний огляд</a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Renders automatically once CASINOS_DATA holds more than one brand. */
function ComparisonTable() {
  return (
    <>
      <SubHeading>Порівняння казино</SubHeading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Казино</TableHead>
            <TableHead>Рейтинг</TableHead>
            <TableHead>Вітальний бонус</TableHead>
            <TableHead>Вейджер</TableHead>
            <TableHead>Виплати</TableHead>
            <TableHead>Мін. депозит</TableHead>
            <TableHead>Ліцензія</TableHead>
            <TableHead className="text-right">Перехід</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CASINOS_DATA.map((c) => (
            <TableRow key={c.slug}>
              <TableCell className="tabular text-velvet-muted">{c.rank}</TableCell>
              <TableCell className="font-semibold">{c.name}</TableCell>
              <TableCell className="tabular">{formatRating(c.rating)}</TableCell>
              <TableCell className="text-rose-gold tabular">{c.bonus.headline}</TableCell>
              <TableCell className="tabular">{c.wagering}</TableCell>
              <TableCell>{c.payout}</TableCell>
              <TableCell className="tabular">{formatUAH(c.minDeposit)}</TableCell>
              <TableCell>{c.license.number}</TableCell>
              <TableCell className="text-right">
                <Button asChild size="sm">
                  <CasinoLink href={c.affiliateUrl}>Грати</CasinoLink>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export function VerdictSection() {
  const lead = CASINOS_DATA[0];
  return (
    <Section id="verdict">
      <Paragraph text={VERDICT_INTRO} />
      <div className="space-y-5">
        {CASINOS_DATA.map((casino) => (
          <CasinoCard key={casino.slug} casino={casino} />
        ))}
      </div>

      <figure className="max-w-[60ch] border-l border-rose-gold/60 py-1 pl-6">
        <blockquote className="font-display text-[clamp(1.25rem,1.05rem+0.7vw,1.6rem)] italic leading-[1.5] text-rose-white-light">
          {lead.verdict}
        </blockquote>
        <figcaption className="mt-4 font-ui text-sm text-velvet-secondary">
          {AUTHOR.name}, {AUTHOR.role.toLowerCase()}
        </figcaption>
      </figure>

      {CASINOS_DATA.length > 1 && <ComparisonTable />}
    </Section>
  );
}
