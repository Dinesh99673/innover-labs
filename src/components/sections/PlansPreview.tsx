import { Link } from "react-router"
import { ArrowRightIcon } from "lucide-react"

import { pricedOffers } from "@/data/offers"
import { OfferCard } from "@/components/pricing/OfferCard"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"

export function PlansPreview() {
  const plans = pricedOffers.slice(0, 3)
  return (
    <Section>
      <SectionHeading
        eyebrow="Plans & pricing"
        title="Simple plans. Fixed prices. Fast delivery."
        description="Pick the plan that fits where your business is today. You can always upgrade later."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
        {plans.map((offer, i) => (
          <Reveal key={offer.slug} delay={i * 0.08} className="h-full">
            <OfferCard offer={offer} maxFeatures={5} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="xl" className="text-brand-navy">
          <Link to="/pricing">
            Compare all plans <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
