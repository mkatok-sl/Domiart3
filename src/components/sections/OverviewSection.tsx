import { BadgeCheck } from "lucide-react";
import { Paragraphs, Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { AUTHOR, OVERVIEW_PARAGRAPHS, SITE } from "@/data/content";
import { formatDateUk } from "@/lib/utils";

function AuthorCard() {
  return (
    <aside
      id="author"
      aria-label="Про автора"
      className="flex scroll-mt-32 flex-col gap-5 rounded-lg border border-velvet-border bg-velvet-surface p-5 sm:flex-row sm:p-6"
    >
      <span
        aria-hidden
        className="grid size-16 shrink-0 place-items-center rounded-full bg-velvet-plum font-display text-xl italic text-rose-white-light ring-1 ring-rose-gold/50 ring-offset-[3px] ring-offset-velvet-surface"
      >
        {AUTHOR.initials}
      </span>
      <div className="min-w-0">
        <p className="font-ui text-xs text-velvet-muted">Автор і перевірка фактів</p>
        <p className="mt-1 font-ui text-lg font-semibold text-rose-white-light">{AUTHOR.name}</p>
        <p className="font-ui text-sm text-lavender">{AUTHOR.role}</p>
        <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-relaxed text-velvet-secondary">{AUTHOR.bio}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {AUTHOR.expertise.map((e) => (
            <Badge key={e}>{e}</Badge>
          ))}
          <Badge variant="outline">{AUTHOR.experience}</Badge>
        </div>
        <p className="mt-4 flex items-center gap-1.5 font-ui text-xs text-velvet-secondary">
          <BadgeCheck className="size-3.5 text-sage" strokeWidth={1.5} aria-hidden />
          Дані звірено {formatDateUk(SITE.updated)}
        </p>
      </div>
    </aside>
  );
}

export function OverviewSection() {
  return (
    <Section id="overview">
      <AuthorCard />
      <Paragraphs items={OVERVIEW_PARAGRAPHS} />
    </Section>
  );
}
