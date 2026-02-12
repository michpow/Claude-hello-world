import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Michelle Powell",
  description: "Learn more about Michelle — background, skills, and journey into software development.",
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

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Heading */}
      <h1 className="mb-8 text-3xl font-bold text-heading">About Me</h1>

      {/* Bio section with headshot placeholder */}
      <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="h-48 w-48 shrink-0 rounded-full bg-pink-primary/30 ring-4 ring-pink-primary/20" />
        <div>
          <p className="mb-4 text-gray leading-relaxed">
            Hi! I&apos;m Michelle, an aspiring software developer passionate about building
            clean, modern web experiences. I&apos;m currently learning React, TypeScript, and
            Next.js — and documenting my journey along the way.
          </p>
          <p className="text-gray leading-relaxed">
            This portfolio is both a showcase of what I&apos;m building and a project in itself.
            Every line of code here is part of my learning process, and I&apos;m excited to
            keep growing as a developer.
          </p>
        </div>
      </div>

      {/* Skills */}
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

      {/* Resume download placeholder */}
      <section>
        <h2 className="mb-4 text-xl font-bold text-heading">Resume</h2>
        <p className="mb-4 text-sm text-gray">
          Download my resume to learn more about my experience and education.
        </p>
        <a
          href="/resume.pdf"
          className="inline-block rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
        >
          Download Resume (PDF)
        </a>
      </section>
    </div>
  );
}
