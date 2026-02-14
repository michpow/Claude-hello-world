import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Experience",
  description: "Michelle Powell's career experience — from management consulting to Director of Product at Transfix.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Experience</h1>
      <p className="mb-10 text-gray">
        From consulting at Accenture to building AI-powered SaaS products at
        Transfix — here&apos;s my career journey.
      </p>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>

      {/* Volunteering */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">Volunteering</h2>
        <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-heading">AI@Work PGH</h3>
              <p className="text-sm text-gray">Jan 2025 – Present</p>
            </div>
            <a
              href="https://www.aiatworkpgh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-pink-dark hover:underline"
            >
              <FiExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-2 text-xs font-medium text-pink-dark">Board Member</p>
          <p className="mt-2 text-sm leading-relaxed text-gray">
            Community creator for Pittsburgh&apos;s AI builder community — connecting local professionals, developers, and enthusiasts to explore and build with AI.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark">
              AI Community
            </span>
            <span className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark">
              Pittsburgh
            </span>
            <span className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark">
              Community Building
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
