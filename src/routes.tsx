import { createBrowserRouter } from "react-router"

import { RootLayout } from "@/components/layout/RootLayout"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", lazy: () => import("@/pages/Pricing").then((m) => ({ Component: m.default })) },
      { path: "pricing/:slug", lazy: () => import("@/pages/OfferDetail").then((m) => ({ Component: m.default })) },
      { path: "about", lazy: () => import("@/pages/About").then((m) => ({ Component: m.default })) },
      { path: "contact", lazy: () => import("@/pages/Contact").then((m) => ({ Component: m.default })) },
      { path: "privacy", lazy: () => import("@/pages/Legal").then((m) => ({ Component: m.Privacy })) },
      { path: "terms", lazy: () => import("@/pages/Legal").then((m) => ({ Component: m.Terms })) },
      { path: "refund-policy", lazy: () => import("@/pages/Legal").then((m) => ({ Component: m.Refund })) },
      { path: "*", Component: NotFound },
    ],
  },
])
