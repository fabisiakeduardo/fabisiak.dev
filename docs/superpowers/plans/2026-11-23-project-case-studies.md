# Project Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add bilingual, shareable case-study pages for all 13 projects in Eduardo's portfolio, including fio and AImongUS.

**Architecture:** Keep all copy in the existing bilingual `content.js`. Add stable slugs and case-study data to the featured and open-source project entries, expose lookup helpers from `src/lib/projects.js`, and render the pages through a statically generated App Router route. The home-page cards link to the case study while preserving each project's external demo or source link.

**Tech Stack:** Next.js 15 App Router, React 19, existing Tailwind CSS 4 and Motion setup, Node.js built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-23-project-case-studies-design.md`

## Global Constraints

- All visible copy lives in `src/content/content.js` in both `pt` and `en`; never hardcode strings in components.
- Do not introduce dependencies or change any project repository outside `fabisiak.dev`.
- Preserve the current dark navy visual theme, accent family, terminal flavor, and responsive patterns.
- Do not use em-dashes or en-dashes in visible copy.
- Do not invent metrics, business outcomes, contribution details, or implementation facts.
- Keep the Onda study limited to existing portfolio evidence unless new source material becomes available.
- Preserve existing demos, repository links, and portfolio content.

## Review Focus

- A slug or case-study field is missing in one locale: tests must assert identical project slug sets and complete case-study fields in Portuguese and English.
- A project URL is missing or mistyped: tests must assert the complete set of 13 expected slugs and a direct-route smoke check must request every route.
- A nonexistent slug renders a broken page instead of 404: route smoke check must assert an unknown project responds with 404.
- Long localized copy or a project name overflows on narrow screens: inspect representative long pages on mobile and desktop widths.
- The language toggle changes the shell but not the case study: inspect a case page in both languages and assert the localized project data exists in automated tests.

---

### Task 1: Add featured project case-study data

**Files:**
- Modify: `src/content/content.js`
- Modify: `package.json`
- Create: `tests/projects.test.mjs`

**Interfaces:**
- Each featured project entry gets `slug` and `caseStudy` with `problem`, `approach`, `decisions` (`{ title, description }[]`), and `outcome`.
- Add the same fields and slugs to Portuguese and English entries for Pendência, Naia, Vianova, Onda, Currículos, rust-pathtracer, fio, and AImongUS.
- Keep Onda's case study within the current portfolio evidence because its repository and live site were unavailable during research.
- Add translated section labels and the case-study CTA under `projects`.

- [ ] **Step 1: Set up the test command and write content-integrity tests**

Add `"test": "node --experimental-default-type=module --test tests"` to `package.json`. Add Node built-in tests asserting the eight expected featured slugs are present in both locales and every one has a nonempty category, `problem`, `approach`, `outcome`, and at least one decision with a title and description.

- [ ] **Step 2: Run the tests and confirm they fail**

Run: `npm test`
Expected: FAIL because the project entries do not yet have case-study slugs and content.

- [ ] **Step 3: Add featured case-study content**

Add bilingual data for the eight featured projects. Keep the existing short descriptions and external links; add GitHub links for fio and AImongUS, and do not add unverified implementation or impact claims.

- [ ] **Step 4: Run the tests and build**

Run: `npm test`
Expected: PASS for the eight featured project entries in both locales.

Run: `npm run build`
Expected: production build succeeds.

### Task 2: Add open-source case-study data and complete the content contract

**Files:**
- Modify: `src/content/content.js`
- Modify: `tests/projects.test.mjs`

**Interfaces:**
- The five open-source entries AnonDrop, BananaGit, Singr, CDN, and url-shortener get the same `slug` and `caseStudy` fields as featured projects.
- The five OSS entries also get concise, translated categories.
- Together with Task 1, both locales expose the same 13 slugs across `projects.items` and `projects.oss.items`.
- Keep Onda's case study within the current portfolio evidence because its repository and live site were unavailable during research.

- [ ] **Step 1: Expand the content-integrity tests to all 13 projects**

Assert the exact 13 slugs, uniqueness, Portuguese/English parity, and nonempty categories and required case-study fields for both the featured and open-source lists.

- [ ] **Step 2: Run the tests and confirm the five OSS entries fail**

Run: `npm test`
Expected: FAIL only for missing OSS slugs or case-study fields.

- [ ] **Step 3: Add concise, evidence-based OSS case studies**

Write bilingual studies for AnonDrop, BananaGit, Singr, CDN, and url-shortener. Use repository README evidence, retain existing repository links and stacks, and keep descriptions proportionate to each project's scope.

- [ ] **Step 4: Run the tests and build**

Run: `npm test`
Expected: PASS for all 13 projects in both locales.

Run: `npm run build`
Expected: production build succeeds.

### Task 3: Build the statically generated case-study pages

**Files:**
- Create: `src/lib/projects.js`
- Create: `src/components/ProjectCaseStudy.jsx`
- Create: `src/app/projects/[slug]/page.jsx`
- Modify: `tests/projects.test.mjs`

**Interfaces:**
- `getProjectSlugs(): string[]` returns the 13 known slugs from the English project lists.
- `getProject(slug: string, lang: "pt" | "en" = "en")` returns the matching project merged with its case-study fields, or `null` for an unknown slug.
- `src/lib/projects.js` uses a relative import for `content.js` so the Node built-in tests can import the helper without Next.js alias configuration.
- `ProjectCaseStudy({ slug })` reads the current locale from `useLang()` and renders localized content within the existing `BlogShell`.

- [ ] **Step 1: Add failing lookup tests**

Assert `getProjectSlugs()` returns all 13 unique slugs, `getProject(slug, "pt")` and `getProject(slug, "en")` return localized case-study content, and an unknown slug returns `null`.

- [ ] **Step 2: Run the lookup tests and confirm they fail**

Run: `npm test`
Expected: FAIL because `src/lib/projects.js` does not exist.

- [ ] **Step 3: Implement project lookup and the case-study route**

Implement the two helper functions. Add `/projects/[slug]` with `generateStaticParams`, English metadata/canonical/Open Graph data, and `notFound()` for unknown slugs. Build a reusable client component that renders the title, problem, approach, decisions, outcome, stack, and only the available demo/source actions. Wrap it in `BlogShell` to reuse the site's language toggle, navigation, background, and footer.

- [ ] **Step 4: Run tests and build all known routes**

Run: `npm test`
Expected: PASS, including unknown-slug and locale lookup tests.

Run: `npm run build`
Expected: all 13 `/projects/[slug]` pages are statically generated.

### Task 4: Link project lists, publish routes in the sitemap, and verify

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/app/sitemap.js`

**Interfaces:**
- Featured rows and OSS cards expose a localized internal case-study link plus the existing external source/demo link.
- `sitemap()` includes `/projects/<slug>` for all 13 slugs.

- [ ] **Step 1: Add case-study links to both project lists and update the sitemap**

Add localized “Read case study” links to featured rows and OSS cards without nesting anchors. Preserve their external links and add all known case-study routes to the sitemap.

- [ ] **Step 2: Run the full automated verification**

Run: `npm test`
Expected: PASS for all content and lookup assertions.

Run: `npm run build`
Expected: production build succeeds and emits all 13 case-study routes.

- [ ] **Step 3: Smoke-test routes and sitemap**

Run the production server and request all 13 project URLs, `/projects/not-a-real-project`, and `/sitemap.xml`.
Expected: all known routes return 200, the unknown route returns 404, and the sitemap includes all 13 project routes plus the existing home and blog URLs.

- [ ] **Step 4: Inspect responsive layout and language behavior**

Inspect representative long pages at desktop and mobile widths. Switch between PT and EN and confirm both the case-study body and shared shell update language; confirm featured and OSS cards retain working source/demo links.
