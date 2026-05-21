# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Single Next.js 14 (App Router) landing/marketing site for the "25 MicroSaaS Challenge". No monorepo, no Docker, no locally-run backing services.

### Running the app

```bash
npm run dev        # starts dev server on port 3000
npm run lint       # ESLint
npm run build      # production build
```

See `package.json` `scripts` for the full list.

### Environment variables

A `.env.local` file is required. The app references:

| Variable | Purpose | Required for dev server to start |
|---|---|---|
| `DATABASE_URL` | Neon Postgres connection string | No (only needed for newsletter subscribe actions) |
| `RESEND_API_KEY` | Resend email API key | No (only needed for welcome email sending) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics | No |

The dev server starts and renders all pages without valid values for these variables. Newsletter subscription (server action + API route) will fail at runtime without a real `DATABASE_URL` and `RESEND_API_KEY`.

### Gotchas

- The lockfile is `package-lock.json` (npm), even though the README references `pnpm`. Use `npm install` for dependency management.
- No automated test suite exists in this repo — there are no test scripts or test frameworks configured.
- The `actions.ts` server action eagerly calls `neon(process.env.DATABASE_URL!)` at module scope. If `DATABASE_URL` is missing entirely, the import will throw. A placeholder value in `.env.local` avoids this.
