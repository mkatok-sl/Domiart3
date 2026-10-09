import { ChevronRight, Clock, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { CasinoLogo } from "@/components/CasinoLogo";
import { CasinoLink } from "@/components/OutboundLink";
import { RatingStars } from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { AUTHOR, FEATURED, HERO, REVIEW_TABS, SITE } from "@/data/content";
import { formatText } from "@/lib/format-text";
import { formatDateUk, formatRating, formatUAH } from "@/lib/utils";

export function HeroSection() {
  const casino = FEATURED;

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 md:pt-12 lg:px-8 lg:pb-14">
        <nav aria-label="Навігаційний ланцюжок" className="font-ui text-xs text-velvet-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-rose-white">
                Головна
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3" />
            </li>
            <li>Огляди казино</li>
            <li aria-hidden>
              <ChevronRight className="size-3" />
            </li>
            <li aria-current="page" className="text-velvet-secondary">
              {casino.name}
            </li>
          </ol>
        </nav>

        <div className="mt-7 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,384px)] lg:items-end lg:gap-16">
          {/* Intro column */}
          <div className="min-w-0">
            <h1 className="max-w-[17ch] text-[clamp(2.15rem,1.3rem+3.4vw,3.85rem)] leading-[1.06]">{HERO.h1}</h1>

            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.72] text-rose-white/90 sm:text-[1.125rem] sm:leading-[1.75]">{formatText(HERO.lede)}</p>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Ключові факти">
              {HERO.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-velvet-border bg-velvet-surface/70 px-3 py-1 font-ui text-xs text-velvet-secondary tabular"
                >
                  {chip}
                </li>
              ))}
            </ul>

            {/* Byline — E-E-A-T */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-velvet-border/70 pt-6 font-ui text-sm">
              <a href="#author" className="group flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full bg-velvet-plum font-display text-base italic text-rose-white-light ring-1 ring-rose-gold/50 ring-offset-2 ring-offset-velvet-bg"
                >
                  {AUTHOR.initials}
                </span>
                <span className="leading-tight">
                  <span className="block text-velvet-muted">Автор огляду</span>
                  <span className="block font-semibold text-rose-white group-hover:text-rose-white-light group-hover:underline">
                    {AUTHOR.name}
                  </span>
                </span>
              </a>
              <span className="leading-tight">
                <span className="block text-velvet-muted">Оновлено</span>
                <time dateTime={SITE.updated} className="block text-rose-white">
                  {formatDateUk(SITE.updated)}
                </time>
              </span>
              <span className="flex items-center gap-1.5 text-velvet-secondary">
                <Clock className="size-4 text-lavender" strokeWidth={1.5} aria-hidden />
                {SITE.readingTime} читання
              </span>
            </div>
          </div>

          {/* Offer card in an arch — the page's signature element */}
          <aside id="hero-offer" aria-label={`Бонус ${casino.name}`} className="mx-auto w-full max-w-[384px]">
            <div className="programme-frame arch arch-frame curtain px-6 pb-7 pt-[4.5rem] text-center sm:px-8">
              <div className="flex justify-center">
                <CasinoLogo casino={casino} showRank />
              </div>
              <p className="mt-4 font-heading text-[1.65rem] leading-none text-rose-white-light">{casino.name}</p>
              <div className="mt-3 flex items-center justify-center gap-2 font-ui text-sm">
                <RatingStars value={casino.rating} />
                <span className="font-semibold text-rose-white tabular">{formatRating(casino.rating)}</span>
                <span className="text-velvet-muted">/ 5</span>
              </div>
              <p className="mt-2 inline-flex items-center gap-1.5 font-ui text-xs text-sage">
                <ShieldCheck className="size-3.5" strokeWidth={1.5} aria-hidden />
                Ліцензія {casino.license.number}, нагляд {casino.license.regulator}
              </p>

              <div className="hairline-x my-6" />

              <p className="font-ui text-xs text-velvet-secondary">{casino.bonus.title}</p>
              <p className="mt-2 font-heading text-[2.35rem] leading-none text-rose-gold tabular">
                {formatUAH(casino.bonus.maxAmount)}
              </p>
              <p className="mt-2 font-ui text-sm text-rose-white">+ {casino.bonus.freeSpins} фріспінів</p>

              <dl className="mx-auto mt-5 grid max-w-[18rem] grid-cols-2 gap-px overflow-hidden rounded-md border border-velvet-border bg-velvet-border font-ui text-xs">
                <div className="bg-velvet-surface/90 px-3 py-2.5">
                  <dt className="text-velvet-muted">Вейджер</dt>
                  <dd className="mt-0.5 font-semibold text-rose-white tabular">{casino.wagering}</dd>
                </div>
                <div className="bg-velvet-surface/90 px-3 py-2.5">
                  <dt className="text-velvet-muted">Мін. депозит</dt>
                  <dd className="mt-0.5 font-semibold text-rose-white tabular">{formatUAH(casino.minDeposit)}</dd>
                </div>
              </dl>

              <Button asChild size="lg" className="mt-6 w-full">
                <CasinoLink href={casino.affiliateUrl}>Отримати бонус</CasinoLink>
              </Button>
              <a
                href="#overview"
                className="mt-4 inline-block font-ui text-sm text-lavender underline-offset-4 hover:text-rose-white hover:underline"
              >
                Читати повний огляд
              </a>
              <p className="mt-4 font-ui text-[0.6875rem] leading-relaxed text-velvet-muted">
                {SITE.legalAge}+. Умови актуальні на {formatDateUk(SITE.updated)}. Грайте відповідально.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Review tabs — mirrors the competitor's tab row, as in-page anchors */}
      <div className="border-y border-velvet-border/70 bg-velvet-deep/40">
        <nav aria-label={`Розділи огляду ${casino.name}`} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="scrollbar-none -mx-1 flex gap-1 overflow-x-auto py-2">
            {REVIEW_TABS.map((tab) => (
              <li key={tab.href} className="shrink-0">
                <a
                  href={tab.href}
                  className="block rounded-md px-3.5 py-2 font-ui text-sm text-velvet-secondary transition-colors hover:bg-velvet-hover hover:text-rose-white"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
