import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

// A card that shows a preview of a blog post — used on the blog listing
// page and the home page "Latest Posts" section.
interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="mb-1 text-xs text-gray">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="mb-2 text-lg font-semibold text-heading group-hover:text-pink-dark">
        {post.title}
      </h2>
      <p className="text-sm leading-relaxed text-gray">{post.excerpt}</p>
      <span className="mt-3 inline-block text-sm font-medium text-pink-dark">
        read more &rarr;
      </span>
    </Link>
  );
}
