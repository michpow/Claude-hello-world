import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  // Grab the first 3 projects and first 2 blog posts to preview on the home page
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <div>
      {/* Hero — the big banner at the top with your name and photo */}
      <HeroSection />

      {/* Featured Projects — a preview grid of your work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-heading">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-sm font-medium text-pink-dark hover:underline"
          >
            View all projects &rarr;
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
