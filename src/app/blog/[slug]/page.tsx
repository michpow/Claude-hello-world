import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

// generateStaticParams tells Next.js which blog post URLs to pre-build.
// It reads all your .md files and creates a page for each one at build time.
// This is called "Static Site Generation" (SSG) — it makes your site super fast
// because the pages are pre-built HTML rather than generated on every visit.
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata — sets the browser tab title to the post title
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // If no .md file matches this URL, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-pink-dark hover:underline"
      >
        &larr; Back to blog
      </Link>

      <article>
        <p className="mb-2 text-sm text-gray">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mb-8 text-3xl font-bold text-heading">{post.title}</h1>

        {/* MDXRemote renders the markdown content as HTML.
            The "prose-custom" class styles headings, paragraphs, lists, code blocks, etc.
            so you don't have to add Tailwind classes to your markdown. */}
        <div className="prose-custom">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
