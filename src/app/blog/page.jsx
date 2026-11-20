import BlogShell from "@/components/BlogShell";
import BlogIndex from "@/components/BlogIndex";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "What I build, learn and break along the way.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <BlogShell>
      <BlogIndex posts={posts} />
    </BlogShell>
  );
}
