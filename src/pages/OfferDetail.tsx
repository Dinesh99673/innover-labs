import { Link, useParams } from "react-router"
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, ClipboardListIcon, ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { formatINR } from "@/lib/format"
import { offerWhatsAppLink } from "@/lib/whatsapp"
import { faqs } from "@/data/faqs"
import { getOffer, offers } from "@/data/offers"
import { ColorBar } from "@/components/brand/ColorBar"
import { DeliveryBadge } from "@/components/brand/DeliveryBadge"
import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { WhatsAppIcon } from "@/components/brand/icons"
import { OfferPrice } from "@/components/pricing/OfferCard"
import { Container, Section } from "@/components/shared/Section"
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Seo } from "@/components/shared/Seo"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqSection } from "@/components/sections/FaqSection"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Button } from "@/components/ui/button"
import NotFound from "@/pages/NotFound"

export default function OfferDetail() {
  const { slug } = useParams()
  const offer = getOffer(slug)
  if (!offer) return <NotFound />

  const Icon = offer.icon
  const others = offers.filter((o) => o.slug !== offer.slug)
  const priceText = offer.price === null ? "Custom quote" : formatINR(offer.price)
  const hours = offer.delivery.match(/^(\d+) hrs$/)?.[1]

  return (
    <>
      <Seo
        title={`${offer.name}: ${offer.price === null ? "Custom quote" : `${priceText}, ${offer.delivery}`}`}
        description={offer.description}
      />

      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
        <GeoBlocks className="pointer-events-none absolute -right-20 -bottom-24 hidden w-96 opacity-30 lg:block" />
        <Container className="relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col items-start gap-5">
            <Link to="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white">
              <ArrowLeftIcon className="size-4" /> All plans
            </Link>
            <Eyebrow light>{offer.popular ? "Most popular plan" : "Plan details"}</Eyebrow>
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <Icon className="size-7" />
              </span>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">{offer.name}</h1>
            </div>
            <p className="max-w-xl text-xl text-white/85">{offer.tagline}</p>
            <p className="max-w-xl text-white/70">{offer.description}</p>
            <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
              <Button asChild variant="white" size="xl">
                <a href={offerWhatsAppLink(offer)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> {offer.price === null ? "Discuss your idea" : "Order on WhatsApp"}
                </a>
              </Button>
              <Button asChild variant="outline-white" size="xl">
                <Link to={`/contact?plan=${offer.slug}`}>
                  Fill the order form <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-3xl bg-white p-8 text-foreground shadow-brand-lg">
              <span className="absolute top-0 left-0 size-12 rounded-tl-3xl bg-brand-sky [clip-path:polygon(0_0,100%_0,0_100%)]" aria-hidden="true" />
              {hours && <DeliveryBadge hours={hours} className="absolute -top-10 -right-4 size-24 ring-4" />}
              <p className="text-sm font-semibold tracking-[0.2em] text-brand-slate uppercase">Price</p>
              <div className="mt-2">
                <OfferPrice offer={offer} />
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t pt-6 text-sm">
                <p className="flex items-center gap-3">
                  <ClockIcon className="size-5 text-brand-blue" />
                  <span>
                    Delivery: <strong className="text-brand-navy">{offer.price === null ? "Scoped with you" : offer.delivery}</strong>
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <ClipboardListIcon className="size-5 text-brand-blue" />
                  <span>Clock starts once payment and your details are in</span>
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
        <ColorBar onDark />
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="rounded-3xl border bg-white p-8 shadow-brand sm:p-10">
            <h2 className="text-2xl font-bold">What's included</h2>
            <ul className="mt-6 grid gap-4">
              {offer.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-ice text-brand-blue">
                    <CheckIcon className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border bg-surface p-8 sm:p-10">
            <h2 className="text-2xl font-bold">What we need from you</h2>
            <p className="mt-2 text-sm text-muted-foreground">We send this as a simple checklist on WhatsApp.</p>
            <ol className="mt-6 grid gap-4">
              {offer.needs.map((n, i) => (
                <li key={n} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-navy text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-foreground/90">{n}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {offer.price !== null && <HowItWorks />}

      <FaqSection items={faqs.slice(0, 6)} />

      <Section tone="muted">
        <SectionHeading eyebrow="Other plans" title="Not quite the right fit?" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => {
            const OIcon = o.icon
            return (
              <Link
                key={o.slug}
                to={`/pricing/${o.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand"
              >
                <OIcon className="size-6 text-brand-blue" />
                <span className="font-heading text-lg font-bold text-brand-navy">{o.name}</span>
                <span className="text-sm text-muted-foreground">
                  {o.price === null ? "Custom quote" : `${formatINR(o.price)} · ${o.delivery}`}
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  View plan <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </Section>

      <CtaBand />

      {/* Sticky order bar on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground">{offer.name}</p>
            <p className="font-heading text-lg font-extrabold text-brand-navy">{priceText}</p>
          </div>
          <Button asChild variant="brand" size="lg" className={cn("h-11 rounded-xl px-5")}>
            <a href={offerWhatsAppLink(offer)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Order now
            </a>
          </Button>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
