import test from "node:test";
import assert from "node:assert/strict";
import { content } from "../src/content/content.js";
import { getProject, getProjectSlugs } from "../src/lib/projects.js";

const expectedSlugs = [
  "pendencia",
  "naia",
  "vianova",
  "onda",
  "curriculos",
  "rust-pathtracer",
  "fio",
  "aimongus",
  "anondrop",
  "bananagit",
  "singr",
  "cdn",
  "url-shortener",
];

const getProjects = (locale) => [
  ...content[locale].projects.items,
  ...content[locale].projects.oss.items,
];

for (const locale of ["pt", "en"]) {
  test(`${locale} has complete case studies for all projects`, () => {
    const projects = getProjects(locale);
    const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

    assert.deepEqual(
      projects.map((project) => project.slug),
      expectedSlugs,
      `unexpected project slugs in ${locale}`,
    );
    assert.equal(projectsBySlug.size, expectedSlugs.length, `duplicate project slugs in ${locale}`);

    for (const slug of expectedSlugs) {
      const project = projectsBySlug.get(slug);
      assert.ok(project, `missing project "${slug}" in ${locale}`);
      assert.ok(project.category?.trim(), `${slug} is missing a category in ${locale}`);

      for (const field of ["problem", "approach", "outcome"]) {
        assert.ok(
          project.caseStudy?.[field]?.trim(),
          `${slug} is missing caseStudy.${field} in ${locale}`,
        );
      }

      assert.ok(
        Array.isArray(project.caseStudy?.decisions) && project.caseStudy.decisions.length > 0,
        `${slug} is missing case-study decisions in ${locale}`,
      );

      for (const decision of project.caseStudy.decisions) {
        assert.ok(decision.title?.trim(), `${slug} has a decision without a title in ${locale}`);
        assert.ok(
          decision.description?.trim(),
          `${slug} has a decision without a description in ${locale}`,
        );
      }
    }
  });
}

test("Portuguese and English expose the same project slugs", () => {
  assert.deepEqual(
    getProjects("pt").map((project) => project.slug),
    getProjects("en").map((project) => project.slug),
  );
});

test("getProjectSlugs returns the 13 unique project slugs", () => {
  const slugs = getProjectSlugs();

  assert.deepEqual(slugs, expectedSlugs);
  assert.equal(new Set(slugs).size, 13);
});

test("getProject returns localized, merged case-study content", () => {
  const portugueseProject = getProject("pendencia", "pt");
  const englishProject = getProject("pendencia", "en");

  assert.equal(portugueseProject.name, "Pendência");
  assert.equal(portugueseProject.category, content.pt.projects.items[0].category);
  assert.equal(portugueseProject.link, content.pt.projects.items[0].link);
  assert.equal(portugueseProject.problem, content.pt.projects.items[0].caseStudy.problem);
  assert.deepEqual(portugueseProject.decisions, content.pt.projects.items[0].caseStudy.decisions);

  assert.equal(englishProject.name, "Pendência");
  assert.equal(englishProject.category, content.en.projects.items[0].category);
  assert.equal(englishProject.link, content.en.projects.items[0].link);
  assert.equal(englishProject.problem, content.en.projects.items[0].caseStudy.problem);
  assert.deepEqual(englishProject.decisions, content.en.projects.items[0].caseStudy.decisions);
  assert.notEqual(portugueseProject.problem, englishProject.problem);
});

test("getProject returns null for an unknown slug", () => {
  assert.equal(getProject("not-a-project"), null);
});

test("every OSS project has a repository URL label in both locales", () => {
  for (const locale of ["pt", "en"]) {
    for (const project of content[locale].projects.oss.items) {
      assert.ok(
        project.linkLabel?.trim(),
        `${project.slug} is missing a repository URL label in ${locale}`,
      );
    }
  }
});

test("both locales define the case-study path and return labels", () => {
  assert.equal(content.pt.projects.projectsPath, "~/projects");
  assert.equal(content.en.projects.projectsPath, "~/projects");
  assert.equal(content.pt.projects.backToProjects, "Voltar aos projetos");
  assert.equal(content.en.projects.backToProjects, "Back to projects");
});
