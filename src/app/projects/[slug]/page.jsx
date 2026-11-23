import { notFound } from "next/navigation";
import BlogShell from "@/components/BlogShell";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProject, getProjectSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const canonical = `/projects/${project.slug}`;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  if (!getProject(slug)) notFound();

  return (
    <BlogShell>
      <ProjectCaseStudy slug={slug} />
    </BlogShell>
  );
}
