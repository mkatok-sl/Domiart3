import { Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/data/content";

export function TopBar() {
  return (
    <div className="border-b border-velvet-border/70 bg-velvet-deep font-ui text-xs text-velvet-secondary">
      <div className="mx-auto flex max-w-7xl items-center gap-x-5 gap-y-1 px-4 py-2 sm:px-6 lg:px-8">
        <span
          className="grid h-6 min-w-9 place-items-center rounded-full border border-rose-gold/50 px-2 font-semibold text-rose-gold tabular"
          aria-label={`Тільки для осіб від ${SITE.legalAge} року`}
        >
          {SITE.legalAge}+
        </span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <ShieldCheck className="size-3.5 text-lavender" strokeWidth={1.5} aria-hidden />
          Лише оператори з ліцензією, нагляд PlayCity
        </span>
        <a href="#responsible" className="min-w-0 truncate underline-offset-4 hover:text-rose-white hover:underline">
          Азартні ігри можуть викликати залежність
        </a>
        <a
          href={`tel:${SITE.hotline}`}
          className="ml-auto hidden shrink-0 items-center gap-1.5 hover:text-rose-white md:inline-flex"
        >
          <Phone className="size-3.5 text-lavender" strokeWidth={1.5} aria-hidden />
          Lifeline Ukraine <span className="tabular text-rose-white">{SITE.hotline}</span>
        </a>
      </div>
    </div>
  );
}
