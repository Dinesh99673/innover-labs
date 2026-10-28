import { Link } from "react-router"
import { motion } from "motion/react"
import { ArrowRightIcon, CheckIcon, GlobeIcon, LockIcon, MailCheckIcon } from "lucide-react"

import { flagship } from "@/data/offers"
import { formatINR } from "@/lib/format"
import { offerWhatsAppLink } from "@/lib/whatsapp"
import { DeliveryBadge } from "@/components/brand/DeliveryBadge"
import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Container } from "@/components/shared/Section"
import { Eyebrow } from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const promises = ["No hidden charges", "You own your domain", "Support on WhatsApp"]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 size-[38rem] rounded-full bg-brand-sky/25 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-start gap-6"
        >
          <Eyebrow>Where idea meets reality</Eyebrow>
          <h1 className="text-[2.6rem] leading-[1.08] font-extrabold text-balance sm:text-6xl lg:text-[4.1rem]">
            Your business, online in <span className="text-brand-gradient">12 hours.</span>
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
            Domain, professional email and a 2–3 page website, set up and live by tomorrow morning. One flat price:{" "}
            <strong className="font-semibold text-brand-navy">{formatINR(flagship.price!)}</strong>.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href={offerWhatsAppLink(flagship)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Start on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-brand-navy/15 bg-white/70 text-brand-navy">
              <Link to="/pricing">
                See all plans <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm font-medium text-brand-slate">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-brand-ice text-brand-blue">
                  <CheckIcon className="size-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        <HeroVisual />
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      <GeoBlocks className="absolute -top-8 -right-6 w-[46%] sm:-right-10" />

      {/* Browser mock: the website we deliver */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="relative mt-16 mr-6 overflow-hidden rounded-2xl border bg-white shadow-brand-lg sm:mr-14"
      >
        <div className="flex items-center gap-3 border-b bg-surface px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-brand-navy/15" />
            <span className="size-2.5 rounded-full bg-brand-navy/15" />
            <span className="size-2.5 rounded-full bg-brand-navy/15" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs text-brand-slate ring-1 ring-border">
            <LockIcon className="size-3 text-emerald-600" />
            yourbusiness.com
          </div>
        </div>
        <div className="space-y-4 p-5" aria-hidden="true">
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-brand-navy" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-border" />
              <div className="h-2 w-8 rounded-full bg-border" />
              <div className="h-2 w-8 rounded-full bg-border" />
            </div>
          </div>
          <div className="rounded-xl bg-brand-gradient p-5">
            <div className="h-3 w-3/5 rounded-full bg-white/90" />
            <div className="mt-2 h-3 w-2/5 rounded-full bg-white/60" />
            <div className="mt-4 h-6 w-24 rounded-md bg-white" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border p-3">
                <div className="mb-2 size-6 rounded-md bg-brand-ice" />
                <div className="h-2 w-full rounded-full bg-border" />
                <div className="mt-1.5 h-2 w-2/3 rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating proof chips */}
      <FloatingChip
        className="-bottom-6 left-0 sm:-left-6"
        delay={0.7}
        icon={<MailCheckIcon className="size-5" />}
        title="hello@yourbusiness.com"
        subtitle="Inbox ready"
      />
      <FloatingChip
        className="top-1/3 -left-2 hidden sm:flex lg:-left-12"
        delay={0.9}
        icon={<GlobeIcon className="size-5" />}
        title="Domain connected"
        subtitle="SSL secured"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1, ease }}
        className="absolute right-0 -bottom-8 sm:right-2"
      >
        <DeliveryBadge />
      </motion.div>
    </div>
  )
}

function FloatingChip({
  className,
  delay,
  icon,
  title,
  subtitle,
}: {
  className: string
  delay: number
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 5, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute flex items-center gap-3 rounded-2xl border bg-white/95 py-2.5 pr-4 pl-2.5 shadow-brand backdrop-blur ${className}`}
    >
      <span className="grid size-10 place-items-center rounded-xl bg-brand-ice text-brand-blue">{icon}</span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold text-brand-navy">{title}</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-600">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {subtitle}
        </span>
      </span>
    </motion.div>
  )
}
