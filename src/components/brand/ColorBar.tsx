import { cn } from "@/lib/utils"

/** Thin navy | blue | sky divider, the logo palette in one line. */
export function ColorBar({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  // On navy backgrounds the navy segment would vanish, so shift the palette one step lighter.
  const [a, b, c] = onDark
    ? ["bg-brand-blue", "bg-brand-sky", "bg-white"]
    : ["bg-brand-navy", "bg-brand-blue", "bg-brand-sky"]
  return (
    <div className={cn("flex h-1 w-full", className)} aria-hidden="true">
      <span className={cn("w-1/2", a)} />
      <span className={cn("w-[30%]", b)} />
      <span className={cn("w-1/5", c)} />
    </div>
  )
}
