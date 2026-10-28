import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/shared/Reveal"

/** Uppercase, wide-tracked label above headings. Echoes the logo tagline. */
export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase sm:text-[13px]",
        light ? "text-brand-sky" : "text-brand-slate",
        className
      )}
    >
      <span className={cn("h-px w-6", light ? "bg-brand-sky" : "bg-brand-blue")} aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  light?: boolean
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex max-w-3xl flex-col gap-4 md:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]", light && "text-white")}>
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base text-pretty sm:text-lg", light ? "text-white/75" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
