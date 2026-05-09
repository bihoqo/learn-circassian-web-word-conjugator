# Circassian Word Conjugator (Standalone)

Standalone React + Vite + Tailwind v4 project for iterating on the Circassian
verb conjugator UI in isolation, without pulling in the full
`learn-circassian-web-tanstack-start` codebase.

The intent is portability: clone, `bun install`, `bun dev`, work on the
conjugator on any machine, then port changes back to the main repo when ready.

## Stack

- Bun
- Vite 7
- React 19
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Zustand (state + persisted settings)
- React Router DOM (replaces TanStack Router from the parent repo)
- lucide-react

## Getting started

```bash
bun install
bun dev
```

The dev server runs on http://localhost:3000.

## Project layout

```
src/
├── main.tsx                  # entry, mounts <App />
├── App.tsx                   # routes
├── index.css                 # Tailwind v4 import
├── lib/utils.ts              # cn() helper
├── shared/store/             # global stores (theme)
└── features/word-conjugator/ # the feature itself
    ├── classes/
    ├── components/
    ├── consts/
    ├── hooks/
    ├── lib/
    ├── pages/
    ├── store/
    └── types/
```

## Porting changes back

The feature folder mirrors the structure used in
`learn-circassian-web-tanstack-start/src/features/word-conjugator`. The only
adapted pieces are:

- `Link` / `useLocation` come from `react-router-dom` instead of
  `@tanstack/react-router`. When porting back, swap the imports.
- `cn` and `useThemeStore` are local copies; the parent repo has its own
  shared versions at `@/lib/utils` and `@/shared/store/useThemeStore`.

Everything else (types, classes, store, hooks, components, pages, consts)
should be a direct file copy.
# learn-circassian-web-word-conjugator
