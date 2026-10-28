import { Link } from "react-router"
import {
  ArrowRightIcon,
  GlobeIcon,
  LayoutTemplateIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareTextIcon,
  SearchIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { flagship } from "@/data/offers"
import { offerWhatsAppLink } from "@/lib/whatsapp"
import { DeliveryBadge } from "@/components/brand/DeliveryBadge"
import { WhatsAppIcon } from "@/components/brand/icons"
import { OfferPrice } from "@/components/pricing/OfferCard"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"

const included = [
  { icon: GlobeIcon, title: "Your own domain", text: ".com or .in, registered in your name" },
  { icon: MailIcon, title: "Business email", text: "2 mailboxes like you@yourbrand.com" },
  { icon: LayoutTemplateIcon, title: "2–3 page website", text: "Designed for your business, mobile-first" },
  { icon: ServerIcon, title: "Hosting for 1 year", text: "Fast, reliable and fully managed" },
  { icon: ShieldCheckIcon, title: "SSL security", text: "The https padlock that builds trust" },
  { icon: MessageSquareTextIcon, title: "WhatsApp + contact form", text: "Leads land straight on your phone" },
  { icon: MapPinIcon, title: "Google Maps", text: "Customers find your shop in one tap" },
  { icon: SearchIcon, title: "Basic SEO", text: "Set up so Google can find and list you" },
]

export function OfferSpotlight() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="The flagship offer"
        title={
          <>
            Everything you need to go online. <span className="text-brand-blue">One price.</span>
          </>
        }
        description="No monthly fees for year one, no technical jargon, no running between vendors. We handle the domain, email and website, and you get the keys."
      />

      <Reveal className="grid overflow-hidden rounded-[2rem] border bg-white shadow-brand-lg lg:grid-cols-[0.9fr_1.6fr]">
        <div className="relative flex flex-col gap-6 overflow-hidden bg-brand-gradient p-8 text-white sm:p-10">
          <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
          <span className="absolute -right-10 -bottom-10 size-40 bg-brand-blue/60 [clip-path:polygon(100%_0,100%_100%,0_100%)]" aria-hidden="true" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-sky uppercase">Most popular</p>
              <h3 className="mt-2 text-3xl font-extrabold text-white">{flagship.name}</h3>
            </div>
            <DeliveryBadge className="size-24 shrink-0 ring-4 ring-white/15" />
          </div>
          <p className="relative text-white/80">{flagship.description}</p>
          <div className="relative mt-auto flex flex-col gap-5">
            <OfferPrice offer={flagship} light />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild variant="white" size="xl">
                <a href={offerWhatsAppLink(flagship)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Get started
                </a>
              </Button>
              <Button asChild variant="outline-white" size="xl">
                <Link to={`/pricing/${flagship.slug}`}>
                  Plan details <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <ul className="grid gap-px bg-border sm:grid-cols-2">
          {included.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 bg-white p-6 sm:p-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-ice text-brand-blue">
                <Icon className="size-5" />
              </span>
              <div>
                <h4 className="font-heading text-base font-semibold">{title}</h4>
                <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
