import { Link } from "react-router"
import { ArrowRightIcon, HomeIcon } from "lucide-react"

import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { Container } from "@/components/shared/Section"
import { Eyebrow } from "@/components/shared/SectionHeading"
import { Seo } from "@/components/shared/Seo"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <Seo title="Page not found" />
      <meta name="robots" content="noindex" />
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" aria-hidden="true" />
      <Container className="relative grid min-h-[70vh] items-center gap-12 py-20 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="text-4xl font-extrabold text-balance sm:text-5xl">This page didn't meet reality.</h1>
          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has moved. Let's get you back on track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link to="/">
                <HomeIcon /> Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="text-brand-navy">
              <Link to="/pricing">
                See our plans <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
        <GeoBlocks scattered className="mx-auto max-w-sm" />
      </Container>
    </section>
  )
}
