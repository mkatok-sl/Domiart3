import { Lock } from "lucide-react";
import { BulletList, Paragraphs, Section, SubHeading } from "@/components/Section";
import { FEATURED, OFFICIAL_SITE } from "@/data/content";

/** Schematic of the casino lobby — pure CSS, no screenshots. */
function LobbySchematic() {
  return (
    <figure aria-hidden className="overflow-hidden rounded-lg border border-velvet-border bg-velvet-deep">
      <div className="flex items-center gap-2 border-b border-velvet-border px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-velvet-border" />
          <span className="size-2 rounded-full bg-velvet-border" />
          <span className="size-2 rounded-full bg-velvet-border" />
        </span>
        <span className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-velvet-surface px-3 py-1 font-ui text-[0.6875rem] text-velvet-secondary">
          <Lock className="size-3 text-sage" strokeWidth={1.5} />
          {FEATURED.domain}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm text-rose-gold">{FEATURED.name}</span>
          <span className="flex gap-1.5">
            <span className="h-5 w-12 rounded bg-velvet-elevated" />
            <span className="h-5 w-16 rounded bg-rose-gold/70" />
          </span>
        </div>
        <div className="scrollbar-none mt-4 flex gap-1.5 overflow-hidden">
          {OFFICIAL_SITE.categories.map((c, i) => (
            <span
              key={c}
              className={
                i === 0
                  ? "shrink-0 rounded-full bg-velvet-elevated px-2.5 py-1 font-ui text-[0.625rem] text-rose-white"
                  : "shrink-0 rounded-full border border-velvet-border px-2.5 py-1 font-ui text-[0.625rem] text-velvet-muted"
              }
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className="aspect-[3/4] rounded-md border border-velvet-border/70"
              style={{
                background: `linear-gradient(160deg, ${["#5E3F6E", "#463C63", "#563D5E", "#3F3345"][i % 4]}, #2F2533)`,
              }}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}

export function OfficialSiteSection() {
  return (
    <Section id="official-site">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] xl:items-start">
        <Paragraphs items={OFFICIAL_SITE.paragraphs} />
        <LobbySchematic />
      </div>
      <SubHeading>Що є в особистому кабінеті</SubHeading>
      <BulletList items={OFFICIAL_SITE.features} />
    </Section>
  );
}
