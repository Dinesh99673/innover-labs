import { Link } from "react-router"
import { ArrowRightIcon, CheckIcon, ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { formatINR } from "@/lib/format"
import { offerWhatsAppLink } from "@/lib/whatsapp"
import type { Offer } from "@/data/offers"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Button } from "@/components/ui/button"

export function OfferPrice({ offer, light = false }: { offer: Offer; light?: boolean }) {
  if (offer.price === null) {
    return <p className={cn("font-heading text-3xl font-extrabold", light ? "text-white" : "text-brand-navy")}>Let's talk</p>
  }
  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className={cn("font-heading text-4xl font-extrabold tracking-tight", light ? "text-white" : "text-brand-navy")}>
        {formatINR(offer.price)}
      </span>
      <span className={cn("text-sm whitespace-nowrap", light ? "text-white/70" : "text-muted-foreground")}>one-time + GST</span>
    </p>
  )
}

export function OfferCard({ offer, maxFeatures }: { offer: Offer; maxFeatures?: number }) {
  const Icon = offer.icon
  const features = maxFeatures ? offer.features.slice(0, maxFeatures) : offer.features
  const popular = offer.popular

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1",
        popular
          ? "border-2 border-brand-navy shadow-brand-lg lg:-mt-4 lg:mb-4"
          : "border-border hover:border-brand-blue/50 hover:shadow-brand"
      )}
    >
      {/* Logo-style triangle notch */}
      <span
        className={cn(
          "absolute top-0 left-0 size-10 [clip-path:polygon(0_0,100%_0,0_100%)]",
          popular ? "bg-brand-blue" : "bg-brand-sky/70"
        )}
        aria-hidden="true"
      />

      <div className="mb-6 flex items-start justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-ice text-brand-navy">
          <Icon className="size-6" />
        </span>
        {popular ? (
          <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold tracking-wide text-white">
            Most popular
          </span>
        ) : null}
      </div>

      <h3 className="text-xl font-bold">{offer.name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{offer.tagline}</p>

      <div className="mt-6 flex flex-col gap-3">
        <OfferPrice offer={offer} />
        <span
          className={cn(
            "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
            popular ? "bg-brand-blue text-white" : "bg-brand-ice text-brand-navy"
          )}
        >
          <ClockIcon className="size-3.5" />
          {offer.price === null ? "Timeline scoped with you" : `Delivered in ${offer.delivery}`}
        </span>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-3 border-t pt-6 text-sm">
        {features.map((f) => (
          <li key={f} className="flex gap-3">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-blue" strokeWidth={2.5} />
            <span className="text-foreground/85">{f}</span>
          </li>
        ))}
        {maxFeatures && offer.features.length > maxFeatures ? (
          <li className="pl-7 text-xs font-medium text-muted-foreground">
            + {offer.features.length - maxFeatures} more
          </li>
        ) : null}
      </ul>

      <div className="mt-8 flex flex-col gap-2.5">
        <Button asChild variant={popular ? "brand" : "default"} size="xl">
          <a href={offerWhatsAppLink(offer)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {offer.price === null ? "Discuss your idea" : "Choose plan"}
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg" className="text-brand-navy">
          <Link to={`/pricing/${offer.slug}`}>
            View details <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
