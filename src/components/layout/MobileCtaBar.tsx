import { Button } from "@/components/ui/button";
import { CasinoLogo } from "@/components/CasinoLogo";
import { CasinoLink } from "@/components/OutboundLink";
import { FEATURED } from "@/data/content";
import { cn } from "@/lib/utils";

/** Bottom conversion bar for phones/tablets; shown whenever the hero offer card is off-screen. */
export function MobileCtaBar({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-velvet-border bg-velvet-deep/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <CasinoLogo casino={FEATURED} size="sm" />
        <div className="min-w-0 flex-1 font-ui leading-tight">
          <p className="truncate text-xs text-velvet-secondary">{FEATURED.bonus.title}</p>
          <p className="truncate text-sm font-semibold text-rose-gold tabular">{FEATURED.bonus.headline}</p>
        </div>
        <Button asChild size="sm" tabIndex={visible ? 0 : -1}>
          <CasinoLink href={FEATURED.affiliateUrl} tabIndex={visible ? 0 : -1}>
            Грати
          </CasinoLink>
        </Button>
      </div>
    </div>
  );
}
