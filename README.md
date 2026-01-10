

# Portfolio (Alwin Siemens)

This repository contains a personal portfolio site as React app built with Vite.

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

Deployment via Github Actions

