---
outline: deep
---

# Repository

Dies ist eine Einführung in unser Git Repository, um dir einen Überblick über die Repository und deren Struktur zu geben.

## Struktur

Die Repository ist wie folgt aufgebaut (oder ähnlich):

```text
.
├── .github/
│   └── workflows/
│       ├── validate-pr.yml
│       └── ...
├── .husky
├── __tests__/
│   ├── page.test.tsx
│   └── ...
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button/
│   │       │   ├── button.tsx
│   │       │   ├── button.types.ts
│   │       │   ├── button.test.tsx
│   │       │   └── index.ts
│   │       └── ...
│   ├── styles
│   ├── utils
│   ├── env.js
│   └── middleware.ts
├── supabase/
│   └── ...
├── .editorconfig
├── .gitignore
├── .npmrc
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── README.md
├── commitlint.config.mjs
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
├── turbo.json
├── vercel.json
└── vitest.config.mts
```

### `/.github/workflows`

Enthält die GitHub-Aktionen-Workflows. Diese werden verwendet, um den CI/CD-Prozess zu automatisieren.

### `/.husky`

Enthält die Konfiguration für Husky, ein Werkzeug, mit dem Sie Skripte auf Git-Hooks ausführen können. Wir verwenden es, um Linting und Tests vor dem Commit durchzuführen.

### `/__tests__`

Enthält Tests für das Projekt. Wir verwenden die in Vite integrierte Testbibliothek, um Tests zu schreiben. Tests für UI-Komponenten werden im selben Verzeichnis wie die Komponente abgelegt und nicht in einem separaten `__tests__`-Verzeichnis.

### `/public`

Enthält statische Elemente wie Bilder, Favicons usw., die von Next.js bereitgestellt werden.

### `/src`

Enthält den Quellcode für das Projekt.

#### `/src/app`

This is where the pages and layouts are defined. Each page is a React component that is rendered by Next.jsHier werden die Seiten und Layouts definiert. Jede Seite ist eine React-Komponente, die von Next.js gerendert wird.

#### `/src/components`

Enthält wiederverwendbare UI-Komponenten. Jede Komponente befindet sich in einem eigenen Verzeichnis und enthält die Komponentendatei, die Typendatei, die Testdatei und eine „index.ts“-Datei zum Exportieren der Komponente.

Alle Basiskomponenten der Benutzeroberfläche befinden sich im Verzeichnis `/ui`.

#### `/src/styles`

Enthält globale Stile und Themendateien, die von Tailwind CSS verwendet werden.

#### `/src/utils`

Enthält Utility-Funktionen und Konstanten, die im gesamten Projekt verwendet werden.

#### `/src/env.js`

Eine Datei, die `@t3-oss/nexjs-env` verwendet, um Umgebungsvariablen aus einer `.env`-Datei zu laden und sicherzustellen, dass sie während der Laufzeit verfügbar sind.

#### `/src/middleware.ts`

Middleware-Funktionen, die verwendet werden, um die Anfrage- und Antwortobjekte in den Next.js API-Routen zu ändern.