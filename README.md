# HouseRx Website

Production-grade Next.js 14 website for HouseRx — independent home health audits in South Delhi.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS 3.4
- Fraunces + Inter (Google Fonts, auto-loaded)
- Lucide icons
- Vercel hosting (recommended)

## Before you deploy

1. Edit `lib/site.ts` and replace placeholder values:
   - `phone` — your actual phone number
   - `phoneLink` — phone without spaces (for tel: links)
   - `whatsapp` — country code + number, no + sign (for wa.me links)
   - `email` — your business email
   - `url` — your final domain (e.g., https://houserx.in)

2. Add an Open Graph image at `public/og-image.png` (1200x630px)
   See `public/og-image.txt` for guidance.

3. Replace the founder placeholder on `/about` page with a real portrait.

4. (Optional) Add a Google Search Console verification by replacing `metadata` in `app/layout.tsx`.

## Deployment

See DEPLOYMENT.md for the non-technical step-by-step guide.

## Structure

```
app/                          Next.js App Router pages
  page.tsx                    Homepage (/)
  services/                   Services overview + 3 SKU pages
  how-it-works/               Methodology page
  sample-report/              Sample report walkthrough
  why-us/                     Differentiation page
  about/                      Founder story
  faq/                        FAQ with accordion
  contact/                    Contact methods
  privacy/                    Privacy policy
  terms/                      Terms of service
  not-found.tsx               404 page
  sitemap.ts                  Auto-generated sitemap

components/                   Shared React components
  Navbar.tsx
  Footer.tsx
  MobileCTA.tsx               Sticky mobile bottom bar
  SectionHeader.tsx
  ServiceCard.tsx
  CTASection.tsx
  TrustSignals.tsx
  StatBlock.tsx

lib/
  site.ts                     Single source of truth for site config

public/
  favicon.svg
  robots.txt
```

## How to edit content

Most copy lives directly inside the page files in `app/`. Edit the relevant
file, save, and your changes appear instantly in development. On Vercel,
each Git push auto-deploys.

For site-wide values (phone, WhatsApp, email, service areas), edit
`lib/site.ts` — changes propagate everywhere automatically.
