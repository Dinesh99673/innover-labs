import { useState } from "react"
import { Link } from "react-router"
import { ArrowRightIcon, XIcon, ZapIcon } from "lucide-react"

import { flagship } from "@/data/offers"
import { formatINR } from "@/lib/format"

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="relative bg-brand-gradient text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-2 text-center text-[13px] sm:text-sm">
        <ZapIcon className="hidden size-4 shrink-0 text-brand-sky sm:block" aria-hidden="true" />
        <p>
          <span className="font-semibold">{flagship.name}:</span> domain, email &amp; website live in 12 hours for{" "}
          {formatINR(flagship.price!)}.
        </p>
        <Link
          to={`/pricing/${flagship.slug}`}
          className="hidden items-center gap-1 font-semibold text-brand-sky underline-offset-4 hover:underline sm:inline-flex"
        >
          See plan <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
        aria-label="Dismiss announcement"
      >
        <XIcon className="size-4" />
      </button>
    </div>
  )
}
