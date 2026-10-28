import { Link } from "react-router"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { site } from "@/data/site"
import { legalNav } from "@/data/nav"
import { offers } from "@/data/offers"
import { whatsappLink } from "@/lib/whatsapp"
import { ColorBar } from "@/components/brand/ColorBar"
import { Logo } from "@/components/brand/Logo"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/brand/icons"
import { Container } from "@/components/shared/Section"

const socials = [
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedInIcon },
  { label: "X", href: site.socials.x, icon: XIcon },
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
]

const YEAR = new Date().getFullYear()

const company = [
  { label: "About us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/pricing#faq" },
  { label: "Contact", to: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-deep text-white/75">
      <ColorBar onDark />
      <div className="absolute inset-0 bg-grid-light mask-[linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex max-w-sm flex-col gap-5">
          <Logo tone="white" tagline className="h-11 self-start" />
          <p className="text-sm leading-relaxed">
            Fixed-price, fast-delivery websites, domains and business email for growing Indian businesses.
          </p>
          <div className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/15 hover:text-white"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Plans">
          {offers.map((o) => (
            <FooterLink key={o.slug} to={`/pricing/${o.slug}`}>
              {o.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          {company.map((l) => (
            <FooterLink key={l.to} to={l.to}>
              {l.label}
            </FooterLink>
          ))}
          {legalNav.map((l) => (
            <FooterLink key={l.to} to={l.to}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Get in touch">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-brand-sky" /> WhatsApp us
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className="flex items-start gap-3 hover:text-white">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-brand-sky" /> {site.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="flex items-start gap-3 break-all hover:text-white">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-brand-sky" /> {site.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand-sky" /> {site.address}
          </li>
        </FooterColumn>
      </Container>
      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {YEAR} {site.name}. All rights reserved.</p>
          <p className="tracking-[0.25em] text-brand-sky uppercase">{site.tagline}</p>
        </Container>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-sm font-semibold tracking-wide text-white">{title}</h3>
      <ul className="flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}
