import { cn } from "@/lib/utils"
import { flagship } from "@/data/offers"
import { formatINR } from "@/lib/format"
import { Container } from "@/components/shared/Section"
import { Reveal } from "@/components/shared/Reveal"

// TODO: swap in real numbers (e.g. "50+ businesses launched") once available.
// Cell borders for a 2×2 grid on mobile and a single row on desktop.
const cellBorders = [
  "border-r border-b lg:border-b-0",
  "border-b lg:border-r lg:border-b-0",
  "border-r",
  "",
]

const stats = [
  { value: "12 hrs", label: "From brief to live website" },
  { value: formatINR(flagship.price!), label: "Domain + email + website" },
  { value: "100%", label: "Mobile-friendly & secure" },
  { value: "7 days", label: "WhatsApp support after launch" },
]

export function TrustStrip() {
  return (
    <section aria-label="Highlights" className="relative">
      <Container>
        <Reveal className="grid grid-cols-2 overflow-hidden rounded-3xl border bg-white shadow-brand lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={cn("flex flex-col gap-1 p-6 sm:p-8", cellBorders[i])}>
              <span className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
