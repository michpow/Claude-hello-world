import Link from "next/link";
import HeadshotImage from "./HeadshotImage";

// The hero section is the big, eye-catching area at the top of the home page.
// It's the first thing visitors see, so it should immediately communicate
// who you are and what you do.
export default function HeroSection() {
  return (
    <section className="bg-pink-light">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
        <HeadshotImage size="lg" />

        <h1 className="text-4xl font-bold text-heading md:text-5xl">
          Hi, I&apos;m <span className="text-pink-dark">Michelle</span>
        </h1>

        <p className="text-lg font-medium text-heading">
          director of product | AI &amp; data-driven innovation
        </p>

        <p className="max-w-xl text-lg leading-relaxed text-gray">
          Turning complexity into clarity. I build and scale AI-powered SaaS
          platforms, lead cross-functional product teams, and ship products
          that deliver real business outcomes.
        </p>

        {/* CTA = "Call to Action" — buttons that guide visitors to the
            most important pages on your site */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/experience"
            className="rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
          >
            view experience
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-pink-dark px-6 py-3 text-sm font-medium text-pink-dark transition-colors hover:bg-pink-dark hover:text-white"
          >
            about me
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-gray px-6 py-3 text-sm font-medium text-gray transition-colors hover:border-heading hover:text-heading"
          >
            contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
