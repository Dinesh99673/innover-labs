import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
}

const tones = {
  default: "bg-background",
  muted: "bg-surface",
  navy: "bg-brand-navy text-white",
}

export function Section({
  tone = "default",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: keyof typeof tones }) {
  return (
    <section className={cn("relative scroll-mt-24 py-16 md:py-24", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
