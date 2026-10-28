import { useEffect } from "react"
import { useLocation } from "react-router"

/**
 * Scrolls to `#id` targets after navigation. Lazy pages may not have rendered the target
 * yet, so retry for a short while before giving up.
 */
export function HashScroll() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    let frame = 0
    let tries = 0
    const attempt = () => {
      const el = document.getElementById(id)
      if (el) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(attempt)
      }
    }
    attempt()
    return () => cancelAnimationFrame(frame)
  }, [hash, key])

  return null
}
