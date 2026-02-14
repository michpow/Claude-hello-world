import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ComplexityToClarity from "@/components/ComplexityToClarity";
import FieldNoteCard from "@/components/FieldNoteCard";
import { getAllNotes } from "@/lib/field-notes";

export default function Home() {
  const latestNotes = getAllNotes().slice(0, 2);

  return (
    <div>
      {/* Hero — the big banner at the top with your name and photo */}
      <HeroSection />

      {/* Interactive squiggly-to-straight line animation */}
      <ComplexityToClarity />

      {/* Latest Field Notes — shows your most recent writing */}
      <section className="bg-pink-light/50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold text-heading">
            Latest Field Notes
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {latestNotes.map((note) => (
              <FieldNoteCard key={note.slug} note={note} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/field-notes"
              className="text-sm font-medium text-pink-dark hover:underline"
            >
              Read all notes &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
