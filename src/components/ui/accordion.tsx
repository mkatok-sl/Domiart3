import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Accordion(props: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-velvet-border last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  headingLevel = "h3",
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger> & { headingLevel?: "h3" | "h4" }) {
  const Heading = headingLevel;
  return (
    <AccordionPrimitive.Header asChild>
      <Heading className="m-0 flex font-ui text-base font-semibold text-rose-white">
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            "group flex flex-1 items-start justify-between gap-4 rounded-sm py-5 text-left font-ui text-[1.02rem] font-semibold leading-snug text-rose-white transition-colors outline-none hover:text-rose-white-light focus-visible:ring-2 focus-visible:ring-ring",
            className,
          )}
          {...props}
        >
          {children}
          <ChevronDown
            aria-hidden
            className="mt-0.5 size-5 shrink-0 text-lavender transition-transform duration-200 group-data-[state=open]:rotate-180"
          />
        </AccordionPrimitive.Trigger>
      </Heading>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-5 pr-9", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
