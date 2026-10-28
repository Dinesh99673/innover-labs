import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { site } from "@/data/site"
import { whatsappLink } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Button } from "@/components/ui/button"

const rows = [
  { icon: PhoneIcon, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPinIcon, label: "Location", value: site.address },
  { icon: ClockIcon, label: "Working hours", value: site.hours },
]

export function ContactCard() {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white shadow-brand-lg">
        <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
        <div className="relative flex flex-col gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-whatsapp text-white">
            <WhatsAppIcon className="size-6" />
          </span>
          <h2 className="text-2xl font-bold text-white">Fastest: WhatsApp us</h2>
          <p className="text-white/80">Most enquiries get a reply in minutes. Tell us what you need and we'll take it from there.</p>
          <Button asChild variant="white" size="xl" className="w-full sm:w-fit">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <ul className="divide-y rounded-3xl border bg-white">
        {rows.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex gap-4 p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-ice text-brand-blue">
              <Icon className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.15em] text-brand-slate uppercase">{label}</p>
              {href ? (
                <a href={href} className="font-medium wrap-break-word text-brand-navy hover:text-brand-blue">
                  {value}
                </a>
              ) : (
                <p className="font-medium text-brand-navy">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
