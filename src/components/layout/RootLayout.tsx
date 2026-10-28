import { Outlet, ScrollRestoration } from "react-router"
import { MotionConfig } from "motion/react"

import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { HashScroll } from "@/components/layout/HashScroll"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { WhatsAppFab } from "@/components/layout/WhatsAppFab"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={200}>
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-brand-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <SiteHeader />
        <main id="main">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <Toaster theme="light" position="top-center" />
        <ScrollRestoration />
        <HashScroll />
      </TooltipProvider>
    </MotionConfig>
  )
}
