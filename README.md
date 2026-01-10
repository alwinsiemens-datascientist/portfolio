

# Portfolio (Alwin Siemens)

This repository contains a small personal portfolio site that was converted from a static HTML site into a React app built with Vite.

## Technologies

- Vite (dev server and build)
- React 18
- JavaScript (JSX)
- Static styling using the original CSS: `assets/styles.css`
- Static assets in `assets/` (images, etc.)

## Architecture

- Component-based React app under `src/`:
	- `src/App.jsx` — composes the page
	- `src/components/` — `Header`, `Hero`, `About`, `Journey`, `Projects`, `Skills`, `Contact`, `Footer`
	- `src/main.jsx` — React entrypoint
- Vite serves the app in development and produces a production-ready `dist/` folder on build.
- Static public assets remain in `assets/` and are referenced from components as `/assets/...`.
- The visual styling and class names are preserved from the original static site so no CSS rewrite was required.

## Project structure (important files)

- `index.html` — mounts React at `#root` and links `assets/styles.css`
- `package.json` — scripts: `dev`, `build`, `preview`
- `vite.config.js` — Vite configuration (React plugin)
- `src/` — React source code and components
- `assets/` — images, `styles.css`, etc.

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:5173/ in your browser.

3. Build production bundle

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

## Deploy to GitHub Pages

Two common options are described below. Replace `<GITHUB_USERNAME>` and `<REPO_NAME>` with your values.

Use GitHub Actions to build and push `dist/` to `gh-pages`

- Create a GitHub Actions workflow that runs `npm ci && npm run build` and pushes `dist/` to the `gh-pages` branch. This is a robust approach for CI-backed deployment.

## Notes & tips

- Keep `assets/styles.css` and `assets/*` as-is to preserve the existing look.
- If you change the repository name or serve from a custom domain, update the `base` in `vite.config.js` and the `homepage` accordingly.
- For a SPA with client-side routing you would need additional config to handle refreshes; this project uses simple anchor links and static sections.

If you want, I can add a `deploy` script now (update `package.json`), or create a GitHub Actions workflow for automatic deployment.

