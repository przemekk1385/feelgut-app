# feelgut

## Overview

Professional website for Dariusz Gut, a massage therapist in Kraków. Showcases massage services, enables booking via contact form, promotes corporate wellness programs and training courses.

## Tech Stack

- **Nuxt 3** (v4.2.2) + **Vue 3** + **TypeScript** 5.8.3
- **Tailwind CSS** v4 + **@tailwindcss/typography**
- **@nuxt/content** v3.5.1 — file-based CMS (YAML service definitions)
- **@formkit/nuxt** v1.6.9 — form handling (Polish locale)
- **Zod** v4.3.5 — server-side validation
- **@nuxtjs/turnstile** — Cloudflare CAPTCHA
- **@aws-sdk/client-ses** — email sending via AWS SES
- **@vercel/functions** — OIDC credentials for AWS
- **Biome** v2.3.10 — lint/format
- **Node.js** 22.x, **Yarn** 1.22.22

## Project Structure

```
app/
├── assets/css/tailwind.css   # Tailwind theme (Como, Mimosa, Sahara, Supernova, Platinium, Dark)
├── components/               # The* = app singletony (TheNav, TheFooter), V* = pozostałe
│   ├── The*.vue             # TheNav, TheFooter
│   └── V*.vue               # VAbout, VAccordion, VContact, VHeader, VOffer, VPricing, VTrainings…
├── composables/
│   ├── useOffer.ts          # Fetch/filter massage offers
│   ├── useTitle.ts          # Page title management
│   └── useSmoothScroll.ts   # Anchor smooth scrolling
├── pages/
│   ├── index.vue            # Homepage
│   ├── cennik.vue           # Pricing
│   ├── masaz-dla-firm.vue   # Corporate massage
│   └── szkolenia.vue        # Training courses
└── plugins/gtm.client.ts    # Google Tag Manager
content/offer/               # 16 YAML service definitions (id, title, category, rates, description…)
server/api/mail.post.ts      # Contact form → AWS SES
public/images/               # Static images
```

## Commands

```bash
yarn install
yarn dev          # dev server at localhost:3000
yarn build        # production build
yarn generate     # static site generation
yarn biome:format && yarn biome:lint
```

## Environment Variables

```env
NUXT_AWS_DEFAULT_REGION=eu-central-1
NUXT_AWS_ROLE_ARN=arn:aws:iam::...
NUXT_MAIL_SOURCE=noreply@...
NUXT_MAIL_SUBJECT=...
NUXT_MAIL_TO=...
NUXT_TURNSTILE_SECRET_KEY=...
NUXT_PUBLIC_TURNSTILE_SITE_KEY=...
NUXT_PUBLIC_GTM_ID=...
```

## Architecture Notes

- **Content management**: services in `content/offer/*.yml` — add/edit YAML, no code changes needed
- **Email**: server-side `/api/mail.post.ts` → Zod validation → AWS SES via Vercel OIDC
- **CAPTCHA**: Turnstile active in production only (`vercelEnv` check)
- **Custom theme**: CSS variables in `tailwind.css` — Como (`#547a71`), Sahara (`#c9961a`), Dark (`#161f36`)
- **Disabled components**: VReviews, VMyMassageRoom, VMap — uncomment to enable
- Deployed on **Vercel**; all UI text in **Polish**
