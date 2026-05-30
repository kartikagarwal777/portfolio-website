# Kartik Agarwal Portfolio Website

Personal portfolio and resume site for Kartik Agarwal, built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 22.13.0 or newer
- npm 10.0.0 or newer

The project includes an `.nvmrc` pinned to Node 22.13.0.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000 to view the site locally.

## Build

```bash
npm run build
```

The main page lives at `src/app/page.tsx`, shared styles live in `src/app/globals.css`, and reusable sections live in `src/components`.

## Deployment

Netlify builds the site with Node 22.13.0 using the configuration in `netlify.toml`.

The `deploy.sh` script is a local sanity check that installs from the lockfile and runs the production build. It does not commit, change remotes, or push code.
