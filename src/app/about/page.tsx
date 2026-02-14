import type { Metadata } from "next";
import HeadshotImage from "@/components/HeadshotImage";
import { FiDownload } from "react-icons/fi";

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

// Career milestones
const milestones = [
  {
    date: "2024 – Present",
    title: "Director of Product — Transfix",
    description:
      "Leading Product Management, Product Design, and Product Support for a 0→1 SaaS product suite. Driving AI/ML predictive pricing and workflow products for freight broker and 3PL customers.",
  },
  {
    date: "2021 – 2024",
    title: "PM → Senior PM → Group PM — Transfix",
    description:
      "Promoted three times in under three years. Grew SaaS usage by 6,000%, onboarded first enterprise customer, shipped 4.8-star mobile apps, and supported a successful funding round.",
  },
  {
    date: "2018 – 2021",
    title: "Product Manager — Marsh",
    description:
      "Built insurance analytics products on a scalable data platform, leveraging AI/ML and actuarial science. Delivered insurtech solutions for global enterprise clients across North America, Europe, and Asia.",
  },
  {
    date: "2016 – 2018",
    title: "Management Consultant — Accenture",
    description:
      "Advised Fortune 500 clients on digital transformation and automation. Led post-acquisition integration across 12 cross-functional teams. Spearheaded an NLP/OCR project that reduced underwriting cycle time by 60+ days.",
  },
  {
    date: "2015 – 2016",
    title: "Strategic Sourcing Analyst — Giant Eagle",
    description:
      "Developed data-driven sourcing strategies to optimize vendor selection and reduce costs across IT categories for 400+ retail locations.",
  },
  {
    date: "2013 – 2016",
    title: "MBA — University of Pittsburgh (Part-Time)",
    description:
      "Earned an MBA while working full-time, building expertise in strategy, finance, and operations management.",
  },
  {
    date: "2012 – 2015",
    title: "Department Administrator — University of Pittsburgh",
    description:
      "Managed operations for academic departments in higher education and dental medicine, gaining deep domain experience in both sectors.",
  },
  {
    date: "2008 – 2012",
    title: "B.A., English Literature — University of Pittsburgh",
    description:
      "Studied English Literature with a focus on cultural criticism and humor theory. Selected to present at a competitive literature conference for a paper on working-class humor in England — from Shakespeare's A Midsummer Night's Dream to Ricky Gervais's The Office. Also worked as a Writing Center tutor, coaching peers on academic writing and critical analysis.",
  },
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

      {/* Timeline — career & education milestones */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-heading">Career &amp; Education</h2>
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
