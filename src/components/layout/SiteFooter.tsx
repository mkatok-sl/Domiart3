import { BoxMark } from "@/components/layout/SiteHeader";
import { ExternalLink } from "@/components/OutboundLink";
import { FOOTER, SITE } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function SiteFooter() {
  const year = new Date(`${SITE.updated}T12:00:00`).getFullYear();
  return (
    <footer className="mt-8 border-t border-velvet-border bg-velvet-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_0.8fr] lg:px-8">
        <div>
          <p className="flex items-center gap-3">
            <BoxMark className="h-8 w-7" />
            <span className="font-display text-2xl italic text-rose-white-light">{SITE.name}</span>
          </p>
          <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-velvet-secondary">{formatText(FOOTER.about)}</p>
        </div>
        <div>
          <p className="font-ui text-sm font-semibold text-rose-white">Прозорість</p>
          <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-velvet-secondary">{formatText(FOOTER.disclosure)}</p>
        </div>
        <nav aria-label="Корисні посилання">
          <p className="font-ui text-sm font-semibold text-rose-white">Корисне</p>
          <ul className="mt-3 space-y-2 font-ui text-sm text-velvet-secondary">
            <li><a className="hover:text-rose-white" href="#responsible">Відповідальна гра</a></li>
            <li><a className="hover:text-rose-white" href="#ratings">Методика оцінювання</a></li>
            <li><ExternalLink className="hover:text-rose-white" href={SITE.regulatorUrl}>Регулятор PlayCity</ExternalLink></li>
            <li><ExternalLink className="hover:text-rose-white" href={SITE.gamblingTherapyUrl}>Gambling Therapy</ExternalLink></li>
            <li><a className="hover:text-rose-white" href={`mailto:${SITE.editorEmail}`}>Написати редакції</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-velvet-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 font-ui text-xs leading-relaxed text-velvet-muted sm:px-6 md:flex-row md:items-center lg:px-8">
          <span className="grid h-6 w-fit min-w-9 place-items-center rounded-full border border-rose-gold/50 px-2 font-semibold text-rose-gold tabular">
            {SITE.legalAge}+
          </span>
          <p className="max-w-[90ch]">
            Матеріали призначені для осіб від {SITE.legalAge} року. {SITE.statutoryWarning}
          </p>
          <p className="shrink-0 md:ml-auto">© {year} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}
