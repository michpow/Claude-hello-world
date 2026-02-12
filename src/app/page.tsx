import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-pink-light">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
          {/* Headshot placeholder */}
          <div className="h-32 w-32 rounded-full bg-pink-primary/30 ring-4 ring-pink-primary/20" />
          <h1 className="text-4xl font-bold text-heading md:text-5xl">
            Hi, I&apos;m <span className="text-pink-dark">Michelle</span>
          </h1>
          <p className="max-w-xl text-lg text-gray">
            Aspiring developer learning to build beautiful things for the web.
            Welcome to my corner of the internet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-pink-dark px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-medium"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-pink-dark px-6 py-3 text-sm font-medium text-pink-dark transition-colors hover:bg-pink-dark hover:text-white"
            >
              Read Blog
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray px-6 py-3 text-sm font-medium text-gray transition-colors hover:border-heading hover:text-heading"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 h-36 rounded-lg bg-gray-light" />
              <h3 className="mb-2 font-semibold text-heading">Project {i}</h3>
              <p className="text-sm text-gray">
                A short description of this project and what it does.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-sm font-medium text-pink-dark hover:underline">
            View all projects &rarr;
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="bg-pink-light/50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold text-heading">Latest Blog Posts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="mb-2 text-xs text-gray">February {i + 10}, 2026</p>
                <h3 className="mb-2 font-semibold text-heading">Blog Post Title {i}</h3>
                <p className="text-sm text-gray">
                  A preview of what this blog post is about...
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-sm font-medium text-pink-dark hover:underline">
              Read all posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
