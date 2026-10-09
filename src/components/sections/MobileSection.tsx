import { TriangleAlert } from "lucide-react";
import { Paragraph, Section, StepList, SubHeading } from "@/components/Section";
import { MOBILE } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function MobileSection() {
  return (
    <Section id="mobile">
      <Paragraph text={MOBILE.intro} />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <SubHeading>Android: через Chrome</SubHeading>
          <StepList items={MOBILE.android} />
        </div>
        <div className="space-y-5">
          <SubHeading>iPhone та iPad: через Safari</SubHeading>
          <StepList items={MOBILE.ios} />
        </div>
      </div>
      <p className="flex max-w-[68ch] gap-3 rounded-lg border border-dusty-rose/35 bg-dusty-rose/[0.06] p-4 font-ui text-sm leading-relaxed text-rose-white/90">
        <TriangleAlert className="mt-0.5 size-4 shrink-0 text-dusty-rose" strokeWidth={1.5} aria-hidden />
        <span>{formatText(MOBILE.warning)}</span>
      </p>
    </Section>
  );
}
