import { site } from "@/data/site"
import { faqs } from "@/data/faqs"
import { pricedOffers } from "@/data/offers"
import { Seo } from "@/components/shared/Seo"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqSection } from "@/components/sections/FaqSection"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { OfferSpotlight } from "@/components/sections/OfferSpotlight"
import { PlansPreview } from "@/components/sections/PlansPreview"
import { TrustStrip } from "@/components/sections/TrustStrip"
import { WhoItsFor } from "@/components/sections/WhoItsFor"
import { WhyUs } from "@/components/sections/WhyUs"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: site.address,
  areaServed: "IN",
  makesOffer: pricedOffers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    description: o.description,
    price: o.price,
    priceCurrency: "INR",
  })),
}

export default function Home() {
  return (
    <>
      <Seo />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Hero />
      <TrustStrip />
      <div className="h-16 md:h-24" />
      <OfferSpotlight />
      <PlansPreview />
      <HowItWorks />
      <WhoItsFor />
      <WhyUs />
      <FaqSection items={faqs.slice(0, 5)} moreLink />
      <CtaBand />
    </>
  )
}
