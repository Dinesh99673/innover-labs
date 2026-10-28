import { BadgeIndianRupeeIcon, HeadsetIcon, KeyRoundIcon, TimerIcon } from "lucide-react"

import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

const reasons = [
  {
    icon: BadgeIndianRupeeIcon,
    title: "Fixed price, no surprises",
    text: "The price you see is the price you pay. No setup fees or hidden add-ons, and renewals are shared upfront.",
  },
  {
    icon: TimerIcon,
    title: "Speed without shortcuts",
    text: "Templates we built in-house and a tested checklist let us move fast without cutting corners on quality or security.",
  },
  {
    icon: KeyRoundIcon,
    title: "You own everything",
    text: "Domain in your name, every login handed over. No lock-in. Your business is yours.",
  },
  {
    icon: HeadsetIcon,
    title: "Real humans on WhatsApp",
    text: "No ticket queues or bots. Message us and a real person who knows your project replies.",
  },
]

export function WhyUs() {
  return (
    <Section tone="muted" className="overflow-hidden">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            className="mb-8 md:mb-10"
            eyebrow="Why Innover Labs"
            title="Agency quality, without the agency wait"
            description="Most agencies take weeks and quote in lakhs. We've made getting online fast, affordable and refreshingly simple."
          />
          <GeoBlocks className="hidden max-w-[260px] lg:block" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border bg-white p-7 shadow-brand">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
