import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { formatINR } from "@/lib/format"
import { comparison, pricedOffers } from "@/data/offers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ComparisonTable() {
  const popularIndex = pricedOffers.findIndex((o) => o.popular)

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-brand">
      <Table className="min-w-[720px] text-[15px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[30%] bg-surface px-6 py-5 font-heading text-base text-brand-navy">Features</TableHead>
            {pricedOffers.map((o, i) => (
              <TableHead
                key={o.slug}
                className={cn(
                  "px-4 py-5 text-center align-bottom",
                  i === popularIndex ? "bg-brand-navy text-white" : "bg-surface text-brand-navy"
                )}
              >
                {i === popularIndex && (
                  <span className="mb-1 block text-[10px] font-semibold tracking-[0.2em] text-brand-sky uppercase">
                    Most popular
                  </span>
                )}
                <span className="block font-heading text-base font-bold">{o.name}</span>
                <span className={cn("block text-sm font-medium", i === popularIndex ? "text-white/75" : "text-muted-foreground")}>
                  {formatINR(o.price!)}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparison.map((row) => (
            <TableRow key={row.feature} className="hover:bg-brand-ice/40">
              <TableCell className="px-6 py-4 font-medium whitespace-normal text-foreground/90">{row.feature}</TableCell>
              {row.values.map((v, i) => (
                <TableCell
                  key={i}
                  className={cn("px-4 py-4 text-center", i === popularIndex && "bg-brand-ice/60 font-semibold text-brand-navy")}
                >
                  {v === true ? (
                    <CheckIcon className="mx-auto size-5 text-brand-blue" strokeWidth={2.5} aria-label="Included" />
                  ) : v === false ? (
                    <MinusIcon className="mx-auto size-4 text-muted-foreground/50" aria-label="Not included" />
                  ) : (
                    v
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
