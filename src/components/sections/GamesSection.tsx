import { CasinoLink } from "@/components/OutboundLink";
import { Note, Paragraph, Paragraphs, Section, SubHeading } from "@/components/Section";
import { FEATURED, GAMES, TOP_SLOTS, type Slot } from "@/data/content";

/** 3:4 game card — CSS-only artwork, thin rose-gold outline on hover. */
function SlotCard({ slot }: { slot: Slot }) {
  return (
    <li>
      <CasinoLink
        href={FEATURED.affiliateUrl}
        aria-label={`${slot.name} (${slot.provider}) — грати в ${FEATURED.name}`}
        className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-lg border border-velvet-border outline-1 outline-transparent transition-[border-color,outline-color] duration-200 hover:border-rose-gold hover:outline hover:outline-rose-gold/40"
        style={{ background: `linear-gradient(165deg, ${slot.tint} 0%, #2F2533 62%, #251C28 100%)` }}
      >
        <span
          aria-hidden
          className="arch relative mx-auto mt-4 grid w-[64%] flex-1 place-items-center border border-rose-white/12 bg-velvet-deep/25 sm:mt-5 sm:w-[68%]"
        >
          <span className="font-heading text-[clamp(1.6rem,1rem+2.2vw,2.5rem)] text-rose-white/80 transition-colors duration-200 group-hover:text-rose-gold">
            {slot.glyph}
          </span>
        </span>
        <span className="relative mt-auto block p-3 sm:p-4">
          <span className="block truncate font-ui text-sm font-semibold text-rose-white-light">{slot.name}</span>
          <span className="block truncate font-ui text-xs text-velvet-secondary">{slot.provider}</span>
          <span className="mt-2 flex items-baseline justify-between gap-2 font-ui text-xs">
            <span className="whitespace-nowrap text-lavender tabular">RTP {slot.rtp.toFixed(2)}%</span>
            <span className="hidden truncate text-velvet-muted sm:inline">{slot.volatility}</span>
          </span>
        </span>
      </CasinoLink>
    </li>
  );
}

export function GamesSection() {
  return (
    <Section id="games">
      <Paragraph text={GAMES.intro} />

      <SubHeading id="top-slots">Топ слоти</SubHeading>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {TOP_SLOTS.map((slot) => (
          <SlotCard key={slot.name} slot={slot} />
        ))}
      </ul>
      <Note text={GAMES.slotsNote} />

      <SubHeading>Що таке RTP і волатильність</SubHeading>
      <Paragraphs items={GAMES.rtpText} />

      <SubHeading>Провайдери</SubHeading>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        {GAMES.providerGroups.map((group) => (
          <div key={group.title}>
            <p className="font-ui text-sm font-semibold text-rose-white">{group.title}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-velvet-border bg-velvet-surface px-2.5 py-1 font-ui text-xs text-velvet-secondary"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
