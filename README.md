# Frontend Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — routes, root layout, global styles
- `components/` — Header, Hero, Projects, Skills, Footer
- `data/projects.ts` — your projects and skills, as plain data (edit this file to add each credential, no JSX needed)

## Things to personalize before you ship this

- `app/layout.tsx` — page title/description
- `components/Header.tsx` — your name, resume link
- `components/Hero.tsx` — headline, bio, availability date, email
- `data/projects.ts` — real projects, stack, links
- `components/Footer.tsx` — social links
- Add a `resume.pdf` to `public/` so the Resume button works
- Add a favicon to `app/` (e.g. `app/icon.png`)

## Deploying

Easiest path is Vercel: push to GitHub, import the repo at vercel.com, no config needed.
# Portfolio
