import type { SVGProps } from "react"

/*
 * Small custom icons for brands lucide no longer ships.
 * Stroke style matches lucide (24px grid, 2px stroke, round joins).
 */
type IconProps = SVGProps<SVGSVGElement>

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 3.2 3z" />
      <path
        d="M9.2 8.4c.3-.6.6-.7.9-.7h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c-.1.2-.2.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.7.9-.5.3-1.6.6-3-.1a9 9 0 0 1-3.8-3.8c-.7-1.4-.4-2.5-.1-3z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 8.5h-1.5A1.5 1.5 0 0 0 12 10v11M9.5 13h5" />
    </svg>
  )
}
