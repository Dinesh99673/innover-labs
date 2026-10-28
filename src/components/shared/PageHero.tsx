import type { ReactNode } from "react"

import { ColorBar } from "@/components/brand/ColorBar"
import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { Container } from "@/components/shared/Section"
import { Eyebrow } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

/** Header band for inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid mask-[linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <GeoBlocks className="pointer-events-none absolute top-8 -right-16 hidden w-72 opacity-90 lg:block xl:right-10" />
      <Container className="relative py-16 md:py-24">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-extrabold text-balance sm:text-5xl lg:text-6xl lg:leading-[1.08]">{title}</h1>
          {description && <p className="text-lg text-pretty text-muted-foreground">{description}</p>}
          {children}
        </Reveal>
      </Container>
      <ColorBar />
    </section>
  )
}
