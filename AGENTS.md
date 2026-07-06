# CV Repo — AI Instructions

## Project
- Astro + TailwindCSS static site, deployed via Docker + nginx

## Key Files
- `src/data/cv.ts` — main data source: bio, skills, experience, education, certifications
- `src/pages/index.astro` — main website page
- `src/pages/resume.astro` — printable resume page
- `src/layouts/Layout.astro` — base layout with SEO/metadata
- `public/` — static assets (fonts, images, PDFs)

## Common Edits
- **Bio** → `src/data/cv.ts:5` (`hero.bio` field)
- **Skills** → `src/data/cv.ts:16` (`skills` array, grouped by category)
- **Experience** → `src/data/cv.ts` (`experience` array, each entry has `company`, `role`, `period`, `bullets`, `technologies`)
- **Education/Certs** → `src/data/cv.ts` (`education`, `certifications` arrays)
- **Personal info** → `src/data/cv.ts:1` (`hero` object: name, title, email, links, etc.)
- **Metadata/SEO** → `src/layouts/Layout.astro` (title, description, og tags)
- **Docker deploy** → `Dockerfile`, `docker-compose.yml`, `nginx.conf`

## Workflow
- `main` is PR-protected — never push directly. Always create a branch, commit, push, and open a PR.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- Preview: `npm run build && npm run preview`
- Docker: `docker compose up -d --build`

## Code Conventions
- No tests in this repo
- No comments in code
- Data file uses TypeScript `export const` with typed arrays
- Bio is a single string (no line breaks in the string value)
- Skills are alphabetically ordered within categories
- Experience bullets use past tense, no trailing punctuation
