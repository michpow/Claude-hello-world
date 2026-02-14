import type { Metadata } from "next";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Michelle Powell's career experience — from management consulting to Director of Product at Transfix.",
};

const experience = [
  {
    company: "Transfix",
    title: "Director of Product Management",
    period: "Nov 2021 – Present",
    progression: "PM → Senior PM → Group PM → Director",
    bullets: [
      "Lead Product Management, Product Design, and Product Support across a 0→1 SaaS product suite for freight broker and 3PL customers",
      "Drive AI/ML predictive pricing models and workflow products that balance automation with human judgment",
      "Grew SaaS platform usage by 6,000% and onboarded first enterprise customer",
      "Shipped 4.8-star mobile apps and supported a successful funding round",
      "Promoted three times in under three years based on scope expansion and impact",
    ],
  },
  {
    company: "Marsh",
    title: "Product Manager",
    period: "Aug 2018 – Oct 2021",
    bullets: [
      "Built insurance analytics products on a scalable data and reporting platform leveraging AI/ML and actuarial science",
      "Delivered insurtech solutions for high-profile ecommerce, logistics, and payments companies globally",
      "Managed product delivery across North America, Europe, and Asia for enterprise clients",
    ],
  },
  {
    company: "Accenture",
    title: "Management Consultant",
    period: "Jul 2016 – Jul 2018",
    bullets: [
      "Advised Fortune 500 clients on digital transformation and automation strategy",
      "Led post-acquisition integration across 12 cross-functional teams",
      "Spearheaded an NLP/OCR project that reduced underwriting cycle time by 60+ days",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold text-heading">Experience</h1>

      <div className="mb-10">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm font-medium text-pink-dark hover:underline"
        >
          <FiDownload className="h-4 w-4" />
          download resume (pdf)
        </Link>
      </div>

      <div className="space-y-12">
        {experience.map((role) => (
          <div key={role.company}>
            <h2 className="text-xl font-bold text-heading">{role.company}</h2>
            <p className="mt-1 font-medium text-heading">{role.title}</p>
            {role.progression && (
              <p className="text-sm text-gray">{role.progression}</p>
            )}
            <p className="text-sm text-gray">{role.period}</p>
            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-dark" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm font-medium text-pink-dark hover:underline"
        >
          <FiDownload className="h-4 w-4" />
          download resume (pdf)
        </Link>
      </div>
    </div>
  );
}
