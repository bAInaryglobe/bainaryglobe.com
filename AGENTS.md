# AGENTS.md

## Build, Lint, and Test Commands

- **Development:** `npm run dev` or `pnpm dev` (Next.js with Turbopack)
- **Build:** `npm run build` or `pnpm build`
- **Start:** `npm run start` or `pnpm start`
- **Lint:** `npm run lint` or `pnpm lint`
- **Test (all):** `npm run test` or `pnpm test`
- **Test (watch):** `npm run test:watch` or `pnpm test:watch`
- **Test (single):** `npm test -- -t "TestName"` (replace `TestName` with your test or describe string)

## Code Style Guidelines

- **Imports:** Use ES modules. Prefer absolute imports using `@/` alias (configured in `tsconfig.json` and mapped in Jest config).
- **Formatting:** Follow Prettier defaults if present. Otherwise, use 2 spaces, trailing commas, and single quotes.
- **Types:** Use TypeScript everywhere. Prefer explicit types for function arguments and return values.
- **Naming:** Use camelCase for variables/functions, PascalCase for components/types, UPPER_CASE for constants.
- **Error Handling:** Always handle errors explicitly. Use try/catch for async code and return meaningful error messages.
- **Testing:** Place tests alongside code or in `__tests__` folders. Use React Testing Library and Jest. Use `jest-dom` matchers.
- **ESLint:** Uses `next/core-web-vitals`, `next/typescript`, and plugins: `jest`, `jest-dom`, `testing-library` (see `.eslintrc` or `eslint.config.mjs`).
- **Test Linting:** Do not use duplicate test titles, always assert in tests, prefer `.toHaveClass()` over checking `className`, and use `queryBy*` for negative presence checks.
- **Path Aliases:** Use `@/` for `src/` (see `tsconfig.json` and Jest `moduleNameMapper`).
- **Component Structure:** Co-locate component, test, and style files in the same folder.
- **Mocking:** Use Jest's mocking utilities for modules, Next.js router, and environment variables.

> For more, see Next.js [Jest guide](https://nextjs.org/docs/app/guides/testing/jest) and [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).

notes
1. keep the commit messages as concise as possible commitment messages should be just a single sentence no information about the author or no information about the grade no new lines just a single and sentence focused on the actual changes made 

2. keep keep everything professional as this is an organizational landing page and um project