# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — type-check the project (`tsc -b`) and produce a production build
- `npm run lint` — run ESLint over the repo (config in `eslint.config.js`)
- `npm run preview` — serve the built `dist/` locally

There is no test runner configured.

## Architecture

Single-page React 19 + TypeScript portfolio built with Vite, Tailwind CSS v4 (via `@tailwindcss/vite`), `react-router-dom` v7, and Framer Motion. Deployed on Vercel; `vercel.json` rewrites every non-asset path to `index.html` so client-side routing works on refresh.

### Routing

`src/App.tsx` mounts `BrowserRouter` and renders a fixed shell (Navbar, language selector, footer) around the `<Routes>`. Routes:

- `/` → redirects to `/about`
- `/about`, `/projects`, `/youtubeChannel`, `/resume`, `/certificates`

`PageTracker` (mounted inside the Router) emits a Vercel `page_view` event on every `location.pathname` change.

### Internationalization (load-bearing)

`src/lib/i18n.ts` initializes `i18next` with four locale bundles statically imported from `src/locale/{en,pt,es,fr}.json`. Language is resolved via `i18next-browser-languagedetector` in the order `localStorage → navigator → htmlTag`, with `fallbackLng: "en"`, `supportedLngs` constrained to `SUPPORTED_LANGUAGES`, and `load: "languageOnly"` so locales like `pt-BR` collapse to `pt`. The chosen language persists to `localStorage` (`i18nextLng`) and `App.tsx` syncs `<html lang>` to `i18n.resolvedLanguage` on every change.

**Content lives in the locale JSON, not in components.** Pages and components fetch list-shaped content via `t("key", { returnObjects: true })` and guard with `Array.isArray(...)` before mapping (a missing key would otherwise return the key string and crash `.map()`):

- `Projects` page reads the `projects` array (`src/model/Projects.ts`)
- `PersonalRecommendations` reads `recomendations` (`src/model/Recomendations.ts`)
- `WorkExperience` reads `workExperience` with a local `WorkExperienceItem` interface
- `AcademicExperience` reads `academicExperience` with a local `AcademicExperienceItem` interface
- `Badges` looks up `badges.<id>.title` / `badges.<id>.description` per badge id

When adding/changing a section that renders text, **update all four locale files** (`en.json`, `pt.json`, `es.json`, `fr.json`) in lockstep — a missing key silently renders the key string. The `Resume` page also relies on locale-suffixed PDFs in `public/curriculum/Pedro-Pizzi-<lang>.pdf`; it falls back to `en` if the resolved language isn't in `SUPPORTED_LANGUAGES`.

### Data layout

- Static lists that don't need translation live in `src/data/` (e.g. `badges.ts`, `certificates.ts`) and reference image paths under `public/assets/...`.
- Translatable lists (projects, recommendations, work experience) live in the locale JSONs; the model types in `src/model/` describe their shape.
- Public assets are served from `public/` at the root: `/assets/...`, `/curriculum/...`, `/recommendation-letters/...`.

### Components

- `AnimatedContainer` wraps children in a Framer Motion stagger-in animation triggered on view; most pages and section roots use it for the entrance effect.
- `CollapsibleSection` is the standard expand/collapse wrapper used by `WorkExperience`, `AcademicExperience`, and `PersonalRecommendations`. It accepts both a `description` (closed) and `descriptionOpen` (open) string.
- `Card` is the shared link-tile (image + title + description) used by Projects and Recommendations; clicks open `path` in a new tab.

### Analytics

`src/analytics/events.ts` exports a small `analytics` object that wraps `@vercel/analytics`'s `track()`. Wire UI events through these helpers (e.g., `analytics.clickProject(id)`) rather than calling `track` directly so event names stay consistent. `<Analytics />` from `@vercel/analytics/react` is mounted once in `App.tsx`.

### Styling

Tailwind v4 is enabled via the Vite plugin in `vite.config.ts` — there is no `tailwind.config` consumed at build time (the `src/tailwind.config.ts` file is unused by v4). Global styles in `src/App.css`. The dark slate palette (`bg-slate-800`, `text-gray-100`, etc.) is repeated across components rather than centralized.
