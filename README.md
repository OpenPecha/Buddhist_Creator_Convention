## Buddhist Creator Convention

### Overview

A modern, responsive website for the Buddhist Creator Convention. It includes event highlights, speakers/coaches, who the event is for, what attendees get, and a registration section.

### Tech stack

- **Build tool**: Vite
- **Language**: TypeScript
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **UI components**: shadcn/ui (Radix UI)
- **Routing**: React Router

### Getting started

Prerequisites:
- Node.js 18+ and npm

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

### Available scripts

- `npm run dev`: Start the Vite dev server
- `npm run build`: Build for production to `dist/`
- `npm run build:dev`: Development-mode build
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

### Project structure

- `src/pages` – top-level routes (`Index.tsx`, `NotFound.tsx`)
- `src/components` – page sections (Hero, About, Coaches, Registration, etc.)
- `src/components/ui` – reusable shadcn/ui components
- `src/assets` – images and media
- `src/lib` – utilities (e.g., `utils.ts`)
- `src/hooks` – custom hooks

### Styling and components

- Tailwind classes are defined in `src/index.css` with configuration in `tailwind.config.ts`.
- UI primitives are in `src/components/ui/*` and can be composed into higher-level sections in `src/components/*`.

### Deployment

This is a static site. After `npm run build`, deploy the `dist/` folder to any static hosting platform (e.g., Vercel, Netlify, GitHub Pages, or your own server).

### Contributing

Pull requests are welcome. For larger changes, please open an issue to discuss what you would like to change.
