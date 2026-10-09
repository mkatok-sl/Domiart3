import { Section } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/data/content";
import { formatText } from "@/lib/format-text";

export function FaqSection() {
  return (
    <Section id="faq">
      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="rounded-lg border border-velvet-border bg-velvet-surface px-5 sm:px-7"
      >
        {FAQ_DATA.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>
              <p className="max-w-[66ch] text-[1.0313rem] leading-[1.75] text-rose-white/88">{formatText(item.a)}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
