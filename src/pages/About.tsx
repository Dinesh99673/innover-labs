import { ClipboardCheckIcon, EyeIcon, GaugeIcon, KeyRoundIcon, LayersIcon, PenToolIcon, UsersIcon } from "lucide-react"

import { site } from "@/data/site"
import { Logomark } from "@/components/brand/Logomark"
import { PageHero } from "@/components/shared/PageHero"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Seo } from "@/components/shared/Seo"
import { CtaBand } from "@/components/sections/CtaBand"

const values = [
  { icon: GaugeIcon, title: "Speed", text: "Small businesses can't wait weeks. We work in hours, not months." },
  { icon: EyeIcon, title: "Transparency", text: "Fixed prices, clear timelines and honest advice, even when it means a smaller sale." },
  { icon: KeyRoundIcon, title: "Ownership", text: "Your domain, your accounts, your data. We hand over every key." },
  { icon: PenToolIcon, title: "Craft", text: "Fast doesn't mean generic. Every site is tuned to the business behind it." },
]

const engine = [
  {
    icon: LayersIcon,
    title: "In-house templates",
    text: "A library of tested, mobile-first layouts we designed ourselves, ready to tailor to your brand.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "A standard checklist",
    text: "The same proven steps for every launch: DNS, email security, SSL, SEO basics and QA.",
  },
  {
    icon: UsersIcon,
    title: "A dedicated launch team",
    text: "Setup, design and QA run side by side instead of one after another.",
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Innover Labs helps small businesses and founders get a professional online presence fast, without agency prices or weeks of waiting."
      />
      <PageHero
        eyebrow="About Innover Labs"
        title={
          <>
            We turn ideas into online businesses, <span className="text-brand-gradient">fast.</span>
          </>
        }
        description="Innover Labs exists so that small businesses and new founders can look as professional online as the big players, without agency prices or weeks of waiting."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-foreground/80">
            <h2 className="text-3xl font-bold sm:text-4xl">Our story</h2>
            <p>
              We kept meeting the same people: a bakery owner, a physiotherapist, a first-time founder. They all had great
              businesses and no proper online presence. Agencies quoted weeks and big budgets. DIY website builders left them
              stuck on DNS settings at midnight.
            </p>
            <p>
              So we built a better way: a clear, fixed-price package and a process tuned until it runs in hours. You bring the
              idea. We handle the domain, email and website, and hand it all back to you in your name.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-10 text-white shadow-brand-lg sm:p-14">
              <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
              <Logomark reversed className="relative h-14" />
              <blockquote className="relative mt-8 font-heading text-3xl leading-tight font-extrabold sm:text-4xl">
                “{site.tagline}.”
              </blockquote>
              <figcaption className="relative mt-6 text-white/75">
                Every business starts as an idea. Our job is to close the gap between that idea and a real, working presence
                that customers can find, trust and contact.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What we value" title="The principles behind every launch" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border bg-white p-7">
                <span className="absolute top-0 right-0 size-10 bg-brand-sky/60 [clip-path:polygon(0_0,100%_0,100%_100%)]" aria-hidden="true" />
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-ice text-brand-navy">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Behind the 12 hours"
          title="How we keep 12 hours realistic"
          description="Speed isn't a gimmick. It comes from doing the same thing well, again and again."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {engine.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-4 rounded-3xl border bg-white p-8 text-center shadow-brand">
                <span className="grid size-16 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Let's turn your idea into reality." />
    </>
  )
}
