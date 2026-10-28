import { Link } from "react-router"
import { ArrowRightIcon } from "lucide-react"

import { whatsappLink } from "@/lib/whatsapp"
import { GeoBlocks } from "@/components/brand/GeoBlocks"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Container } from "@/components/shared/Section"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"

export function CtaBand({
  title = "Ready to get your business online today?",
  text = "Message us now and your website, domain and email could be live by tomorrow morning.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
          <GeoBlocks className="pointer-events-none absolute -top-16 -left-16 w-48 opacity-40 md:w-64" />
          <GeoBlocks className="pointer-events-none absolute -right-16 -bottom-20 w-48 rotate-180 opacity-40 md:w-64" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-extrabold text-balance text-white sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="text-lg text-white/80">{text}</p>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild variant="white" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Start on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline-white" size="xl">
                <Link to="/contact">
                  Or fill the form <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
