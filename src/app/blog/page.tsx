import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on product management, AI/ML, and building great product teams.",
};

// This page reads all .md files from src/content/blog/ and displays them.
// To add a new post, just create a new .md file in that folder —
// no code changes needed!
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">blog</h1>
      <p className="mb-10 text-gray">
        Thoughts on product management, AI/ML, and building great teams.
      </p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray">
          No blog posts yet. Add a .md file to src/content/blog/ to get started!
        </p>
      )}
    </div>
  );
}
