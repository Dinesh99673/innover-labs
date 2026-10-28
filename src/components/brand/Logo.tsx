import { cn } from "@/lib/utils"
import { LogomarkShapes } from "@/components/brand/Logomark"

/*
 * Full lockup: vector mark + the original wordmark raster (background removed).
 * Both share the same 206px-tall coordinate space, so they stay aligned at any size.
 */
const WORDMARK_X = 240
const WORDMARK_W = 985
const HEIGHT = 206

export function Logo({
  className,
  tone = "default",
  tagline = false,
}: {
  className?: string
  tone?: "default" | "white"
  tagline?: boolean
}) {
  const file = [
    "wordmark",
    tone === "white" && "white",
    tagline && "tagline",
  ]
    .filter(Boolean)
    .join("-")

  return (
    <svg
      viewBox={`0 0 ${WORDMARK_X + WORDMARK_W} ${HEIGHT}`}
      className={cn("h-9 w-auto", className)}
      role="img"
      aria-label="Innover Labs"
    >
      <LogomarkShapes reversed={tone === "white"} />
      <image
        href={`/brand/${file}.webp`}
        x={WORDMARK_X}
        y={0}
        width={WORDMARK_W}
        height={HEIGHT}
      />
    </svg>
  )
}
