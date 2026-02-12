import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience",
  description: "Michelle Powell's career experience — from management consulting to Director of Product at Transfix.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Experience</h1>
      <p className="mb-10 text-gray">
        From consulting at Accenture to building AI-powered SaaS products at
        Transfix — here&apos;s my career journey.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}
