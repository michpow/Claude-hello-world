import type { Metadata } from "next";
import HeadshotImage from "@/components/HeadshotImage";


// Metadata = the info that shows up in browser tabs and search engine results.
// Good metadata helps with SEO (Search Engine Optimization) — meaning your
// site shows up higher in Google results.
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Michelle Powell — Director of Product specializing in AI/ML product strategy, 0→1 SaaS platforms, and cross-functional leadership.",
};

const skills = [
  "Product Management",
  "AI/ML Product Strategy",
  "0→1 SaaS Platforms",
  "B2B Marketplace",
  "Cross-Functional Leadership",
  "Data & Analytics",
  "User Experience (UX)",
  "Agile / Scrum",
  "Enterprise SaaS",
  "Global Product Delivery",
];


export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-heading">About Me</h1>

      {/* Bio section — headshot next to a text introduction */}
      <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="shrink-0">
          <HeadshotImage size="sm" />
        </div>
        <div>
          <p className="mb-4 leading-relaxed text-gray">
            I&apos;m a product leader focused on clarity, judgment, and building
            systems that hold up as organizations scale. I care deeply about how
            decisions get made, not just what gets shipped.
          </p>
          <p className="mb-4 leading-relaxed text-gray">
            For years, I&apos;ve been intrigued by how new technology actually
            fits into real workflows and real teams. My work sits at the
            intersection of product strategy, execution, and emerging AI, with a
            focus on what it takes to make new tools work in practice.
          </p>
          <p className="leading-relaxed text-gray">
            I began my career in Pittsburgh, then moved to New York City where I
            worked at Accenture and found my way into product. There, I learned
            the value of speed, high standards, and clear decision-making in
            complex environments. I eventually returned to Pittsburgh, where I
            lead product teams remotely and stay closely connected to the local
            tech and AI community. Outside of work, I&apos;m usually in a
            pottery studio or walking around the city, thinking about where
            creativity and systems overlap.
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

    </div>
  );
}
