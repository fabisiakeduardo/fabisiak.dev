# Project Case Studies Design

## Intent

Improve Eduardo's portfolio by making the engineering behind each project
visible, not just adding more names and technology labels. The site should help
a recruiter or engineer understand what each project does, the problem it
addresses, the technical decisions involved, and what can be verified or tried.

## Scope and goals

- Add a dedicated, shareable case-study page for every project in the portfolio
  Projects section: Pendência, Naia, Vianova, Onda, Currículos, rust-pathtracer,
  AnonDrop, BananaGit, Singr, CDN, url-shortener, fio, and AImongUS.
- Add fio and AImongUS to the featured projects list on the home page.
- Write all new visible copy in Portuguese and English, following the site's
  existing language toggle.
- Keep the home page scannable; link each project summary to its case study.
- Use project READMEs, source where available, current product pages, and
  existing portfolio text as evidence. Explain engineering choices and
  constraints without claiming unverified impact.
- Keep existing external demo and repository links available from the case
  study.

### Out of scope

- Separate case studies for employment entries already covered by Experience.
- Rewriting the blog or About / Experience / Stack sections.
- Reworking project code or changing any of the project repositories.
- Inventing usage metrics, business outcomes, individual contribution details,
  or implementation facts that the available evidence does not support.

## Approaches

1. **Dedicated case-study pages (chosen).** Each project gets a stable internal
   route linked from its home-page row. The existing home page stays concise,
   while each page can explain the problem, approach, important engineering
   decisions, evidence/result, stack, and relevant demo or source links. This is
   the best fit for showing depth and making individual work easy to share.
2. **Expand every project inline on the home page.** This avoids new routes, but
   makes an already broad portfolio much longer and makes individual studies
   harder to share and revisit.

Blog posts were considered but dropped: a chronological article format is less
useful than a consistent, scannable project catalog for this purpose.

## Content and evidence

- Existing featured projects and open-source tools are treated as one set of 11
  entries; fio and AImongUS bring the total to 13.
- Use a consistent case-study structure, with concise copy for smaller tools
  and deeper technical explanation where the source supports it.
- Describe a project's problem and intended users, the design/architecture,
  notable trade-offs or constraints, what was built, and verifiable outcomes.
- Use only supported results. Existing portfolio claims may be retained, and
  new metrics must be traceable to source or project evidence.
- fio's README supports describing its PulseAudio-compatible audio engine,
  persisted desired state, reconciliation layer, routing rules, and drift
  recovery.
- AImongUS's README and local source support describing its Elixir/OTP game
  agents, information-isolated observations, validated intents, live
  spectator UI, and deterministic stub mode.
- The Onda public site returned an HTTP 525 during research and no public source
  repository was found. Its page must therefore stay within the existing
  portfolio's documented product description; do not add unverified
  implementation details.
- Preserve the current project's distinction between products that ran in
  production and projects that are experiments or open-source tools.

## Experience and structure

Home-page project row:

```text
PROJECT NAME                     SHORT DESCRIPTION        [Read case study]
                                 stack                    [Live] [Source]
```

Case-study page:

```text
~/projects/<slug>
Project name + category
Problem and context
Approach and engineering decisions
Architecture / implementation details
Outcome and evidence
Stack
[Live project] [Source code] [Back to projects]
```

- Add stable slugs and an internal case-study link to each project entry.
- Keep visible copy in `src/content/content.js`, in both `pt` and `en`, per the
  repository convention. Components must not hardcode user-facing strings.
- Add an App Router route for `/projects/[slug]`, with static parameters for the
  13 known projects and a useful not-found response for unknown slugs.
- Reuse the existing site shell, language state, visual tokens, terminal
  flavor, and responsive patterns. Do not introduce dependencies or a
  competing visual style.
- Add per-project page metadata so a case study can be shared with a meaningful
  title and description, and include all case-study routes in the sitemap.

## Constraints and open builder decisions

- The site is bilingual and currently keeps visible text in a single content
  module. All 26 language/project combinations must remain straightforward to
  maintain.
- The existing project list has different link types and evidence depth; each
  page should show only the actions that actually exist.
- Avoid unverified claims, fake performance data, and repetitive generic
  descriptions.
- The builder may choose the component split and exact responsive layout while
  preserving the existing site design and the structure above.

## Acceptance

- All 13 Projects-section entries have a case-study page and working internal
  link; fio and AImongUS also appear in the featured list.
- Every new heading, description, label, and action has Portuguese and English
  copy and responds to the existing language toggle.
- Existing live/repository links and existing portfolio content remain
  available.
- Case studies are reachable directly by URL, have meaningful metadata, and
  unknown slugs resolve to not-found; all 13 routes appear in the sitemap.
- `npm run build` succeeds.
