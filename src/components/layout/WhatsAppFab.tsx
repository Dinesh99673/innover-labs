import { useMatch } from "react-router"

import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/whatsapp"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppFab() {
  // Offer pages have a sticky order bar on mobile, so lift the button above it.
  const onOfferPage = useMatch("/pricing/:slug")

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className={cn(
            "fixed right-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.6)] transition-transform hover:scale-105 sm:right-6 md:bottom-6",
            onOfferPage ? "bottom-24" : "bottom-5"
          )}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25 motion-reduce:hidden" aria-hidden="true" />
          <WhatsAppIcon className="relative size-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Chat with us</TooltipContent>
    </Tooltip>
  )
}
