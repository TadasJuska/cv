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


<!-- headroom:rtk-instructions -->
# RTK (Rust Token Killer) - Token-Optimized Commands

When running shell commands, **always prefix with `rtk`**. This reduces context
usage by 60-90% with zero behavior change. If rtk has no filter for a command,
it passes through unchanged — so it is always safe to use.

## Key Commands
```bash
# Git (59-80% savings)
rtk git status          rtk git diff            rtk git log

# Files & Search (60-75% savings)
rtk ls <path>           rtk read <file>         rtk grep <pattern>
rtk find <pattern>      rtk diff <file>

# Test (90-99% savings) — shows failures only
rtk pytest tests/       rtk cargo test          rtk test <cmd>

# Build & Lint (80-90% savings) — shows errors only
rtk tsc                 rtk lint                rtk cargo build
rtk prettier --check    rtk mypy                rtk ruff check

# Analysis (70-90% savings)
rtk err <cmd>           rtk log <file>          rtk json <file>
rtk summary <cmd>       rtk deps                rtk env

# GitHub (26-87% savings)
rtk gh pr view <n>      rtk gh run list         rtk gh issue list

# Infrastructure (85% savings)
rtk docker ps           rtk kubectl get         rtk docker logs <c>

# Package managers (70-90% savings)
rtk pip list            rtk pnpm install        rtk npm run <script>
```

## Rules
- In command chains, prefix each segment: `rtk git add . && rtk git commit -m "msg"`
- For debugging, use raw command without rtk prefix
- `rtk proxy <cmd>` runs command without filtering but tracks usage
<!-- /headroom:rtk-instructions -->
