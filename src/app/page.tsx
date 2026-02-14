import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Things I'm especially good at */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-6 text-lg font-bold lowercase text-heading">
          things i&apos;m especially good at
        </h2>
        <ul className="space-y-3 text-gray">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Clarifying tradeoffs when everything feels urgent
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Aligning teams around intent, not just output
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Designing systems that hold up under scale and change
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
            Bridging product, engineering, data, and business perspectives
          </li>
        </ul>
      </section>

      {/* Experience teaser */}
      <section className="bg-pink-light/50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-6 max-w-2xl leading-relaxed text-gray">
            I&apos;ve spent my career working across logistics, SaaS, and
            data-heavy products, often in environments undergoing change. My work
            spans early product definition through scaling, with a focus on
            clarity, decision-making, and long-term impact.
          </p>
          <Link
            href="/experience"
            className="text-sm font-medium text-pink-dark hover:underline"
          >
            view experience &rarr;
          </Link>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-lg font-bold lowercase text-heading">
          selected work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-light bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-heading">
              Turning an evolving pricing model into a human-in-the-loop product
            </h3>
            <p className="text-sm text-gray">
              Balancing automation with human judgment in a fast-moving freight
              pricing environment.
            </p>
          </div>
          <div className="rounded-xl border border-gray-light bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-heading">
              Resetting product direction during rapid organizational change
            </h3>
            <p className="text-sm text-gray">
              Finding clarity and alignment when the team, strategy, and market
              were all shifting at once.
            </p>
          </div>
          <div className="rounded-xl border border-gray-light bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 font-semibold text-heading">
              Designing workflows that balance speed with reliability
            </h3>
            <p className="text-sm text-gray">
              Building operational systems that hold up under pressure without
              sacrificing quality.
            </p>
          </div>
        </div>
      </section>

      {/* AI @ Work */}
      <section className="border-t border-gray-light">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-6 text-lg font-bold lowercase text-heading">
            ai @ work
          </h2>
          <p className="mb-6 max-w-2xl leading-relaxed text-gray">
            I&apos;m a board member and frequent host with AI@Work Pittsburgh, a
            community focused on practical, cross-disciplinary conversations
            about AI in the real world.
          </p>
          <ul className="mb-6 space-y-3 text-gray">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
              Facilitate conversations between product, engineering, GTM, and
              leadership
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
              Help translate technical AI concepts into business and product
              decisions
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
              Focus on practical adoption, not hype
            </li>
          </ul>
          <a
            href="https://aiatworkpgh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pink-dark hover:underline"
          >
            aiatworkpgh.com
            <FiExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
