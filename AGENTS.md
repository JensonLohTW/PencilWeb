# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PencilWeb is the corporate website for Pencil Spatial Dynamics (空間動態科技), a company specializing in XR, AI, IoT, and spatial computing. Built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4.

## Commands

All development operations should go through the shell scripts in `scripts/`:

| Task | Command |
|------|---------|
| Install | `./scripts/install.sh` |
| Dev server | `./scripts/start.sh` (or `npm run dev`) |
| Lint + type check | `./scripts/check.sh` (runs ESLint + `tsc --noEmit`) |
| Build | `./scripts/build.sh` (or `npm run build`) |
| Type check only | `npx tsc --noEmit` |

## Architecture

### Routing

Next.js App Router with `next-intl` for i18n. All pages live under `src/app/[locale]/`. Supported locales: `zh-TW` (default), `en`, `ja`. Translation files are in `src/shared/i18n/locales/{locale}.json`.

The locale layout (`src/app/[locale]/layout.tsx`) wraps all pages with: `NextIntlClientProvider` → `AppProviders` (Theme + Motion) → `NavBar` + `Main` + `Footer`.

### Feature Module Pattern

Code is organized by feature domain under `src/features/`:

```
features/
├── marketing/          # All marketing pages
│   ├── pages/          # Page components (home-page.tsx, solutions-page.tsx, etc.)
│   ├── home/components/    # Home-specific sections (hero, feature-grid, stats, etc.)
│   ├── solutions/components/
│   ├── projects/components/
│   ├── technology/components/
│   ├── about/components/
│   └── sections/footer/    # Shared footer
├── contact/            # Contact form & inquiry service
├── legal/              # Privacy policy, terms
└── system/             # 404, error pages
```

Each page route file (`app/[locale]/*/page.tsx`) imports a page component from `features/marketing/pages/` which composes section components.

### Content Pattern

Marketing pages use a content builder pattern: `buildXxxTemplateContent(t)` takes the translation function and returns typed content objects with fallback defaults. This separates content from presentation and supports i18n.

### Shared Infrastructure

- `shared/ui/animations/` — Framer Motion components: `KineticHeading`, `ParticleField`, `ParallaxLayer`, `TiltArticle`, `RouteTransition`
- `shared/ui/primitives/` — Reusable UI: `TextReveal`, `TypewriterText`, `MagneticButton`, etc.
- `components/animations/` — `FadeIn`, `StaggerContainer`/`StaggerItem`, `AnimatedValue`
- `widgets/layout/` — Top-level `NavBar` and `Footer` wrappers
- `shared/providers/` — React Context providers: `ThemeProvider`, `MotionProvider`, `LanguageProvider`
- `shared/config/` — Animation configs, storage keys, navigation config

### Styling Conventions

- Tailwind CSS 4 with custom theme in `src/app/globals.css`
- Custom color scales: `pencil-*` (warm neutrals), `neon-*`/`accent-*` (brand orange #ea580c), `cta` (orange)
- Dark mode via `.dark` class on `<html>`, toggled by `ThemeProvider`
- Use Tailwind semantic tokens (`pencil-*`, `accent-*`) not hex literals
- Standard section layout: `<section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8">`
- Card pattern: `rounded-2xl border border-pencil-200/70 bg-white/70 p-8 dark:border-white/10 dark:bg-white/5`

### Animation System

Framer Motion is the primary animation library. Standard animation components:
- `FadeIn` — viewport-triggered fade with configurable delay/variant
- `StaggerContainer` + `StaggerItem` — sequential reveal for lists/grids
- `ParticleField` — decorative canvas particle background
- `ParallaxLayer` — scroll-linked parallax (used for gradient blobs)

Motion preferences (system/on/off) are respected via `MotionProvider` and `useReducedMotion()`.

## Engineering Constraints

- **200-line limit** per TypeScript file
- **8-file limit** per directory level; split into subdirectories when exceeded
- Path alias: `@/*` → `./src/*`
- Static export for GitHub Pages in production (`output: 'export'`, `basePath: '/PencilWeb'`)
- Images are unoptimized (GitHub Pages doesn't support Next.js Image Optimization)
- Prettier: no semicolons, single quotes, 120 char width, with tailwindcss and organize-imports plugins
