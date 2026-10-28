import { cn } from "@/lib/utils"

/** Vector redraw of the "IL" block mark from the logo (geometry in source-pixel units). */
export const MARK_WIDTH = 222
export const MARK_HEIGHT = 205

export function LogomarkShapes({ reversed = false }: { reversed?: boolean }) {
  const navy = reversed ? "#ffffff" : "var(--brand-navy)"
  const blue = "var(--brand-blue)"
  const sky = "var(--brand-sky)"
  return (
    <>
      <polygon points="0,0 58,0 58,45" fill={blue} />
      <polygon points="0,45 58,90 0,90" fill={sky} />
      <polygon points="0,90 58,90 58,134" fill={navy} />
      <polygon points="0,90 58,134 58,205 0,205" fill={blue} />
      <rect x="100" y="0" width="58" height="153" fill={blue} />
      <rect x="100" y="153" width="122" height="52" fill={sky} />
      <polygon points="100,153 156,205 100,205" fill={navy} />
    </>
  )
}

export function Logomark({
  className,
  reversed,
  title = "Innover Labs",
}: {
  className?: string
  reversed?: boolean
  title?: string
}) {
  return (
    <svg
      viewBox={`0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`}
      className={cn("h-8 w-auto", className)}
      role="img"
      aria-label={title}
    >
      <LogomarkShapes reversed={reversed} />
    </svg>
  )
}
