import { useSearchParams } from "react-router"

import { site } from "@/data/site"
import { ContactCard } from "@/components/contact/ContactCard"
import { ContactForm } from "@/components/contact/ContactForm"
import { PageHero } from "@/components/shared/PageHero"
import { Section } from "@/components/shared/Section"
import { Reveal } from "@/components/shared/Reveal"
import { Seo } from "@/components/shared/Seo"

export default function Contact() {
  const [params] = useSearchParams()

  return (
    <>
      <Seo
        title="Contact"
        description="Tell us about your business and pick a plan. Innover Labs replies on WhatsApp, usually within 30 minutes during working hours."
      />
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let's get you <span className="text-brand-gradient">online.</span>
          </>
        }
        description={`Fill in a few details and we'll get back to you ${site.responseTime}. Or just message us on WhatsApp.`}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="rounded-3xl border bg-white p-6 shadow-brand sm:p-10">
            <h2 className="text-2xl font-bold">Send us an enquiry</h2>
            <p className="mt-1 mb-8 text-muted-foreground">
              Fields marked <span className="text-brand-blue">*</span> are required.
            </p>
            <ContactForm defaultPlan={params.get("plan") ?? undefined} />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactCard />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
