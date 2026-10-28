# Innover Labs website

Marketing site for Innover Labs, *where idea meets reality*. It sells fixed-price, fast-delivery web packages. The flagship is **Launch in 12**: domain, email and a 2–3 page website for ₹4,999, delivered in 12 hours.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (Radix), React Router and Motion. See [PLAN.md](PLAN.md) for the full design and build plan.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the build locally
```

## Editing content

You can change most content without touching any JSX:

| What | File |
|---|---|
| Phone, WhatsApp, email, address, hours, socials, site URL | `src/data/site.ts` |
| Plans, prices, delivery times, features, comparison table | `src/data/offers.ts` |
| Add-ons | `src/data/addons.ts` |
| FAQs | `src/data/faqs.ts` |
| Legal pages | `src/pages/Legal.tsx` |

> ⚠️ Social links and the site URL (`innoverlabs.example`) in `site.ts` are still **placeholders**. Replace them before launch.

## Contact form

The form sends email through [Web3Forms](https://web3forms.com) (free, no backend needed).

1. Get an access key for the inbox that should receive enquiries.
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY=...`.
3. On Vercel or Netlify, add the same variable in the project settings.

Without a key the form runs in **demo mode**: it validates, shows the success screen and sends nothing.

## Brand assets

- `src/index.css`: colour tokens sampled from the logo (navy `#012967`, blue `#0078B6`, sky `#90C9E6`) plus the shared utilities (`bg-brand-gradient`, `bg-grid`, `shadow-brand`).
- `src/components/brand/`: `Logo` (vector icon + wordmark), `Logomark`, `GeoBlocks` (the decorative block pattern), `ColorBar`, `DeliveryBadge`.
- `public/brand/`: transparent wordmarks (navy and white, with and without the tagline) and favicons, all generated from `horizontal-logo.webp`. If you get an official SVG logo, swap it in here.

## Deploy

Works as a static SPA on Vercel (`vercel.json`) or Netlify (`public/_redirects`). Both rewrite every route to `index.html`. Once the domain is confirmed, update `site.url` in `src/data/site.ts` and add a `sitemap.xml`.
