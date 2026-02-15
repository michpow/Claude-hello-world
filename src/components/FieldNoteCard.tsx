import Link from "next/link";
import type { FieldNote } from "@/lib/field-notes";

// A card that shows a preview of a field note — used on the field notes listing
// page and the home page "Latest Field Notes" section.
interface FieldNoteCardProps {
  note: FieldNote;
}

export default function FieldNoteCard({ note }: FieldNoteCardProps) {
  return (
    <Link
      href={`/field-notes/${note.slug}`}
      className="group rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-dark-surface"
    >
      <p className="mb-1 text-xs text-gray">
        {new Date(note.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h2 className="mb-2 text-lg font-semibold text-heading group-hover:text-pink-dark">
        {note.title}
      </h2>
      <p className="text-sm leading-relaxed text-gray">{note.excerpt}</p>
      <span className="mt-3 inline-block text-sm font-medium text-pink-dark">
        Read more &rarr;
      </span>
    </Link>
  );
}
