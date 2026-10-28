// TODO: Social links are still placeholders.
export const site = {
  name: "Innover Labs",
  tagline: "Where idea meets reality",
  description:
    "Innover Labs gets small businesses online fast: domain, professional email and a website, set up in as little as 12 hours at a fixed price.",
  // Domain not confirmed yet; used for canonical/OG URLs.
  url: "https://www.innoverlabs.example",
  email: "connect@innoverlabs.com",
  phone: "+91 78218 36954",
  phoneHref: "tel:+917821836954",
  // Digits only, country code first (used to build wa.me links).
  whatsapp: "917821836954",
  address: "Pune, Maharashtra",
  hours: "Mon–Sat, 9:00 AM – 9:00 PM IST",
  responseTime: "within 30 minutes during working hours",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
    facebook: "https://facebook.com/",
  },
} as const

export type Socials = keyof typeof site.socials
