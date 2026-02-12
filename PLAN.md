# Portfolio + Blog Website — Development Plan

## Overview

A modern, responsive personal portfolio website with an integrated blog, built with
**React + Next.js**. The site will feature a soft pink, white, and black color palette
with a clean, modern aesthetic. Blog posts are written as simple markdown files — just
drop a `.md` file in a folder and it shows up on the site.

---

## Tech Stack

| Layer           | Technology                | Why                                                        |
| --------------- | ------------------------- | ---------------------------------------------------------- |
| Framework       | **Next.js 14 (App Router)** | Industry standard, great for resumes, built-in routing     |
| Language        | **TypeScript**            | Teaches good habits, highly valued by employers             |
| Styling         | **Tailwind CSS**          | Fast to build with, beginner-friendly utility classes       |
| Blog/Markdown   | **next-mdx-remote** + gray-matter | Render `.md` files as blog posts with frontmatter metadata |
| Icons           | **react-icons**           | Easy access to thousands of icons                          |
| Deployment      | **Vercel** (later)        | Free hosting, built for Next.js, one-click deploy          |

---

## Color Palette & Design

| Role        | Color                  | Usage                              |
| ----------- | ---------------------- | ---------------------------------- |
| Primary     | Soft pink `#F9A8D4`    | Accents, buttons, highlights       |
| Light pink  | `#FDF2F8`              | Backgrounds, cards                 |
| White       | `#FFFFFF`              | Main background                    |
| Dark        | `#1F2937`              | Body text                          |
| Black       | `#111827`              | Headings, nav                      |
| Gray        | `#6B7280`              | Secondary text, borders            |

**Design principles:** Clean whitespace, rounded corners, subtle shadows, smooth
hover animations, modern sans-serif font (Inter).

---

## Site Structure & Pages

```
/                   → Home / Landing page
/about              → About me (detailed bio + headshot)
/projects           → Project showcase grid
/blog               → Blog listing page
/blog/[slug]        → Individual blog post (rendered from markdown)
/contact            → Contact form / links
```

---

## Phase 1: Project Setup & Foundation

**Goal:** Get a working Next.js app running with the basic structure.

- [ ] Initialize Next.js project with TypeScript and Tailwind CSS
- [ ] Set up project folder structure
- [ ] Configure Tailwind with custom color palette (pinks, white, black)
- [ ] Add global styles and Inter font
- [ ] Create a reusable `<Layout>` component (header + footer + main content area)
- [ ] Create the `<Navbar>` component with links to all pages
- [ ] Create the `<Footer>` component

**What you'll learn:** Project setup, component basics, JSX, Tailwind CSS, file-based routing.

### Folder structure after Phase 1:
```
src/
├── app/
│   ├── layout.tsx          ← Root layout (wraps every page)
│   ├── page.tsx            ← Home page
│   ├── globals.css         ← Global styles + Tailwind
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx        ← Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    ← Individual blog post
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── BlogPostCard.tsx
│   ├── HeroSection.tsx
│   └── HeadshotImage.tsx
├── content/
│   └── blog/              ← Drop markdown files here!
│       ├── my-first-post.md
│       └── learning-to-code.md
├── lib/
│   └── blog.ts            ← Helper functions to read markdown files
└── public/
    └── images/
        └── headshot.jpg    ← Your headshot goes here
```

---

## Phase 2: Home Page & Core Components

**Goal:** Build the landing page with hero section and headshot.

- [ ] Build `<HeroSection>` — large greeting with your name, tagline, and headshot
- [ ] Build `<HeadshotImage>` — circular image component with soft shadow
- [ ] Add a brief intro / "what I do" section below the hero
- [ ] Add a "Featured Projects" preview section (shows 2-3 cards)
- [ ] Add a "Latest Blog Posts" preview section (shows 2-3 recent posts)
- [ ] Add call-to-action buttons ("View Projects", "Read Blog", "Contact Me")

**What you'll learn:** Component props, Next.js `<Image>` optimization, responsive layouts with Tailwind.

---

## Phase 3: About & Projects Pages

**Goal:** Flesh out the About and Projects sections.

### About Page
- [ ] Add headshot with a text bio section beside it
- [ ] Add a "Skills" section with skill tags/badges (e.g., HTML, CSS, JavaScript, React)
- [ ] Add a "Resume" download button (link to a PDF in `/public`)
- [ ] Add a timeline or milestones section (optional — your learning journey)

### Projects Page
- [ ] Build `<ProjectCard>` component — image, title, description, tech tags, links
- [ ] Create a project data file (`src/data/projects.ts`) to store project info
- [ ] Build project grid layout (responsive: 1 col mobile, 2-3 cols desktop)
- [ ] Add links to GitHub repo and live demo on each card
- [ ] Add hover animations on cards

**What you'll learn:** TypeScript interfaces, data-driven rendering with `.map()`, responsive grid layout.

---

## Phase 4: Blog System (Markdown-powered)

**Goal:** Build a blog where you just add `.md` files and they appear automatically.

- [ ] Install `gray-matter` (parses markdown frontmatter) and `next-mdx-remote` (renders markdown)
- [ ] Create blog helper functions in `src/lib/blog.ts`:
  - `getAllPosts()` — reads all `.md` files from `content/blog/`
  - `getPostBySlug(slug)` — reads a single post
- [ ] Build the blog listing page (`/blog`) — shows all posts sorted by date
- [ ] Build `<BlogPostCard>` — title, date, excerpt, "Read more" link
- [ ] Build the individual post page (`/blog/[slug]`) — renders full markdown
- [ ] Style the markdown content (headings, code blocks, lists, links, images)
- [ ] Add 2 starter blog posts as examples

### How blog posts work:
```markdown
---
title: "My First Blog Post"
date: "2026-02-12"
excerpt: "Welcome to my blog! Here's what I'm learning..."
---

# Hello World!

This is my first blog post. I'm learning to code with React and Next.js...
```

Just save a `.md` file like this in `src/content/blog/` and it appears on the site!

**What you'll learn:** File system operations, dynamic routes (`[slug]`), markdown parsing, async data fetching.

---

## Phase 5: Contact Page & Polish

**Goal:** Add contact info and polish the whole site.

- [ ] Build contact page with your links (GitHub, LinkedIn, email)
- [ ] Add social media icon links in the footer
- [ ] Add smooth page transitions / hover effects
- [ ] Ensure full mobile responsiveness (test all pages at small breakpoints)
- [ ] Add SEO metadata (page titles, descriptions) using Next.js `metadata`
- [ ] Add a favicon
- [ ] Final design review — spacing, colors, typography consistency

**What you'll learn:** Metadata/SEO basics, responsive design testing, UI polish.

---

## Phase 6: Deployment (When Ready)

**Goal:** Put your site live on the internet.

- [ ] Create a Vercel account (free)
- [ ] Connect your GitHub repo to Vercel
- [ ] Deploy with one click
- [ ] (Optional) Set up a custom domain name

**What you'll learn:** Deployment, CI/CD basics, DNS.

---

## Stretch Goals (Future Enhancements)

These are things you can add later to keep learning:

- [ ] Dark mode toggle
- [ ] Blog post search / tag filtering
- [ ] Animated page transitions (Framer Motion)
- [ ] Reading time estimate on blog posts
- [ ] RSS feed for the blog
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] CMS integration (so you can edit posts from a web UI instead of markdown files)

---

## Summary

| Phase | What You Build                    | Key Skills Learned                        |
| ----- | --------------------------------- | ----------------------------------------- |
| 1     | Project setup + layout            | Next.js, TypeScript, Tailwind, components |
| 2     | Home page + hero                  | Props, images, responsive design          |
| 3     | About + Projects pages            | Data-driven UI, TypeScript interfaces     |
| 4     | Markdown blog system              | Dynamic routes, file I/O, markdown        |
| 5     | Contact + polish                  | SEO, mobile testing, UI refinement        |
| 6     | Deploy to Vercel                  | Deployment, CI/CD                         |

This project will teach you **real-world skills** employers look for: React, TypeScript,
Next.js, Tailwind CSS, responsive design, markdown content management, and deployment.
It's also a great portfolio piece in itself — a portfolio site that showcases your ability
to build portfolio sites!
