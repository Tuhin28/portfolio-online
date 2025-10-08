# Karma Portfolio – Detailed Documentation

## Overview
A React + TypeScript portfolio built with Vite and Tailwind + shadcn/ui. Pages: Landing, About, Journey, Skills, Projects, Contact, Hobbies.

## Goals
- Fast static hosting (Netlify)
- Smooth animations and modern UI
- Maintainable code and lazy-loaded routes

## Architecture
- Client-only SPA with React Router v6.
- Vite bundler with SWC React plugin.
- Tailwind CSS with shadcn/ui components for consistent styling.
- Framer Motion for animations.
- Public assets under `public/` (e.g., `/lovable-uploads/*`).

## Key Directories
- `src/pages/`: All route pages
- `src/components/`: UI components, `AppSidebar`, and shadcn-based controls
- `src/components/ui/`: Design system primitives (cards, dialogs, sidebar, animations)
- `public/`: static assets, Netlify config files

## Routing
- Defined in `src/App.tsx` with `BrowserRouter`.
- Landing `/` and About `/about` are eager-loaded; other pages are lazy-loaded via `React.lazy` and `Suspense`.
- SPA fallback: Netlify redirect `/* -> /index.html`.

## Sidebar Behavior
- `src/components/ui/sidebar.tsx`: `SidebarBody` uses `sticky top-0 h-screen` so the sidebar stays fixed while content scrolls.
- Hover expands from 60px to 300px via Framer Motion width animation.

## Visual/UX Enhancements
- Cards now have rounded corners and subtle borders for a premium look.
- Images use `loading="lazy"` and `decoding="async"`.
- Scroll-in animations use `whileInView` with easing and small delays.
- About page: refined profile card and about card only (per requirements).

## Performance
- Route-level code-splitting: Journey, Skills, Projects, Contact, Hobbies are lazy-loaded.
- Asset caching headers in `public/_headers`:
  - HTML (no-cache), assets (immutable, 1 year).

## Environment & Build
- `vite.config.ts` sets `base: "./"` for static hosting.
- Dev: `npm run dev` on port 8080.
- Build: `npm run build` outputs to `dist/`.

## Netlify
- Publish directory: `dist`.
- Build command: `npm run build`.
- SPA redirect in `public/netlify.toml`.
- Headers in `public/_headers`.

## Page Notes
- Landing: kept as-is (except path fixes earlier).
- About: only profile image card and about section refined; Spline left intact.
- Journey: timeline cards enhanced; images get lazy hints.
- Skills: icon cloud and cards retained; minor polish from global styling changes.
- Projects: card hover, details dialog, consistent tokens.
- Contact: contact cards, social blocks, and form styling consistent.

## Testing Ideas
- Smoke E2E: navigate across routes, open/close dialog in Projects, submit form (prevent default).
- Lighthouse: ensure good Performance/Accessibility/SEO scores.

## Future Extensions
- Netlify Functions for contact form email with validation (zod) and spam protection.
- CMS/JSON-driven project data.
- PWA via `vite-plugin-pwa`.

## Interview Talking Points
- Route-based code splitting and lazy loading.
- Sticky expanding sidebar with Framer Motion.
- Component library integration (shadcn/ui) and Tailwind design tokens.
- Performance: caching headers, image loading hints, and avoiding large base paths.
- Accessibility: semantic tags, alt text, focus states.

## Setup Commands
```bash
npm ci
npm run dev
npm run build
```

## Deployment Steps
- Connect Netlify to the repo or upload `dist/` manually.
- Ensure publish dir `dist` and SPA redirect is active.
