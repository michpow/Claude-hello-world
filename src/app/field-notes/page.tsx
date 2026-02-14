import type { Metadata } from "next";
import FieldNoteCard from "@/components/FieldNoteCard";
import { getAllNotes } from "@/lib/field-notes";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Short reflections on product decisions, tradeoffs, and patterns I notice while doing the work.",
};

export default function FieldNotesPage() {
  const notes = getAllNotes();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Field Notes</h1>
      <p className="mb-10 text-gray">
        Short reflections on product decisions, tradeoffs, and patterns I notice while doing the work.
      </p>

      <div className="flex flex-col gap-6">
        {notes.map((note) => (
          <FieldNoteCard key={note.slug} note={note} />
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-center text-gray">
          No field notes yet. Add a .md file to src/content/field-notes/ to get started!
        </p>
      )}
    </div>
  );
}
