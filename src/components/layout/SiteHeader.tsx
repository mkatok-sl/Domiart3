import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CasinoLink } from "@/components/OutboundLink";
import { FEATURED, HEADER_NAV, SITE } from "@/data/content";

export function BoxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 32" className={className} aria-hidden fill="none">
      <path d="M2 31V14a12 12 0 0 1 24 0v17" stroke="var(--color-rose-gold)" strokeWidth="1.4" />
      <path d="M6.5 31V15a7.5 7.5 0 0 1 15 0v16" stroke="var(--color-lavender)" strokeWidth="1" />
      <circle cx="14" cy="21" r="1.6" fill="var(--color-rose-gold)" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] border-b border-velvet-border/80 bg-velvet-deep/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${SITE.name} — на головну`}>
          <BoxMark className="h-8 w-7 shrink-0" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-[1.4rem] italic text-rose-white-light">{SITE.name}</span>
            <span className="mt-1 hidden truncate font-ui text-[0.6875rem] text-velvet-muted sm:block">{SITE.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Основна навігація" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {HEADER_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 font-ui text-sm text-velvet-secondary transition-colors hover:bg-velvet-hover hover:text-rose-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild size="sm" className="ml-auto md:ml-0">
          <CasinoLink href={FEATURED.affiliateUrl}>Грати в {FEATURED.name}</CasinoLink>
        </Button>
      </div>
    </header>
  );
}
