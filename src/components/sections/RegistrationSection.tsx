import { Fingerprint, ScanFace } from "lucide-react";
import { Paragraph, Section, StepList, SubHeading } from "@/components/Section";
import { REGISTRATION } from "@/data/content";
import { formatText } from "@/lib/format-text";

const METHOD_ICONS = [Fingerprint, ScanFace];

export function RegistrationSection() {
  return (
    <Section id="registration">
      <Paragraph text={REGISTRATION.intro} />
      <StepList items={REGISTRATION.steps} />

      <SubHeading>{REGISTRATION.verificationTitle}</SubHeading>
      <Paragraph text={REGISTRATION.verificationIntro} />
      <div className="grid gap-4 sm:grid-cols-2">
        {REGISTRATION.methods.map((m, i) => {
          const Icon = METHOD_ICONS[i] ?? Fingerprint;
          return (
            <div key={m.title} className="rounded-lg border border-velvet-border bg-velvet-surface p-5">
              <p className="flex items-center gap-2.5 font-ui font-semibold text-rose-white">
                <Icon className="size-5 text-lavender" strokeWidth={1.25} aria-hidden />
                {m.title}
              </p>
              <p className="mt-2.5 text-[0.98rem] leading-relaxed text-velvet-secondary">{formatText(m.text)}</p>
            </div>
          );
        })}
      </div>
      <Paragraph text={REGISTRATION.outro} />
    </Section>
  );
}
