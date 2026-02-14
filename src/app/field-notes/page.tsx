import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Short reflections on product decisions, tradeoffs, and patterns — written while doing the work.",
};

const fieldNotes = [
  {
    slug: "clarifying-direction",
    title: "Clarifying direction when everything feels urgent",
    context:
      "A product team was moving quickly, with multiple stakeholders pushing for parallel work.",
    tension:
      "Speed mattered, but alignment was fraying. Everyone felt busy, but clarity was slipping.",
    judgment:
      "Instead of adding more process, I focused on tightening intent: what problem we were actually solving, and what we were explicitly not doing yet.",
    learned:
      "Most teams don't need more execution. They need fewer, clearer decisions they can trust.",
  },
];

export default function FieldNotesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Field Notes</h1>
      <p className="mb-10 text-gray">
        Short reflections on product decisions, tradeoffs, and patterns I notice
        while doing the work.
      </p>

      <div className="space-y-10">
        {fieldNotes.map((note) => (
          <article
            key={note.slug}
            className="rounded-xl border border-gray-light bg-white p-6"
          >
            <h2 className="mb-6 text-xl font-bold text-heading">
              {note.title}
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  Context
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {note.context}
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  Tension
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {note.tension}
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  My judgment call
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {note.judgment}
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-pink-dark">
                  What I learned
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {note.learned}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
