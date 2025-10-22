# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for GC Digicont, an accounting firm in Belo Horizonte, Brazil. Built with Next.js 15.3.1 and React 19, it exports as a fully static site deployed to Hostinger.

## Development Commands

```bash
# Start development server with Turbopack (http://localhost:3000)
yarn dev

# Build static export to /out directory
yarn build

# Run ESLint
yarn lint

# Start production server (rarely used, as deployment is static export)
yarn start
```

**Important:** This project uses Yarn 1.22.22 as the package manager, not npm.

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
7. `Contact.tsx` - Contact form powered by EmailJS
8. `Footer.tsx` - Footer navigation and social links
9. `WhatsAppButton.tsx` - Floating WhatsApp CTA button

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

**Tailwind CSS 4.1.5** with custom theme in `src/app/globals.css`:
```css
--background: #0e2b3a (dark blue background)
--primary: #ffffff (white text)
--secondary: #c79d4b (gold accent)
--light: #34495e (slate)
```

Responsive design follows mobile-first approach with standard Tailwind breakpoints.

### SEO & Analytics

- Google Analytics 4 integrated via `@next/third-parties` with ID `G-YKE4ERKDJP`
- Rich metadata in `layout.tsx` includes Open Graph and Twitter Card tags
- `sitemap.xml` and `robots.txt` in `/public`
- Portuguese (pt-BR) language

## Deployment

### GitHub Actions Workflow

Automatic deployment on push to `main` branch:
1. Node.js 22 setup
2. Install dependencies with npm (workflow uses npm despite Yarn in local dev)
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

While the `.env` file exists in the repository (security concern), environment variables for local development should include:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_e04ifg6
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_o845blv
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Key Dependencies

- `@next/third-parties@15.3.1` - Google Analytics integration
- `@emailjs/browser@4.4.1` - Contact form email service
- `react-icons@5.5.0` - FontAwesome icons
- `tailwindcss@4.1.5` - Utility-first CSS framework

## Important Notes

### Testing
No testing framework is configured. If adding tests, consider:
- Jest + React Testing Library for component tests
- Playwright for E2E tests of the contact form and navigation

### Content Updates
Service offerings, pricing plans, and partner logos are hard-coded in components. To update:
- **Services:** Edit the services array in `src/components/Services.tsx`
- **Plans:** Edit the plans array in `src/components/Plans.tsx`
- **Partners:** Replace logo images in `/public` and update `src/components/Partners.tsx`

### Image Requirements
- Hero background: `/public/hero-bg.jpg` (optimized for web)
- About image: `/public/about.webp` (WebP format)
- Logos: `/public/logo.png` (light) and `/public/logo-dark.png` (dark mode)
- Partner logos stored in `/public`

### Known Limitations
1. Image optimization disabled due to static export
2. No 404 page configured
3. No error boundaries implemented
4. Form validation is basic HTML5 only
5. `.env` file committed to repository (should be in `.gitignore`)

### Path Aliases
TypeScript configured with `@/*` alias mapping to `./src/*`:
```typescript
import { smoothScroll } from '@/utils/smoothScroll'
import Header from '@/components/Header'
```
