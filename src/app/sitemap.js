import { getAllPosts } from "@/lib/posts";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `https://fabisiak.dev/blog/${post.slug}`,
    lastModified: post.date,
  }));
  const projects = getProjectSlugs().map((slug) => ({
    url: `https://fabisiak.dev/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://fabisiak.dev", lastModified: new Date() },
    { url: "https://fabisiak.dev/blog", lastModified: new Date() },
    ...posts,
    ...projects,
  ];
}
