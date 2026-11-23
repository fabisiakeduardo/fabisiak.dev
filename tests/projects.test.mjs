import test from "node:test";
import assert from "node:assert/strict";
import { content } from "../src/content/content.js";

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
