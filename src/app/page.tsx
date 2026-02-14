import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ExperienceCard from "@/components/ExperienceCard";
import BlogPostCard from "@/components/BlogPostCard";
import { experiences } from "@/data/experiences";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  // Show the first 2 companies and first 2 blog posts on the home page
  const featuredExperience = experiences.slice(0, 2);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <div>
      {/* Hero — the big banner at the top with your name and photo */}
      <HeroSection />

      {/* Experience Highlights — a preview of career roles */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">
          Experience Highlights
        </h2>
        <div className="space-y-8">
          {featuredExperience.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/experience"
            className="text-sm font-medium text-pink-dark hover:underline"
          >
            View full experience &rarr;
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts — shows your most recent writing */}
      <section className="bg-pink-light/50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold text-heading">
            Latest Blog Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-pink-dark hover:underline"
            >
              Read all posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
