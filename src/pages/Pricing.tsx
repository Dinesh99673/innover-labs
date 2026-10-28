import { ArrowRightIcon } from "lucide-react"

import { faqs } from "@/data/faqs"
import { getOffer, pricedOffers } from "@/data/offers"
import { offerWhatsAppLink } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/brand/icons"
import { AddOns } from "@/components/pricing/AddOns"
import { ComparisonTable } from "@/components/pricing/ComparisonTable"
import { OfferCard } from "@/components/pricing/OfferCard"
import { PageHero } from "@/components/shared/PageHero"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Seo } from "@/components/shared/Seo"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqSection } from "@/components/sections/FaqSection"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const custom = getOffer("custom-build")!
  const CustomIcon = custom.icon

  return (
    <>
      <Seo
        title="Plans & Pricing"
        description="Fixed-price website, domain and business email plans from ₹1,999. Launch in 12: domain, email and a 2–3 page website for ₹4,999, delivered in 12 hours."
      />
      <PageHero
        eyebrow="Plans & pricing"
        title={
          <>
            Simple, fixed pricing. <span className="text-brand-gradient">Fast delivery.</span>
          </>
        }
        description="One-time prices, no hidden charges and everything handed over in your name. Pick a plan and we'll get started today."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:pt-4">
          {pricedOffers.map((offer, i) => (
            <Reveal key={offer.slug} delay={i * 0.06} className="h-full">
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl border bg-surface p-7 sm:p-9 md:flex-row md:items-center">
            <span className="absolute top-0 left-0 size-10 bg-brand-sky/70 [clip-path:polygon(0_0,100%_0,0_100%)]" aria-hidden="true" />
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-navy text-white">
              <CustomIcon className="size-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{custom.name}</h3>
              <p className="mt-1 text-muted-foreground">{custom.description}</p>
            </div>
            <Button asChild variant="default" size="xl">
              <a href={offerWhatsAppLink(custom)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Discuss your idea <ArrowRightIcon />
              </a>
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Compare plans"
          title="Every feature, side by side"
          description="Every plan includes a domain in your name, deliverability setup for email and real human support."
        />
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Add-ons"
          title="Need a little extra?"
          description="Add these to any plan, at the start or later."
        />
        <AddOns />
      </Section>

      <FaqSection id="faq" items={faqs} tone="muted" />
      <CtaBand />
    </>
  )
}
