import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Michelle Powell",
  description: "Thoughts, tutorials, and notes from my journey learning web development.",
};

// Placeholder posts — will be replaced with real markdown-powered posts in Phase 4
const posts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    date: "February 12, 2026",
    excerpt: "Welcome to my blog! I'm starting my journey into web development and documenting everything I learn along the way.",
  },
  {
    slug: "learning-to-code",
    title: "Why I'm Learning to Code",
    date: "February 11, 2026",
    excerpt: "A look at what motivated me to start learning software development, and what I hope to build.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Blog</h1>
      <p className="mb-10 text-gray">
        Thoughts, tutorials, and notes from my coding journey.
      </p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="mb-1 text-xs text-gray">{post.date}</p>
            <h2 className="mb-2 text-lg font-semibold text-heading group-hover:text-pink-dark">
              {post.title}
            </h2>
            <p className="text-sm text-gray leading-relaxed">{post.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-medium text-pink-dark">
              Read more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
