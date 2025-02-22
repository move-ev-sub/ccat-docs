---
outline: deep
---

# Repository

This is an introduction to our Git Repository. It is intended for developers who will be working on the project to give them an overview of the repository and how to work with it.

## Structure

The repository is structured as follows:

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

Contains the GitHub Actions workflows. These are used to automate the CI/CD process.

### `/.husky`

Contains the configuration for Husky, a tool that allows you to run scripts on Git hooks. We use it to run linting and testing before committing.

### `/__tests__`

Contains tests for the project. We use Vite's built-in testing library to write tests. Tests for UI components are placed in the same directory as the component and not in a separate `__tests__` directory.

### `/public`

Contains static assets like images, favicons, etc. which are served by Next.js.

### `/src`

Contains the source code for the project.

#### `/src/app`

This is where the pages and layouts are defined. Each page is a React component that is rendered by Next.js.

#### `/src/components`

Contains reusable UI components. Each component is placed in its own directory and contains the component file, types file, test file, and an `index.ts` file to export the component.

All base UI components are placed in the `/ui` directory.

#### `/src/styles`

Contains global styles and theme files which are used by Tailwind CSS.

#### `/src/utils`

Contains utility functions and constants used throughout the project.

#### `/src/env.js`

A file that uses @t3-oss/nexjs-env to load environment variables from a `.env` file and make sure they are available during runtime.

#### `/src/middleware.ts`

Middleware functions that are used to modify the request and response objects in the Next.js API routes.