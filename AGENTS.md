# AGENTS.md

## Project

Angular application for WoW guild loot tracking and distribution (`loot`), deployed to GitHub Pages.

## Quick commands

```sh
npm start           # ng serve dev server at http://localhost:4200/
npm run build       # ng build
npm test            # run tests
npm run lint        # linting
npm run deploy      # deploy to GitHub Pages
```

## Domain docs

Single-context repo: root `CONTEXT.md` + `docs/adr/` are the domain documentation; see `docs/agents/domain.md` for consumption rules (read before exploring; proceed silently if absent).

## Agent skills

### Issue tracker

GitHub issues on `bffs-wow/loot` via `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout (root `CONTEXT.md` + `docs/adr/`). See `docs/agents/domain.md`.
