import Link from "next/link";

// Placeholder blog post page — will be replaced with markdown rendering in Phase 4
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-pink-dark hover:underline"
      >
        &larr; Back to blog
      </Link>

      <article>
        <p className="mb-2 text-sm text-gray">February 12, 2026</p>
        <h1 className="mb-6 text-3xl font-bold text-heading">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <div className="prose prose-gray max-w-none leading-relaxed text-dark">
          <p>
            This is a placeholder blog post for <strong>&ldquo;{slug}&rdquo;</strong>.
            In Phase 4, this page will automatically render the contents of a markdown
            file from the <code>src/content/blog/</code> folder.
          </p>
          <p className="mt-4">
            Stay tuned — the markdown-powered blog system is coming soon!
          </p>
        </div>
      </article>
    </div>
  );
}
