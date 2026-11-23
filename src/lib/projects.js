import { content } from "../content/content.js";

export function getProjectSlugs() {
  return [
    ...content.en.projects.items,
    ...content.en.projects.oss.items,
  ].map((project) => project.slug);
}

export function getProject(slug, lang = "en") {
  const projects = [
    ...content[lang].projects.items,
    ...content[lang].projects.oss.items,
  ];
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) return null;

  return { ...project, ...project.caseStudy };
}
