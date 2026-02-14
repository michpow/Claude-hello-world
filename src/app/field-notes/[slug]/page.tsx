import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNotes, getNoteBySlug } from "@/lib/field-notes";

// generateStaticParams tells Next.js which field note URLs to pre-build.
// It reads all your .md files and creates a page for each one at build time.
export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

// Dynamic metadata — sets the browser tab title to the note title
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return { title: "Note Not Found" };

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function FieldNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  // If no .md file matches this URL, show a 404 page
  if (!note) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/field-notes"
        className="mb-8 inline-block text-sm text-pink-dark hover:underline"
      >
        &larr; Back to field notes
      </Link>

      <article>
        <p className="mb-2 text-sm text-gray">
          {new Date(note.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mb-8 text-3xl font-bold text-heading">{note.title}</h1>

        {/* MDXRemote renders the markdown content as HTML.
            The "prose-custom" class styles headings, paragraphs, lists, code blocks, etc.
            so you don't have to add Tailwind classes to your markdown. */}
        <div className="prose-custom">
          <MDXRemote source={note.content} />
        </div>
      </article>
    </div>
  );
}
