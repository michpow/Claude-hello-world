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
            I&apos;m a product leader with deep experience driving strategy and
            delivery for SaaS and AI products. I lead product management,
            product design, and product support teams — shipping web and mobile
            applications that solve meaningful problems and deliver sustainable
            business outcomes.
          </p>
          <p className="leading-relaxed text-gray">
            My approach balances strategy, clarity, and empathy — grounding
            decisions in user insight and business context. I&apos;ve worked in
            global enterprise environments and fast-paced startups, from
            building 0→1 platforms and scaling recurring revenue to leading
            product strategy across North America, Europe, and Asia.
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
