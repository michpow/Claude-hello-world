import Link from "next/link";
import HeadshotImage from "./HeadshotImage";

// The hero section is the big, eye-catching area at the top of the home page.
// It's the first thing visitors see, so it should immediately communicate
// who you are and what you do.
export default function HeroSection() {
  return (
    <section className="bg-pink-light">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center md:py-24">
        <HeadshotImage size="lg" />

        <h1 className="text-4xl font-bold text-heading md:text-5xl">
          Hi, I&apos;m <span className="text-pink-dark">Michelle</span>
        </h1>

        <p className="text-lg font-medium text-heading">
          Director of Product | Community Builder
        </p>

        <p className="max-w-xl text-lg leading-relaxed text-gray">
          Turning complexity into clarity. I build and scale AI-powered SaaS
          platforms, lead cross-functional product teams, and ship products
          that deliver real business outcomes.
        </p>

        <p className="text-md italic text-gray">
          Currently leading Product, Design, and Support at Transfix, a
          NYC-based freight-tech startup.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
