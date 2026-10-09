import { CasinoLink } from "@/components/OutboundLink";
import { DesktopToc, MobileToc } from "@/components/TableOfContents";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { FactsSection } from "@/components/sections/FactsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LicenseSection } from "@/components/sections/LicenseSection";
import { LiveSection } from "@/components/sections/LiveSection";
import { MobileSection } from "@/components/sections/MobileSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { OfficialSiteSection } from "@/components/sections/OfficialSiteSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { PaymentsSection } from "@/components/sections/PaymentsSection";
import { ProsConsSection } from "@/components/sections/ProsConsSection";
import { RatingsSection } from "@/components/sections/RatingsSection";
import { RegistrationSection } from "@/components/sections/RegistrationSection";
import { ResponsibleSection } from "@/components/sections/ResponsibleSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { TipsSection } from "@/components/sections/TipsSection";
import { VerdictSection } from "@/components/sections/VerdictSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { FEATURED, SECTION_IDS } from "@/data/content";
import { useActiveSection, useOutOfView } from "@/lib/use-active-section";
import { formatUAH } from "@/lib/utils";

function SidebarOffer() {
  return (
    <div className="programme-frame mt-8 bg-velvet-surface/80 p-5">
      <p className="font-ui text-xs text-velvet-secondary">{FEATURED.bonus.title}</p>
      <p className="mt-1.5 font-heading text-xl leading-tight text-rose-gold tabular">{formatUAH(FEATURED.bonus.maxAmount)}</p>
      <p className="font-ui text-xs text-rose-white">+ {FEATURED.bonus.freeSpins} фріспінів</p>
      <Button asChild size="sm" className="mt-4 w-full">
        <CasinoLink href={FEATURED.affiliateUrl}>Грати в {FEATURED.name}</CasinoLink>
      </Button>
      <p className="mt-2.5 font-ui text-[0.6875rem] text-velvet-muted">21+. Грайте відповідально.</p>
    </div>
  );
}

export function HomePage() {
  const active = useActiveSection(SECTION_IDS);
  const offerHidden = useOutOfView("hero-offer");

  return (
    <div id="top" className="pb-20 lg:pb-0">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-rose-gold px-4 py-2 font-ui text-sm font-semibold text-velvet-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Перейти до огляду
      </a>
      <TopBar />
      <SiteHeader />
      <HeroSection />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MobileToc active={active} />
        <div className="lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-20">
          <aside className="hidden lg:block">
            <div
              data-toc-scroller
              className="scrollbar-thin sticky top-[calc(var(--header-h)+2rem)] max-h-[calc(100dvh-var(--header-h)-3rem)] overflow-y-auto pb-6 pr-2 pt-10"
            >
              <DesktopToc active={active} />
              <SidebarOffer />
            </div>
          </aside>

          <main id="main" className="min-w-0 max-w-[60rem] pt-6 lg:pt-8">
            <VerdictSection />
            <ProsConsSection />
            <ReviewsSection />
            <OverviewSection />
            <FactsSection />
            <OfficialSiteSection />
            <RegistrationSection />
            <BonusesSection />
            <PaymentsSection />
            <GamesSection />
            <LiveSection />
            <MobileSection />
            <SupportSection />
            <LicenseSection />
            <TipsSection />
            <RatingsSection />
            <NewsSection />
            <FaqSection />
            <AboutSection />
            <ResponsibleSection />
          </main>
        </div>
      </div>

      <SiteFooter />
      <MobileCtaBar visible={offerHidden} />
      <StructuredData />
    </div>
  );
}
