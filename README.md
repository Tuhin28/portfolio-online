# Karma Portfolio

Production-ready portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It showcases profile, journey, skills, projects, and contact pages with smooth animations and responsive design.

## Tech Stack
- React 18 + TypeScript
- Vite 5 (SWC React plugin)
- Tailwind CSS + shadcn/ui
- Framer Motion animations
- React Router v6
- TanStack Query (future data fetching)

## Local Development
```bash
npm ci
npm run dev
```
Dev server: http://localhost:8080

## Build
```bash
npm run build
```
Output in `dist/`.

## Deploy (Netlify)
- Publish directory: `dist`
- Build command: `npm run build`
- SPA redirect is configured via `public/netlify.toml`
- Caching headers via `public/_headers`

## Project Structure
- `src/pages` — route pages (Landing, About, Journey, Skills, Projects, Contact, Hobbies)
- `src/components` — UI components and sidebar
- `public/` — static assets

## Notes
- Vite `base` is `./` for static hosting compatibility
- Images in `public/lovable-uploads` are referenced as `/lovable-uploads/...`