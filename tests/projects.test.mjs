import test from "node:test";
import assert from "node:assert/strict";
import { content } from "../src/content/content.js";

const featuredSlugs = [
  "pendencia",
  "naia",
  "vianova",
  "onda",
  "curriculos",
  "rust-pathtracer",
  "fio",
  "aimongus",
];

for (const locale of ["pt", "en"]) {
  test(`${locale} has complete case studies for all featured projects`, () => {
    const projects = content[locale].projects.items;
    const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

    for (const slug of featuredSlugs) {
      const project = projectsBySlug.get(slug);
      assert.ok(project, `missing featured project "${slug}" in ${locale}`);
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
