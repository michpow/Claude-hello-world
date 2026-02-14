import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Michelle Powell — a product leader who values clarity, thoughtful decision-making, and building things that last.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-heading">About</h1>

      <div className="mb-12 space-y-6">
        <p className="leading-relaxed text-gray">
          I&apos;m a product leader who values clarity, thoughtful
          decision-making, and building things that last.
        </p>
        <p className="leading-relaxed text-gray">
          I tend to be calm, direct, and systems-oriented — especially in
          ambiguous environments. I&apos;ve spent my career working across
          logistics, SaaS, insurance, and consulting, often joining teams during
          periods of change and helping them find focus.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-lg font-bold lowercase text-heading">
          how i lead
        </h2>
        <ul className="space-y-3 text-gray">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Clarity over noise
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Judgment over volume
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Systems over heroics
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Progress that compounds
          </li>
        </ul>
      </section>
    </div>
  );
}
