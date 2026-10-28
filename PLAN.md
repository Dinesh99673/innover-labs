# Innover Labs Website: Build Plan

> **Where idea meets reality.** A multi-page marketing site that sells fixed-price, fast-delivery web packages. The flagship offer is **Domain + Email + 2–3 page Website for ₹4,999, delivered in 12 hours.**

**Stack:** React 19 + TypeScript, Vite, Tailwind CSS v4, shadcn/ui, React Router, Motion (animations), React Hook Form + Zod, Web3Forms (form delivery), lucide-react (icons).

---

## 1. Goals & success criteria

| Goal | How we measure it |
|---|---|
| Visitors see the offer and its price within 3 seconds | Flagship offer, price and "12 HRS" are above the fold on mobile and desktop |
| Turn visitors into leads | Every page has a WhatsApp CTA and a link to the order form. The floating WhatsApp button is always visible |
| Look trustworthy and premium | One consistent theme taken from the logo. No mismatched colours or fonts |
| Fast and accessible | Lighthouse ≥ 90 on Performance, Accessibility, Best Practices and SEO. WCAG AA contrast |
| Easy to update | All offers, prices, FAQs and contact details live in `src/data/*`, so nobody edits JSX to change copy |

---

## 2. Brand & design system

### 2.1 Colours (sampled from the logo)

| Token | Hex (approx.) | Where it comes from | Use |
|---|---|---|---|
| `brand-navy` | `#0B2B6B` | "Innover Labs" wordmark | Primary buttons, headings, footer background |
| `brand-blue` | `#0B7DBF` | Mid-blue logo blocks | Links, highlights, icons, focus ring, gradient stop |
| `brand-sky` | `#94C9E6` | Light-blue logo blocks | Decorative shapes, badges, gradient stop |
| `brand-ice` | `#EAF4FB` | Tint of sky | Section backgrounds, card hover, shadcn `accent`/`secondary` |
| `brand-slate` | `#6E7BA0` | Tagline text | Muted text, eyebrows, captions |
| `ink` | `#0A1838` | Darker navy | Body text |
| `surface` | `#F7F8FA` | Logo background | Alternate section background |

**Rule:** navy is the main colour, blue is the accent, and sky is decoration only. Use **one** gradient everywhere: `navy → blue` (135°). Don't add new colours.

> Sample the exact hex values from the original logo source (SVG/AI) if you have it.

### 2.2 Typography
- **Headings:** *Plus Jakarta Sans* (600/700/800). Geometric, close to the wordmark.
- **Body:** *Inter* (400/500/600).
- **Eyebrow labels:** uppercase, `tracking-[0.25em]`, `text-brand-slate`, `text-xs/sm`. This copies the logo tagline and appears above every section heading. It is the main thing that makes the site feel consistent.
- Scale: `h1` 44/56/64px (mobile/tablet/desktop), `h2` 32/40px, `h3` 20/24px, body 16/18px.

### 2.3 Signature visual motif: "Geo Blocks"
The logomark is built from rectangles and triangles in three blues. Reuse that shape language everywhere:
- `<GeoBlocks />`: an SVG cluster of navy, blue and sky blocks/triangles. Use it in the hero (animated in), the CTA band corners and the 404 page.
- Section dividers: a thin bar made of 3 segments (navy | blue | sky).
- Offer cards: a small triangle notch in the top-left corner in `brand-sky`.
- Background: a very faint grid pattern (`brand-navy` at 4% opacity) on hero and CTA sections.

### 2.4 Shape, depth & motion
- Radius: `--radius: 0.75rem` (cards `rounded-2xl`, buttons `rounded-lg`).
- Shadows: soft and navy-tinted (`shadow-[0_10px_30px_-12px_rgba(11,43,107,0.25)]`).
- Motion: fade-up on scroll (16px, 0.5s, stagger 0.08s). Hero blocks slide in. Card hover lifts the card 4px and adds a blue border. All animation respects `prefers-reduced-motion`.
- Light theme only for v1. Tokens are set up so dark mode can be added later.

### 2.5 Logo assets needed
The current `horizontal-logo.webp` has a **light-grey background baked in**, so it shows as a box on white and navy sections. We need:
1. **Horizontal logo, transparent** (SVG preferred) for the header.
2. **White/reversed version** for the navy footer.
3. **Icon-only mark ("IL" blocks)** for the favicon, the mobile header and the OG image.

**Fallback:** rebuild the logomark as an inline SVG React component (`<Logomark />`; it's simple geometry) and set the wordmark in Plus Jakarta Sans. That gives sharp, recolourable versions at any size. Keep the `.webp` for the OG image until proper files arrive.

---

## 3. Offers (suggested; edit prices in `src/data/offers.ts`)

| # | Plan | Price | Delivery | What's included |
|---|---|---|---|---|
| 1 | **Email Essentials** | ₹1,999 | 6 hrs | Domain registration (1 yr, .com/.in) or connecting a domain you already own · DNS setup · 2 professional mailboxes (you@yourbrand.com) · Mail set up on phone and laptop · SPF/DKIM/DMARC so mail doesn't land in spam |
| 2 | **Launch in 12** ⭐ *Flagship* | **₹4,999** | **12 hrs** | Everything in Email Essentials · 2–3 page responsive website (Home, About/Services, Contact) · WhatsApp chat button · Contact form · Google Maps embed · SSL (https) · Hosting for 1 yr · Basic on-page SEO |
| 3 | **Business Pro** | ₹9,999 | 48 hrs | Everything in Launch in 12 · Up to 7 pages · 5 mailboxes · Google Business Profile setup · Gallery/portfolio page · Blog-ready · Google Analytics + Search Console · 1 round of revisions |
| 4 | **Store Starter** | ₹19,999 | 5 days | Online store (up to 50 products) · Razorpay/UPI payments · Order emails · Inventory basics · Business Pro features · 30-day support |
| 5 | **Custom Build** | Let's talk | Scoped | Web apps, dashboards, portals, integrations. Quoted after a call |

**Add-ons** (shown below the pricing grid): Extra page ₹499 · Logo design ₹1,499 · Extra mailbox ₹299/yr · Content writing ₹799/page · Monthly care plan (updates + backups) ₹999/mo · Rush delivery on Business Pro ₹1,999.

**Business points to confirm before launch** (these go in the FAQ and terms):
- Which email provider is included (Zoho Mail / Hostinger / Google Workspace)? That decides the mailbox limits and renewal cost.
- Renewal price from year 2 (domain + hosting + email).
- Are prices GST-inclusive?
- When does the 12-hour clock start? Recommended: *after payment and all content (logo, text, photos) are received.*
- Refund / revision policy.

---

## 4. Sitemap & routes

```
/                     Home
/pricing              All plans, comparison table, add-ons, pricing FAQ
/pricing/:slug        Offer detail page (e.g. /pricing/launch-in-12), good for ads
/about                Story, mission, values, why us
/contact              Order/contact form + WhatsApp + details   (?plan=launch-in-12 preselects the plan)
/privacy  /terms  /refund-policy
*                     404
```

Header nav: **Home · Pricing · About · Contact**, plus a primary button **"Get started"** that opens WhatsApp. On mobile the nav moves into a shadcn `Sheet` drawer.

---

## 5. Page-by-page content (draft copy included)

### 5.1 Home `/`
1. **Hero** (navy→blue gradient panel or white with GeoBlocks on the right)
   - Eyebrow: `WHERE IDEA MEETS REALITY`
   - H1: **Your business, online in 12 hours.**
   - Sub: *Domain, professional email and a 2–3 page website, set up and live by tomorrow morning. One flat price: ₹4,999.*
   - CTAs: **[Start on WhatsApp]** (primary) · **[See all plans]** (outline)
   - "12 HRS" badge: a circular clock-style badge on the GeoBlocks art.
   - Micro-trust under CTAs: ✓ No hidden charges · ✓ You own your domain · ✓ Support on WhatsApp
2. **Trust strip**: 4 stat tiles: `12 hrs` delivery · `₹4,999` all-in · `100%` mobile-ready · `24×7` WhatsApp support. (Replace with real numbers like "50+ businesses launched" once you have them.)
3. **Flagship offer spotlight**: a large card listing everything included in Launch in 12, with price and CTA. Next to it: "What you get" icons for Domain, Email, Website, SSL, WhatsApp button, Maps.
4. **Plans preview**: 3 cards (Email Essentials, Launch in 12 marked "Most popular", Business Pro) + link "Compare all plans →".
5. **How it works** (horizontal timeline on desktop, vertical on mobile)
   1. **Pick a plan** (0h): choose a package and message us on WhatsApp.
   2. **Share your details** (~1h): business name, logo, a few lines about you, photos. We send a simple checklist.
   3. **We build & set up** (1–11h): domain, DNS, email, website design and content.
   4. **You go live** (12h): we hand over logins and give you a quick walkthrough call.
6. **Who it's for**: chips/cards: Shops & retailers · Clinics & doctors · Coaches & tutors · Restaurants & cafés · Freelancers · Startups.
7. **Why Innover Labs**: 4 features: *Fixed price, no surprises* · *Speed without shortcuts* · *You own everything* · *Real humans on WhatsApp*.
8. **FAQ preview**: 4 top questions (shadcn `Accordion`) + "More questions →" linking to /pricing#faq.
9. **CTA band**: navy background with GeoBlocks corners. "Ready to get online today?" + WhatsApp button + "Or fill the form" link.

### 5.2 Pricing `/pricing`
- Page hero: eyebrow `PLANS & PRICING`, H1 **Simple, fixed pricing. Fast delivery.**
- Pricing grid: 4 cards + the Custom Build card (full-width strip). The flagship card is raised, with a navy border, a "Most popular" badge and the "12 HRS" chip.
- Each card: name, price, delivery time, 5–7 bullet points, **[Choose plan]** (WhatsApp with prefilled message) and **[Details]** (`/pricing/:slug`).
- **Comparison table** (shadcn `Table`): rows = features, columns = plans, ✓/– marks. Scrolls horizontally on mobile.
- **Add-ons** grid.
- **Full FAQ** (`#faq`).
- CTA band.

### 5.3 Offer detail `/pricing/:slug`
Generated from `offers.ts`: hero with price and delivery time · "What's included" checklist · "What we need from you" · mini timeline · FAQ filtered for this plan · sticky bottom bar on mobile with price + **Order on WhatsApp**. Unknown slug → 404.

### 5.4 About `/about`
- H1: **We turn ideas into online businesses, fast.**
- Story: Innover Labs helps small businesses and founders get a professional online presence without agency prices or weeks of waiting.
- Mission: *Where idea meets reality.* Explain the tagline in one paragraph.
- Values (4 cards): Speed · Transparency · Ownership · Craft.
- "How we keep 12 hours realistic": templates built in-house, a standard checklist, a dedicated launch team.
- (Optional later) Team photos, then the CTA band.

### 5.5 Contact `/contact`
Two columns (stacked on mobile):
- **Left: order/contact form** (shadcn Form + RHF + Zod)
  - Fields: Name\*, Phone/WhatsApp\* (10-digit Indian number check), Email, Business name, Plan (Select, filled from `?plan=`), Domain in mind (optional), Message.
  - Hidden honeypot field for spam. Submit → Web3Forms → `sonner` toast "Thanks! We'll WhatsApp you within 30 minutes." → also shows **"Continue on WhatsApp"**.
  - States: loading spinner, success, error (with a WhatsApp fallback).
- **Right: contact card**: WhatsApp, phone, email, address, working hours, social icons, and an optional map embed.

### 5.6 Legal pages
Simple prose layout (`@tailwindcss/typography`) for Privacy, Terms and Refund policy. Needed for trust, and required by Razorpay if you add payments later.

### 5.7 404
GeoBlocks illustration that looks "fallen apart" + "This page didn't meet reality." + Home button.

---

## 6. Global UI elements
- **SiteHeader**: sticky, white with `backdrop-blur`. Adds a shadow and shrinks after scrolling 10px. Logo left, nav centre, CTA right.
- **Announcement bar** (optional, dismissible): "⚡ Launch in 12: your website live in 12 hours for ₹4,999".
- **SiteFooter**: navy background, white logo, tagline, 4 columns (Plans, Company, Legal, Contact), copyright line, 3-segment colour bar on top.
- **WhatsAppFab**: floating bottom-right button with a pulse ring and a "Chat with us" tooltip. On mobile it moves up when the offer page's sticky bar is showing.
- **ScrollToTop on route change.**

---

## 7. Technical architecture

### 7.1 Project setup
```bash
npm create vite@latest . -- --template react-ts
npm i react-router motion lucide-react react-hook-form zod @hookform/resolvers sonner
npm i -D tailwindcss @tailwindcss/vite @tailwindcss/typography @types/node
npx shadcn@latest init
npx shadcn@latest add button card badge navigation-menu sheet accordion form input textarea select label table separator tooltip sonner
```
- Configure the `@/*` path alias in `tsconfig.json`, `tsconfig.app.json` and `vite.config.ts` (shadcn needs it).
- Load the fonts from Google Fonts in `index.html` with `preconnect` and `display=swap`.

### 7.2 Folder structure
```
src/
  assets/            logo files, og-image
  components/
    ui/              shadcn (generated, don't edit heavily)
    brand/           Logo, Logomark, GeoBlocks, ColorBar, DeliveryBadge
    layout/          SiteHeader, MobileNav, SiteFooter, AnnouncementBar, WhatsAppFab, ScrollToTop, RootLayout
    sections/        Hero, TrustStrip, OfferSpotlight, PlansPreview, HowItWorks, WhoItsFor, WhyUs, FaqSection, CtaBand
    pricing/         OfferCard, PricingGrid, ComparisonTable, AddOns
    contact/         ContactForm, ContactCard
    shared/          Section, SectionHeading (eyebrow + title + sub), Reveal (motion wrapper), Seo
  data/
    site.ts          name, tagline, phone, whatsapp, email, address, hours, socials
    offers.ts        Offer[] (slug, name, price, deliveryHrs, tagline, features[], needs[], popular, comparison{})
    addons.ts
    faqs.ts          { q, a, tags: ['general'|'launch-in-12'|...] }
    nav.ts
  lib/
    utils.ts         cn() (shadcn)
    whatsapp.ts      buildWhatsAppLink(message) → https://wa.me/<number>?text=<encoded>
    format.ts        formatINR(4999) → "₹4,999"
  pages/             Home, Pricing, OfferDetail, About, Contact, Privacy, Terms, Refund, NotFound
  routes.tsx         createBrowserRouter + lazy() pages
  index.css          Tailwind + theme tokens
  main.tsx
public/              favicon.svg, robots.txt, sitemap.xml, og-image.png
```

### 7.3 Theme tokens (`src/index.css`, Tailwind v4 + shadcn)
```css
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

:root {
  --radius: 0.75rem;
  --background: #ffffff;           --foreground: #0A1838;
  --card: #ffffff;                 --card-foreground: #0A1838;
  --primary: #0B2B6B;              --primary-foreground: #ffffff;
  --secondary: #EAF4FB;            --secondary-foreground: #0B2B6B;
  --accent: #EAF4FB;               --accent-foreground: #0B2B6B;
  --muted: #F7F8FA;                --muted-foreground: #6E7BA0;
  --border: #E3E8F0;               --input: #E3E8F0;
  --ring: #0B7DBF;
  --destructive: #DC2626;
  --brand-navy: #0B2B6B; --brand-blue: #0B7DBF; --brand-sky: #94C9E6;
  --brand-ice: #EAF4FB;  --brand-slate: #6E7BA0; --surface: #F7F8FA;
}

@theme inline {
  --color-background: var(--background);  --color-foreground: var(--foreground);
  --color-primary: var(--primary);        --color-primary-foreground: var(--primary-foreground);
  /* …map the rest of the shadcn tokens the same way… */
  --color-brand-navy: var(--brand-navy);  --color-brand-blue: var(--brand-blue);
  --color-brand-sky: var(--brand-sky);    --color-brand-ice: var(--brand-ice);
  --color-brand-slate: var(--brand-slate);--color-surface: var(--surface);
  --font-heading: "Plus Jakarta Sans", sans-serif;
  --font-sans: "Inter", sans-serif;
  --radius-lg: var(--radius);
}
```
Extra button variants in `button.tsx`: `brand` (navy→blue gradient), `whatsapp` (green `#25D366`, used only for WhatsApp actions).

### 7.4 Key implementation details
- **Data-driven offers:** `PricingGrid`, `ComparisonTable`, `OfferDetail`, the contact form's plan `Select` and the WhatsApp messages all read from `offers.ts`. Changing a price in one place updates the whole site.
- **WhatsApp message template:** `Hi Innover Labs! I'm interested in the *Launch in 12* plan (₹4,999). My business: ____`.
- **Form delivery:** Web3Forms (free, no backend). Put the access key in `VITE_WEB3FORMS_KEY` (`.env`, git-ignored). Alternative: EmailJS.
- **SEO per page:** React 19 renders `<title>`/`<meta>` tags from inside components, wrapped in a `<Seo title description />` helper. Add JSON-LD for `ProfessionalService` plus an `Offer` for each plan. Add `sitemap.xml`, `robots.txt` and Open Graph/Twitter cards.
- **Performance:** route-level `lazy()`, logo as SVG, WebP/AVIF images with explicit sizes, fonts limited to the weights we use, no heavy UI libraries beyond shadcn.
- **Accessibility:** semantic landmarks, a skip-to-content link, visible focus rings (`ring-brand-blue`), labels on every input, AA contrast checked (note that `brand-sky` on white fails as text, so use it for decoration only).
- **Responsive breakpoints:** 360px, 768px, 1024px and 1280px. Content max width `max-w-7xl`, side padding `px-4 sm:px-6 lg:px-8`.

---

## 8. Build phases & checklist

**Phase 0: Setup (≈1h)**
- [ ] Vite React-TS scaffold, Tailwind v4, shadcn init, path alias, fonts
- [ ] ESLint + Prettier (with `prettier-plugin-tailwindcss`), git init

**Phase 1: Design system (≈2–3h)**
- [ ] Theme tokens in `index.css`, button variants
- [ ] `Logo`, `Logomark` (SVG), `GeoBlocks`, `ColorBar`, `DeliveryBadge`
- [ ] `Section`, `SectionHeading`, `Reveal`
- [ ] A temporary `/styleguide` route showing colours, type, buttons and cards (delete before launch)

**Phase 2: Layout shell (≈2h)**
- [ ] Router + `RootLayout`, Header (desktop + mobile Sheet), Footer, WhatsAppFab, ScrollToTop, 404
- [ ] `data/site.ts`, `lib/whatsapp.ts`, `lib/format.ts`

**Phase 3: Home page (≈4h)**
- [ ] Hero → Trust strip → Offer spotlight → Plans preview → How it works → Who it's for → Why us → FAQ → CTA band
- [ ] Scroll animations

**Phase 4: Pricing & offer detail (≈3h)**
- [ ] `offers.ts`, `addons.ts`, `faqs.ts`
- [ ] OfferCard, PricingGrid, ComparisonTable, AddOns, OfferDetail with mobile sticky bar

**Phase 5: About, Contact, Legal (≈3h)**
- [ ] About sections
- [ ] ContactForm (RHF + Zod + Web3Forms + toast + `?plan=` preselect), ContactCard
- [ ] Privacy / Terms / Refund pages

**Phase 6: Polish & QA (≈2–3h)**
- [ ] SEO meta, JSON-LD, sitemap, robots, OG image, favicon set
- [ ] Lighthouse ≥ 90 everywhere; test at 360/768/1280 widths; keyboard-only pass
- [ ] Cross-browser check (Chrome, Safari iOS, Firefox); send a real test form submission

**Phase 7: Deploy (≈1h)**
- [ ] Deploy to Vercel or Netlify (SPA rewrite: `/* → /index.html`)
- [ ] Connect the custom domain + HTTPS, set up an innoverlabs email, add the site to Google Search Console

**Later (v2):** Portfolio/case studies, testimonials, Razorpay payment links on cards, blog, dark mode, pre-rendering for stronger SEO, analytics events on CTA clicks.

---

## 9. Decisions & open items (updated 28 Oct 2026)

**Decided**
- Brand spelling: **Innover Labs**, as in the logo.
- Plans and add-ons: the 5 plans and 6 add-ons in §3, as suggested.
- Business defaults (placeholder wording in FAQ/terms): prices **exclusive of GST**; the 12-hour clock starts **after payment + checklist content**; renewals quoted 30 days ahead, never auto-charged; refunds in full before work starts, and domain/third-party fees non-refundable after purchase.
- Logo: the icon was redrawn as SVG. Transparent wordmarks were cut from the original `.webp` (see `public/brand/`).

**Still open**
1. Social media links (placeholders in `src/data/site.ts`). Contact details are set: +91 78218 36954 (call + WhatsApp), connect@innoverlabs.com, Pune, Maharashtra.
2. Live domain (placeholder `innoverlabs.example`; add `sitemap.xml` once known).
3. Email provider for the business-email plans (the FAQ wording is deliberately generic).
4. Legal review of Privacy, Terms and Refund pages (starter templates).
5. Web3Forms access key for the contact form (runs in demo mode without it).
6. Real stats for the trust strip (e.g. "50+ businesses launched").

**Build status:** Phases 0–6 done. Phase 7 (deploy) is waiting on the domain.
