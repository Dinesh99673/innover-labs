import { Link } from "react-router"
import { ArrowRightIcon } from "lucide-react"

import type { Faq } from "@/data/faqs"
import { whatsappLink } from "@/lib/whatsapp"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection({
  items,
  moreLink = false,
  id,
  tone = "default",
}: {
  items: Faq[]
  moreLink?: boolean
  id?: string
  tone?: "default" | "muted"
}) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            className="mb-6 md:mb-8"
            eyebrow="FAQ"
            title="Questions, answered"
            description="Can't find what you're looking for? Ask us on WhatsApp and we usually reply within minutes."
          />
          <div className="flex flex-col items-start gap-3">
            <a
              href={whatsappLink("Hi Innover Labs! I have a question: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-blue underline-offset-4 hover:underline"
            >
              Ask a question <ArrowRightIcon className="size-4" />
            </a>
            {moreLink && (
              <Link
                to="/pricing#faq"
                className="inline-flex items-center gap-1.5 font-semibold text-brand-navy underline-offset-4 hover:underline"
              >
                See all FAQs <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </div>
        </div>
        <Reveal>
          <Accordion type="single" collapsible defaultValue="item-0" className="gap-3">
            {items.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border bg-white px-6 not-last:border-b data-[state=open]:border-brand-blue/40 data-[state=open]:shadow-brand"
              >
                <AccordionTrigger className="py-5 font-heading text-base font-semibold text-brand-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                {/* h-auto: the measured height goes stale when web fonts finish loading. */}
                <AccordionContent className="h-auto pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
