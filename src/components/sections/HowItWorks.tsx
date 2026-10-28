import { ClipboardListIcon, MousePointerClickIcon, PartyPopperIcon, WrenchIcon } from "lucide-react"

import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

const steps = [
  {
    icon: MousePointerClickIcon,
    time: "Hour 0",
    title: "Pick a plan",
    text: "Choose a package and message us on WhatsApp. We confirm the details and send a payment link.",
  },
  {
    icon: ClipboardListIcon,
    time: "Hour 1",
    title: "Share your details",
    text: "Business name, logo, a few lines about you and some photos. We send a simple checklist.",
  },
  {
    icon: WrenchIcon,
    time: "Hours 1–11",
    title: "We build & set up",
    text: "Domain, DNS, email, website design and content. You get progress updates along the way.",
  },
  {
    icon: PartyPopperIcon,
    time: "Hour 12",
    title: "You go live",
    text: "We hand over all logins and walk you through everything on a quick call.",
  },
]

export function HowItWorks() {
  return (
    <Section tone="navy" className="overflow-hidden">
      <div className="absolute inset-0 bg-grid-light mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="relative">
        <SectionHeading
          light
          eyebrow="How it works"
          title="From idea to live website in four simple steps"
          description="A clear process with no surprises. You'll know exactly what's happening at every hour."
        />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map(({ icon: Icon, time, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.1}
              className="relative flex h-full flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm transition-colors hover:bg-white/8 lg:items-center lg:text-center"
            >
                <span className="relative grid size-16 place-items-center rounded-2xl bg-brand-blue text-white shadow-[0_10px_30px_-10px_rgb(0_120_182/0.8)]">
                  <span className="absolute -top-1 -right-1 size-5 bg-brand-sky [clip-path:polygon(0_0,100%_0,100%_100%)]" aria-hidden="true" />
                  <Icon className="size-7" />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.15em] text-brand-sky uppercase">
                  {time}
                </span>
                <h3 className="text-xl font-bold text-white">
                  <span className="mr-2 text-brand-sky">{i + 1}.</span>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
