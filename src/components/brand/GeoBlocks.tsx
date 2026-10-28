import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/*
 * Decorative block composition in the logomark's shape language:
 * squares and right triangles in navy / blue / sky on a 4×4 grid.
 */
type Shape = "sq" | "tl" | "tr" | "bl" | "br"
type Tone = "navy" | "blue" | "sky" | "ice"

const fills: Record<Tone, string> = {
  navy: "var(--brand-navy)",
  blue: "var(--brand-blue)",
  sky: "var(--brand-sky)",
  ice: "var(--brand-ice)",
}

const tiles: [col: number, row: number, shape: Shape, tone: Tone][] = [
  [0, 0, "br", "blue"],
  [1, 0, "sq", "navy"],
  [3, 0, "bl", "sky"],
  [0, 1, "sq", "blue"],
  [1, 1, "tl", "sky"],
  [2, 1, "sq", "blue"],
  [3, 1, "sq", "ice"],
  [0, 2, "tr", "navy"],
  [2, 2, "br", "navy"],
  [3, 2, "sq", "blue"],
  [1, 3, "sq", "sky"],
  [2, 3, "sq", "blue"],
  [3, 3, "tl", "navy"],
]

function path(shape: Shape, x: number, y: number, s: number) {
  const [l, t, r, b] = [x, y, x + s, y + s]
  switch (shape) {
    case "sq":
      return `M${l} ${t}H${r}V${b}H${l}Z`
    case "tl":
      return `M${l} ${t}H${r}L${l} ${b}Z`
    case "tr":
      return `M${l} ${t}H${r}V${b}Z`
    case "bl":
      return `M${l} ${t}L${r} ${b}H${l}Z`
    case "br":
      return `M${r} ${t}V${b}H${l}Z`
  }
}

export function GeoBlocks({
  className,
  scattered = false,
}: {
  className?: string
  /** Tiles drift apart and tilt (used on the 404 page). */
  scattered?: boolean
}) {
  const size = 100
  const gap = 8
  return (
    <svg
      viewBox="0 0 424 424"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      {tiles.map(([col, row, shape, tone], i) => {
        const x = col * (size + gap)
        const y = row * (size + gap)
        const drift = scattered
          ? { x: ((i * 37) % 60) - 30, y: ((i * 53) % 80) - 20, rotate: ((i * 29) % 40) - 20 }
          : { x: 0, y: 0, rotate: 0 }
        return (
          <motion.path
            key={i}
            d={path(shape, x, y, size)}
            fill={fills[tone]}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={{ opacity: 0, scale: 0.6, x: 0, y: -16, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, ...drift }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
    </svg>
  )
}
