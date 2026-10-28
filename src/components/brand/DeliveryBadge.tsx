import { ClockIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/** Circular "12 HRS" seal used on the flagship offer. */
export function DeliveryBadge({
  hours = "12",
  label = "HRS",
  className,
}: {
  hours?: string
  label?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative grid size-28 place-items-center rounded-full bg-white text-brand-navy shadow-brand-lg ring-8 ring-brand-ice",
        className
      )}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--brand-ice)" strokeWidth="5" />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="var(--brand-blue)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 44 * 0.75} ${2 * Math.PI * 44}`}
        />
      </svg>
      <div className="relative flex flex-col items-center leading-none">
        <ClockIcon className="mb-1 size-4 text-brand-blue" />
        <span className="font-heading text-3xl font-extrabold">{hours}</span>
        <span className="mt-0.5 text-[10px] font-semibold tracking-[0.25em] text-brand-slate">
          {label}
        </span>
      </div>
    </div>
  )
}
