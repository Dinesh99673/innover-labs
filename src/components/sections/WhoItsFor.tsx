import {
  BriefcaseIcon,
  DumbbellIcon,
  GraduationCapIcon,
  RocketIcon,
  ScissorsIcon,
  StethoscopeIcon,
  StoreIcon,
  UtensilsCrossedIcon,
} from "lucide-react"

import { Section } from "@/components/shared/Section"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

const audiences = [
  { icon: StoreIcon, label: "Shops & retailers" },
  { icon: StethoscopeIcon, label: "Clinics & doctors" },
  { icon: GraduationCapIcon, label: "Coaches & tutors" },
  { icon: UtensilsCrossedIcon, label: "Restaurants & cafés" },
  { icon: ScissorsIcon, label: "Salons & studios" },
  { icon: DumbbellIcon, label: "Gyms & fitness" },
  { icon: BriefcaseIcon, label: "Freelancers & consultants" },
  { icon: RocketIcon, label: "Startups" },
]

export function WhoItsFor() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who it's for"
        title="Built for businesses that need to look credible, fast"
        description="Whether you're opening your first shop or finally replacing that @gmail address, we've done it before."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {audiences.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 0.04}>
            <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border bg-white px-4 py-7 text-center transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-ice text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <span className="font-heading text-[15px] font-semibold text-brand-navy">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
