import { site } from "@/data/site"
import type { Offer } from "@/data/offers"
import { formatINR } from "@/lib/format"

export const defaultWhatsAppMessage =
  "Hi Innover Labs! I'd like to get my business online. Can you help?"

export function whatsappLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function offerWhatsAppLink(offer: Offer) {
  const price = offer.price === null ? "" : ` (${formatINR(offer.price)})`
  return whatsappLink(
    `Hi Innover Labs! I'm interested in the *${offer.name}* plan${price}. My business is: `
  )
}
