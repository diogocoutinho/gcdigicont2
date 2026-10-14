# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for GC Digicont, an accounting firm in Belo Horizonte, Brazil. Built with Next.js 16 and React 19, it exports as a fully static site deployed to Hostinger.

## Development Commands

```bash
# Start development server with Turbopack (http://localhost:3000)
npm run dev

# Build static export to /out directory
npm run build

# Run ESLint (flat config, eslint .)
npm run lint

# Notify IndexNow (Bing etc.) after a deploy (also runs in the deploy workflow)
npm run indexnow
```

**Important:** This project uses npm (`package-lock.json`). Dependency versions are pinned; the deploy runs `npm ci`.

## Architecture

### Static Export Configuration

The site is configured for static export in `next.config.ts`:
- `output: "export"` generates static HTML files in the `/out` directory
- Images use `unoptimized: true` since static hosting doesn't support Next.js Image Optimization API
- `trailingSlash: true` ensures all URLs end with `/` for static hosting compatibility

### Component Structure

All components are client components (`"use client"`) for interactivity, located in `src/components/`:

**Page Sections (in order):**
1. `Header.tsx` - Navigation with mobile hamburger menu
2. `Hero.tsx` - Hero section with background image and CTAs
3. `About.tsx` - Company mission/vision with metrics
4. `Services.tsx` - 5 service cards (Contabilidade, Consultoria, Folha, Fiscal, Legalização)
5. `Plans.tsx` - Pricing table with 4 tiers (MEI, Simples, Lucro Presumido, Construção Civil)
6. `Partners.tsx` - Partner logos section
7. `FAQ.tsx` - Perguntas frequentes (`faq` em `src/data/site.ts`; também gera o JSON-LD FAQPage da home)
8. `Contact.tsx` - Contact form powered by EmailJS
9. `Footer.tsx` - Footer navigation and social links
10. `WhatsAppButton.tsx` - Floating WhatsApp CTA button

**Service pages:** `src/app/servicos/[slug]/page.tsx` gera uma página estática por item de `services` (slug, textos, "para quem é", avulsos relacionados), com BreadcrumbList e Service em JSON-LD; CTAs em `ServiceCTA.tsx` (`whatsapp_click`) e o formulário `Contact.tsx` (`generate_lead`). Os cartões da home linkam para elas.

**Contraste:** sobre o dourado (`bg-secondary`) o texto/ícone é sempre azul-escuro (`text-background`), nunca branco.

**Utilities:**
- `src/utils/smoothScroll.ts` - Custom smooth scroll with 80px header offset

### Navigation Pattern

The site uses hash-based navigation for single-page scrolling:
- Links to sections use anchors: `#sobre`, `#servicos`, `#planos`, `#parceiros`, `#contato`
- The smooth scroll utility handles navigation from both the home page and other pages (Privacy/Terms)
- When navigating from a different path, it redirects to home first, then scrolls to the anchor

### Contact Form Integration

The contact form uses EmailJS (client-side email service):
- Service ID: `service_e04ifg6`
- Template ID: `template_o845blv`
- Public key stored in environment variable: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Form state managed with React useState hooks
- Loading state and success/error feedback implemented

### Styling

**Tailwind CSS 4** with custom theme in `src/app/globals.css`:
```css
--background: #0e2b3a (dark blue background)
--primary: #ffffff (white text)
--secondary: #c79d4b (gold accent)
--light: #34495e (slate)
```

Responsive design follows mobile-first approach with standard Tailwind breakpoints.

### SEO & Analytics

- Site data (contacts, services, plans, cities, pages) lives in `src/data/site.ts` and feeds the components, metadata (`src/lib/seo.ts`), JSON-LD (`src/lib/structuredData.ts`), `sitemap.ts`, `robots.ts` and `/llms.txt` + `/llms-full.txt` (`src/lib/llms.ts`). Update content there.
- Google Analytics 4: gtag.js is loaded with the Google tag ID `G-SY4G9E0XZY` (the GCDIGICONT stream `G-YKE4ERKDJP` is a destination of that tag; loading by `G-YKE4ERKDJP` returns 404). It loads only after cookie consent (`src/lib/analytics.ts`, `src/components/CookieConsent.tsx`). Events: `whatsapp_click`, `generate_lead`.
- `public/.htaccess` (cache, compression, security headers, www redirect) and the IndexNow key file in `public/` are exported with the site.
- Portuguese (pt-BR) language

## Deployment

### GitHub Actions Workflow

Automatic deployment on push to `main` branch:
1. Node.js 22 setup
2. Install dependencies with `npm ci`
3. Build with environment variables from GitHub Secrets
4. Deploy `/out` directory to Hostinger via SCP

**Required GitHub Secrets:**
```
NEXT_PUBLIC_BASE_URL
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
HOSTINGER_HOST
HOSTINGER_USERNAME
HOSTINGER_SSH_KEY
HOSTINGER_SSH_PORT
HOSTINGER_DEPLOY_PATH
```

### Local Environment Variables

Environment variables for local development (`.env.local`, git-ignored):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_e04ifg6
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_o845blv
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Key Dependencies

- `@emailjs/browser` - Contact form email service
- `framer-motion` - Animations
- `react-icons` - FontAwesome icons
- `tailwindcss` 4 - Utility-first CSS framework

## Important Notes

### Testing
No testing framework is configured. If adding tests, consider:
- Jest + React Testing Library for component tests
- Playwright for E2E tests of the contact form and navigation

### Content Updates
Service offerings, plans, cities and contacts are in `src/data/site.ts`. To update:
- **Services / Plans / Cities / Contacts:** Edit `src/data/site.ts` (also updates JSON-LD and llms.txt)
- **Partners:** Replace logo images in `/public` and update `src/components/Partners.tsx`

### Image Requirements
- Hero background: `/public/hero-bg.webp` (optimized for web)
- About image: `/public/about.webp` (WebP format)
- Logos: `/public/logo.png` (light) and `/public/logo-dark.png` (dark mode)
- Partner logos stored in `/public`

### Known Limitations
1. Image optimization disabled due to static export
2. No 404 page configured
3. No error boundaries implemented
4. Form validation is basic HTML5 only
5. `.env*` files are git-ignored; never commit them

### Path Aliases
TypeScript configured with `@/*` alias mapping to `./src/*`:
```typescript
import { smoothScroll } from '@/utils/smoothScroll'
import Header from '@/components/Header'
```
