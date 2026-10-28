import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { MenuIcon, PhoneIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/whatsapp"
import { mainNav } from "@/data/nav"
import { site } from "@/data/site"
import { Logo } from "@/components/brand/Logo"
import { WhatsAppIcon } from "@/components/brand/icons"
import { Container } from "@/components/shared/Section"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-lg transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border bg-white/90 shadow-[0_8px_30px_-18px_rgb(1_41_103/0.35)]"
          : "border-transparent bg-white/60"
      )}
    >
      <Container className={cn("flex items-center justify-between transition-[height] duration-300", scrolled ? "h-16" : "h-16 md:h-20")}>
        <Link to="/" className="rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
          <Logo className="h-7 md:h-8" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-lg px-4 py-2 text-[15px] font-medium transition-colors hover:text-brand-navy",
                  "after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-blue after:transition-transform",
                  isActive ? "text-brand-navy after:scale-x-100" : "text-brand-slate after:scale-x-0"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" size="lg" className="hidden h-10 rounded-xl px-4 sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Get started
            </a>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Open menu">
          <MenuIcon className="size-6 text-brand-navy" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] gap-0">
        <SheetHeader className="border-b p-5">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
          <Logo className="h-7 self-start" />
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {mainNav.map((item) => (
            <SheetClose asChild key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-3.5 font-heading text-lg font-semibold transition-colors",
                    isActive ? "bg-brand-ice text-brand-navy" : "text-brand-slate hover:bg-surface"
                  )
                }
              >
                {item.label}
              </NavLink>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="gap-3 border-t p-5">
          <Button asChild variant="brand" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={site.phoneHref}>
              <PhoneIcon />
              {site.phone}
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
