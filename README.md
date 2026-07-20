# Astro PortFolio — JulianMDz

Personal portfolio website built with **Astro 7**, **React 19**, **Tailwind CSS v4**, and **GSAP**, featuring interactive 3D visuals and scroll-driven animations.

## Tech Stack

| Category        | Libraries                                                                 |
|-----------------|---------------------------------------------------------------------------|
| Framework       | [Astro](https://astro.build) 7 + [React](https://react.dev) 19            |
| Styling         | [Tailwind CSS](https://tailwindcss.com) v4 via `@tailwindcss/vite`        |
| Animations      | [GSAP](https://gsap.com) 3.15 (ScrollTrigger, useGSAP, timelines)        |
| 3D / WebGL      | [OGL](https://github.com/oframe/ogl) 1.0 (WebGL framework)               |
| UI Library      | [shadcn/ui](https://ui.shadcn.com) (base-vega style)                     |
| Motion          | [motion](https://motion.dev) 12.42 (Framer Motion successor)              |
| Icons           | [Lucide React](https://lucide.dev) 1.25                                   |
| Package Manager | pnpm                                                                      |

## Architecture

Single-page portfolio composed of five full-screen sections:

```
index.astro
└── BaseLayout.astro (Nav, SEO, fonts, global styles)
    ├── Hero             — Name, subtitle, animated grain overlay
    ├── Description      — Bio text with scrambled-text reveal
    ├── Projects         — Filterable list (DEV / 3D) + TiltedCard previews
    └── About            — Bio, skills, social links
└── Footer.astro         — Credits
```

Sections scroll sequentially with GSAP-powered transitions. Interactive React components are mounted with `client:visible` (lazy hydration) for performance.

## Key Components

### Sections

| Component     | File                                    | Description                       |
|---------------|-----------------------------------------|-----------------------------------|
| Hero          | `components/sections/Hero.astro`       | Landing screen with name & grain  |
| Description   | `components/sections/Description.astro` | Bio with scrambled reveal effect  |
| Projects      | `components/sections/Projects.astro`    | Filterable project cards + list   |
| About         | `components/sections/About.astro`       | Skills, bio, and social profiles  |

### Interactive (React)

| Component          | File                             | Description                          |
|--------------------|----------------------------------|--------------------------------------|
| TiltedCard         | `components/TiltedCard.tsx`      | 3D perspective card on hover         |
| TextType           | `components/TextType.tsx`        | Typewriter text animation            |
| ScrambledText      | `components/ScrambledText.tsx`   | Text scrambles on reveal             |
| VariableProximity  | `components/VariableProximity.tsx` | Text responds to cursor proximity  |
| DarkVeil           | `components/DarkVeil.tsx`        | Transition overlay for dark mode     |
| Grainient          | `components/Grainient.tsx`       | Animated grain + gradient texture    |
| GradualBlur        | `components/GradualBlur.tsx`     | Progressive blur effect              |
| ModeToggle         | `components/ModeToggle.tsx`      | Dark/light theme switcher            |
| HeroSubtitle       | `components/HeroSubtitle.tsx`    | Animated subtitle in Hero            |
| DescriptionText    | `components/DescriptionText.tsx`  | Bio text with proximity effect       |

### Shared

| Component    | File                             | Description                  |
|--------------|----------------------------------|------------------------------|
| Nav          | `components/Nav.astro`           | Sticky navigation bar       |
| Footer       | `components/Footer.astro`        | Credits & social links      |
| SocialLinks  | `components/SocialLinks.astro`   | Social icon row             |
| Preloader    | `components/Preloader.astro`     | Initial loading screen       |

## Features

- **GSAP scroll-driven animations** — sections animate into view on scroll
- **Filterable project viewer** — DEV / 3D tabs with smooth-scrolling project list and synchronized card previews
- **TiltedCard 3D effect** — perspective transform on mouse hover with configurable amplitude
- **Dark / Light mode** — persisted theme with smooth transition via `next-themes`
- **Scrambled text reveal** — entry animation on the description section
- **Cursor-proximity text** — VariableProximity component warps text based on mouse position
- **WebGL grain overlay** — animated film-grain texture with gradient on the Hero section
- **Lazy hydration** — all interactive components use `client:visible` for optimal performance

## Project Structure

```
/
├── .astro/                   # Astro internal cache
├── .agents/                  # AI agent skill definitions
│   └── skills/
├── components/               # All components (Astro + React)
│   ├── sections/             # Page section components
│   └── ui/                  # shadcn/ui primitives (button, dropdown-menu)
├── graphify-out/             # Auto-generated knowledge graph output
├── lib/                      # Utilities (gsap config, cn helper)
├── public/                   # Static assets (favicon)
├── src/
│   ├── layouts/              # BaseLayout.astro (shell wrapper)
│   ├── pages/                # index.astro (single page)
│   └── styles/               # global.css (Tailwind + custom vars)
├── astro.config.mjs          # Astro config (React + Tailwind)
├── components.json           # shadcn/ui config
├── tsconfig.json             # TypeScript (strict, path aliases)
└── package.json
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Install dependencies                             |
| `pnpm dev`                | Start local dev server at `localhost:4321`        |
| `pnpm build`              | Build production site to `./dist/`                |
| `pnpm preview`            | Preview production build locally                  |
| `pnpm astro ...`          | Run Astro CLI commands                           |

## Getting Started

```sh
pnpm install
pnpm dev
```
