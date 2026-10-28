import { useLocation } from "react-router"

import { site } from "@/data/site"

/** Per-page metadata. React 19 hoists these tags into <head>. */
export function Seo({ title, description = site.description }: { title?: string; description?: string }) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  const url = `${site.url}${pathname === "/" ? "" : pathname}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  )
}
