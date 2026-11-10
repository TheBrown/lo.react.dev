# Lao React Documentation — Maintainer Restart Plan (November 2026)

This is a working checklist for resuming maintenance of the official [Lao React documentation](https://github.com/reactjs/lo.react.dev). It does not claim that the translation percentages or checks are currently verified.

## Verified starting point (10 November 2026)

- Official repository: `reactjs/lo.react.dev`; fork: `TheBrown/lo.react.dev`.
- The fork's `main` matched the official `main` when checked on 10 November 2026.
- Last merged official commit seen: 14 April 2026.
- The official repository has bot-created upstream synchronization PRs through [#192](https://github.com/reactjs/lo.react.dev/pull/192) (9 November 2026).
- PR #192 was reported mergeable, but touches **153 files** and includes a substantial conflict/translation-review checklist. Mergeability alone is not translation quality or build verification.
- [Translation Progress #1](https://github.com/reactjs/lo.react.dev/issues/1) was last updated in 2023. It identifies @TheBrown as maintainer and contains completed as well as unclaimed/untranslated pages.
- The public translation progress percentages should be treated as historical until the checklist and actual page content have been re-audited.

## Phase 1 — Preserve and assess

- [ ] Do **not** merge all accumulated sync or dependency PRs automatically.
- [ ] Record a backup tag/branch at the current official `main` before any large synchronization.
- [ ] Check whether newer sync PRs supersede older sync PRs; determine which can be closed as redundant only after review.
- [ ] Inspect PR #192 changes in code, dependencies, navigation, MDX, and documentation, paying particular attention to the conflicts listed in its description.
- [ ] Identify any existing Lao text potentially replaced by English during sync. Preserve translation work and review regressions.
- [ ] Verify a reproducible local development environment and run install, `yarn check-all`, `yarn build`, and manual page smoke tests on a testing branch. Review the diff after `yarn check-all` because the command changes files.
- [ ] Check dependency/security alerts; address separately with tests, rather than bundling risky dependency upgrades with translation edits.

## Phase 2 — Restore a credible translation tracker

- [ ] Compare [progress issue #1](https://github.com/reactjs/lo.react.dev/issues/1) against actual localized content in `src/content`, not only the checked boxes.
- [ ] Mark pages as translated only if the current Lao content is genuinely translated, linked correctly, and readable.
- [ ] Distinguish translated-but-needs-review, untranslated, stale-from-upstream, and ready.
- [ ] Refresh the checklist for React docs added since the original 2023 tracker. Keep the translation project's required checklist markers intact so its tracking integration continues to work.
- [ ] Set up a Lao terminology/style glossary (e.g., state, props, component, hook, effect, render); agree terminology before translating many pages.
- [ ] Publish one clear contributor workflow: claim one page in the tracker, work on a branch, preserve Markdown/MDX semantics, submit a small PR, get a language/technical review.

## Phase 3 — Resume translation sustainably

Suggested first topic: **Managing State** in Learn React, because it continues the translated introductory material.

- [ ] Start with [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state), already claimed under @TheBrown in the original tracker, and confirm its current translated status before editing.
- [ ] Continue with **Choosing the State Structure**, **Sharing State Between Components**, and other Managing State pages one at a time.
- [ ] Keep code identifiers, API names, JSX, MDX components, links, and runnable examples intact; translate explanatory copy and suitable alt text.
- [ ] Validate each PR's rendering on mobile and desktop, including Lao typography and layout.
- [ ] Avoid counting partially translated or copied-English pages as complete.

## Lightweight operating cadence

- **Weekly (15–30 min):** triage bot sync PRs, new contributor PRs/issues, and build/security failures.
- **Monthly:** merge a reviewed, small batch; update the tracker and glossary; publish a short progress note.
- **Quarterly:** compare a sampled set of pages against upstream react.dev and review deployment/readability.

## Merge and deployment policy

No automatic merge of translation syncs, major dependency updates, or translated pages. The maintainer reviews the diff and checks, then approves the merge and publication. This document is an operational plan, not authorization to change the official repository.
