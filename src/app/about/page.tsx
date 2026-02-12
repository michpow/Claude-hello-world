import type { Metadata } from "next";
import HeadshotImage from "@/components/HeadshotImage";
import { FiDownload } from "react-icons/fi";

// Metadata = the info that shows up in browser tabs and search engine results.
// Good metadata helps with SEO (Search Engine Optimization) — meaning your
// site shows up higher in Google results.
export const metadata: Metadata = {
  title: "About | Michelle Powell",
  description:
    "Learn more about Michelle — background, skills, and journey into software development.",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

// Timeline milestones — a simple way to show your learning journey
const milestones = [
  {
    date: "Feb 2026",
    title: "Started Learning to Code",
    description: "Began my journey with HTML, CSS, and JavaScript fundamentals.",
  },
  {
    date: "Feb 2026",
    title: "Built This Portfolio",
    description:
      "Created my first real project using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    date: "Coming soon",
    title: "Next Project",
    description: "Stay tuned — more projects are on the way!",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-heading">About Me</h1>

      {/* Bio section — headshot next to a text introduction */}
      <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <HeadshotImage size="sm" />
        <div>
          <p className="mb-4 leading-relaxed text-gray">
            Hi! I&apos;m Michelle, an aspiring software developer passionate
            about building clean, modern web experiences. I&apos;m currently
            learning React, TypeScript, and Next.js — and documenting my
            journey along the way.
          </p>
          <p className="leading-relaxed text-gray">
            This portfolio is both a showcase of what I&apos;m building and a
            project in itself. Every line of code here is part of my learning
            process, and I&apos;m excited to keep growing as a developer.
          </p>
        </div>
      </div>

      {/* Skills — displayed as colorful "badge" pills */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold text-heading">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-pink-light px-4 py-2 text-sm font-medium text-pink-dark"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline — shows your learning milestones */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-heading">My Journey</h2>
        <div className="space-y-6 border-l-2 border-pink-primary/30 pl-6">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="relative">
              {/* The little dot on the timeline line */}
              <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-pink-primary bg-white" />
              <p className="text-xs font-medium text-pink-dark">
                {milestone.date}
              </p>
              <h3 className="font-semibold text-heading">{milestone.title}</h3>
              <p className="text-sm text-gray">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume download */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-heading">Resume</h2>
        <p className="mb-4 text-sm text-gray">
          Download my resume to learn more about my experience and education.
        </p>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
        >
          <FiDownload className="h-4 w-4" />
          Download Resume (PDF)
        </a>
      </section>
    </div>
  );
}
