import {
  Code2Icon,
  MailIcon,
  RocketIcon,
  ShoppingCartIcon,
  type LucideIcon,
  BriefcaseIcon,
} from "lucide-react"

export type Offer = {
  slug: string
  name: string
  /** One-time price in INR. `null` means quoted after a call. */
  price: number | null
  delivery: string
  tagline: string
  description: string
  icon: LucideIcon
  popular?: boolean
  features: string[]
  /** What the client sends us so we can start. */
  needs: string[]
}

export const offers: Offer[] = [
  {
    slug: "email-essentials",
    name: "Email Essentials",
    price: 1999,
    delivery: "6 hrs",
    tagline: "Look professional in every inbox.",
    description:
      "Swap the @gmail address for one on your own domain. We register or connect the domain, set up your mailboxes and make sure your mail lands in inboxes, not spam.",
    icon: MailIcon,
    features: [
      "Domain registration (.com / .in, 1 year) or connect your existing domain",
      "DNS setup and management",
      "2 professional mailboxes (you@yourbrand.com)",
      "Email set up on your phone and laptop",
      "SPF, DKIM & DMARC so your mail lands in inboxes",
      "7 days of WhatsApp support",
    ],
    needs: [
      "Your preferred domain name (we'll check availability)",
      "Names for the 2 mailboxes",
      "Existing domain login, if you already own one",
    ],
  },
  {
    slug: "launch-in-12",
    name: "Launch in 12",
    price: 4999,
    delivery: "12 hrs",
    tagline: "Your business, online in 12 hours.",
    description:
      "Everything a new business needs to look credible online: your own domain, professional email and a clean 2–3 page website, all set up and live within 12 hours.",
    icon: RocketIcon,
    popular: true,
    features: [
      "Everything in Email Essentials",
      "2–3 page responsive website (Home, About/Services, Contact)",
      "Hosting + SSL certificate (https) for 1 year",
      "WhatsApp chat button and contact form",
      "Google Maps location embed",
      "Basic on-page SEO (titles, descriptions, sitemap)",
      "Minor tweaks after launch + 7 days support",
    ],
    needs: [
      "Business name, logo (if you have one) and brand colours",
      "A few lines about your business and services",
      "Phone, WhatsApp, email and address to show on the site",
      "3–6 photos (we can use quality stock images if needed)",
    ],
  },
  {
    slug: "business-pro",
    name: "Business Pro",
    price: 9999,
    delivery: "48 hrs",
    tagline: "A complete website that grows with you.",
    description:
      "A fuller website for established businesses: more pages, more mailboxes, and the Google tools that help local customers find you.",
    icon: BriefcaseIcon,
    features: [
      "Everything in Launch in 12",
      "Up to 7 pages, including a gallery or portfolio",
      "5 professional mailboxes",
      "Google Business Profile setup",
      "Google Analytics + Search Console",
      "Blog-ready structure",
      "1 round of revisions + 15 days support",
    ],
    needs: [
      "Everything listed for Launch in 12",
      "Content for each extra page (or bullet points, and we'll write it up)",
      "Photos for the gallery or portfolio",
      "Access to an existing Google Business Profile, if any",
    ],
  },
  {
    slug: "store-starter",
    name: "Store Starter",
    price: 19999,
    delivery: "5 days",
    tagline: "Start selling online, the right way.",
    description:
      "A ready-to-sell online store with UPI and card payments, order notifications and simple inventory, so you can take orders from day one.",
    icon: ShoppingCartIcon,
    features: [
      "Everything in Business Pro",
      "Online store with up to 50 products",
      "Razorpay / UPI / card payments",
      "Order confirmation emails",
      "Basic inventory and stock alerts",
      "2 rounds of revisions + 30 days support",
    ],
    needs: [
      "Everything listed for Business Pro",
      "Product list with names, prices and photos",
      "Business PAN / GST details for the payment gateway",
      "Shipping and return policy details",
    ],
  },
  {
    slug: "custom-build",
    name: "Custom Build",
    price: null,
    delivery: "Scoped",
    tagline: "Web apps, portals and anything in between.",
    description:
      "Need a booking system, client portal, dashboard or integration? Tell us the idea and we'll scope it, quote it and build it.",
    icon: Code2Icon,
    features: [
      "Discovery call and written scope",
      "Custom design and development",
      "Integrations (payments, CRMs, APIs)",
      "Milestone-based delivery",
      "Ongoing support options",
    ],
    needs: ["A short description of the idea", "Any examples or references you like"],
  },
]

/** The four fixed-price plans (excludes the custom quote). */
export const pricedOffers = offers.filter((o) => o.price !== null)

export const flagship = offers.find((o) => o.popular)!

export function getOffer(slug: string | undefined) {
  return offers.find((o) => o.slug === slug)
}

type Cell = boolean | string

/** Feature comparison rows; values follow `pricedOffers` order. */
export const comparison: { feature: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { feature: "Delivery time", values: ["6 hrs", "12 hrs", "48 hrs", "5 days"] },
  { feature: "Domain (1 year)", values: [true, true, true, true] },
  { feature: "Professional mailboxes", values: ["2", "2", "5", "5"] },
  { feature: "SPF / DKIM / DMARC setup", values: [true, true, true, true] },
  { feature: "Website pages", values: [false, "2–3", "Up to 7", "Store + 7"] },
  { feature: "Hosting + SSL (1 year)", values: [false, true, true, true] },
  { feature: "WhatsApp button + contact form", values: [false, true, true, true] },
  { feature: "Google Maps embed", values: [false, true, true, true] },
  { feature: "Basic on-page SEO", values: [false, true, true, true] },
  { feature: "Google Business Profile", values: [false, false, true, true] },
  { feature: "Analytics + Search Console", values: [false, false, true, true] },
  { feature: "Online payments (UPI / cards)", values: [false, false, false, true] },
  { feature: "Products", values: [false, false, false, "Up to 50"] },
  { feature: "Revisions", values: [false, "Minor tweaks", "1 round", "2 rounds"] },
  { feature: "Support after launch", values: ["7 days", "7 days", "15 days", "30 days"] },
]
