# CLAUDE.md

## Project Overview

Personal portfolio website for Michelle Powell, Director of Product. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Features a blog system powered by markdown files.

## Commands

- `npm run dev` — Start local dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

- **Framework:** Next.js 16 with App Router (file-based routing, server components by default)
- **Styling:** Tailwind CSS v4 with custom color theme defined in `src/app/globals.css`
- **Blog engine:** Markdown files in `src/content/blog/` parsed with gray-matter and rendered with next-mdx-remote
- **Data:** Career experiences and projects are stored as typed TypeScript arrays in `src/data/`

### Directory Structure

```
src/
├── app/              # Pages (layout.tsx, page.tsx, not-found.tsx)
│   ├── about/
│   ├── blog/[slug]/
│   ├── contact/
│   └── experience/
├── components/       # Reusable React components (Navbar, Footer, cards, hero)
├── content/blog/     # Markdown blog posts with YAML frontmatter
├── data/             # TypeScript data files (experiences.ts, projects.ts)
└── lib/              # Utilities (blog.ts for post loading/parsing)
```

## Code Conventions

- TypeScript with strict mode enabled. Use typed interfaces for all data structures and component props.
- Path alias: `@/*` maps to `./src/*`.
- Components are one-per-file in `src/components/`. Use `"use client"` directive only when client interactivity is needed.
- Tailwind utility classes for all styling. Follow mobile-first responsive pattern (`md:` breakpoint for desktop).
- Custom color palette: `pink-primary`, `pink-light`, `pink-medium`, `pink-dark`, `dark`, `heading`, `gray`, `gray-light`, `white`. Use these semantic names instead of arbitrary Tailwind colors.
- Blog posts use YAML frontmatter with `title`, `date` (YYYY-MM-DD), and `excerpt` fields.
- Every page should include metadata (title, description) for SEO.
