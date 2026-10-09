import { Mail, MessageCircle, Send } from "lucide-react";
import { BulletList, Note, Paragraph, Section, SubHeading } from "@/components/Section";
import { FEATURED, SUPPORT } from "@/data/content";

const CHANNEL_ICONS = [MessageCircle, Mail, Send];

export function SupportSection() {
  return (
    <Section id="support">
      <Paragraph text={SUPPORT.intro} />
      <ul className="flex flex-wrap gap-3">
        {FEATURED.supportChannels.map((channel, i) => {
          const Icon = CHANNEL_ICONS[i] ?? MessageCircle;
          return (
            <li
              key={channel}
              className="inline-flex items-center gap-2.5 rounded-md border border-velvet-border bg-velvet-surface px-4 py-3 font-ui text-sm text-rose-white"
            >
              <Icon className="size-4 text-lavender" strokeWidth={1.5} aria-hidden />
              {channel}
            </li>
          );
        })}
      </ul>
      <SubHeading>Як отримати відповідь швидше</SubHeading>
      <BulletList items={SUPPORT.tips} />
      <Note text={SUPPORT.escalation} />
    </Section>
  );
}
