# Next.js Technical Iteration 1 Starter

This repository is the first technical iteration of the future landing project.

Goal of this stage: verify the full workflow works end-to-end:
- local run in Cursor;
- code versioning in GitHub;
- deployment in Vercel.

At this point, the project intentionally includes only a minimal, clean skeleton (no design system, no marketing blocks, no lead form, no extra integrations).

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

Expected text on the page:
- `Project is running`
- `Next.js + GitHub + Vercel setup successful`

## Build for production

```bash
npm run build
```

Optional local production check:

```bash
npm run start
```

## What counts as success for this iteration

This iteration is successful when:
- the app starts locally without errors;
- the repository can be committed and pushed to GitHub;
- Vercel deploys the project successfully from GitHub;
- the deployed page shows the technical placeholder text.
