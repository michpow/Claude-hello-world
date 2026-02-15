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
        My path into product wasn&apos;t linear. I started working inside
        complex systems, then gradually moved closer to product and leadership.
        Along the way, I learned how much clarity, context, and judgment matter
        when things get messy.
      </p>

      {/* Work */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-heading">Work</h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">Volunteering</h2>
        <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm dark:bg-dark-surface">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-heading">AI@Work PGH</h3>
              <p className="text-sm text-gray">Jan 2026 – Present</p>
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
            Community creator for Pittsburgh&apos;s AI builder community, connecting local professionals, developers, and enthusiasts to explore and build with AI.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark">
              Pittsburgh
            </span>
            <span className="rounded-full bg-pink-light px-2.5 py-0.5 text-xs font-medium text-pink-dark">
              Community Building
            </span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">Education</h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm dark:bg-dark-surface">
            <h3 className="text-xl font-bold text-heading">
              Master of Business Administration
            </h3>
            <p className="mt-1 text-sm text-gray">
              University of Pittsburgh School of Business
            </p>
            <p className="mt-1 text-xs italic text-gray">
              Dean&apos;s List · Completed while working full-time
            </p>
          </div>
          <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm dark:bg-dark-surface">
            <h3 className="text-xl font-bold text-heading">Bachelor of Arts</h3>
            <p className="mt-1 text-sm text-gray">University of Pittsburgh</p>
            <p className="mt-1 text-xs italic text-gray">
              English Literature, Minor in Theatre Arts
            </p>
          </div>
          <div className="rounded-xl border border-gray-light bg-white p-6 shadow-sm dark:bg-dark-surface">
            <h3 className="text-lg font-bold text-heading">Certifications</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray">
              <li>Project Management</li>
              <li>Global Supply Chain Management</li>
              <li>Certified Scrum Product Owner (CSPO)</li>
              <li>Six Sigma Green Belt</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
