# Ahmed Khaled Portfolio

A single-page personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

The site is fully static and uses content from the CV only. All editable portfolio data is centralized in one file so the UI can be updated without changing component code.

## Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Static export ready for Vercel

## Features

- Single-page smooth-scroll portfolio
- Dark modern UI with glass-style panels
- Sticky navigation
- Responsive layout for mobile and desktop
- Featured project highlight
- Scroll-in section animations
- CV download from `public/cv.pdf`

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  fade-in-section.tsx
  section-heading.tsx
data/
  portfolio.ts
public/
  cv.pdf
```

## Content Source

All portfolio content lives in:

- [data/portfolio.ts](/D:/Full%20Projects/Portfolio/ahmed-khaled-portfolio/data/portfolio.ts)

Update this file to change:

- name and title
- summary and about text
- tech stack
- projects
- experience
- certifications
- contact links

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static production output:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Notes

- The portfolio links to the CV file at `public/cv.pdf`.
- The app uses `output: "export"` in `next.config.mjs`.
- No CMS, database, or API calls are used.

## Deployment

This project can be deployed as a static site on Vercel.

## License

Personal portfolio project for Ahmed Khaled.
