
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/data/projects";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Explore my portfolio of web development, mobile apps, and software projects. From e-commerce platforms to custom business solutions.",
  keywords: ["portfolio", "web projects", "mobile apps", "case studies"],
  url: "/projects",
});

const categories = [
  { value: "all", label: "All Projects" },
  { value: "webapp", label: "Web Apps" },
  { value: "website", label: "Websites" },
  { value: "mobile", label: "Mobile" },
  { value: "system", label: "Systems" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={`/${project.image}`}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.featured && (
            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="capitalize text-xs">
            {project.category}
          </Badge>
          {project.completedAt && (
            <span className="text-xs text-muted-foreground">
              {project.completedAt}
            </span>
          )}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h2>
        </Link>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="default">
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          {project.liveUrl && project.liveUrl !== "#" && (
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const allProjects = projects;

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in web development,
              mobile apps, and software engineering.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary">{projects.length}</p>
              <p className="text-sm text-muted-foreground">Total Projects</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary">
                {projects.filter((p) => p.category === "webapp").length}
              </p>
              <p className="text-sm text-muted-foreground">Web Applications</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary">
                {projects.filter((p) => p.category === "website").length}
              </p>
              <p className="text-sm text-muted-foreground">Websites</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary">
                {new Set(projects.flatMap((p) => p.technologies)).size}
              </p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* All Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let&apos;s collaborate and bring your ideas to life with modern
              technology and thoughtful design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/rates">View Pricing</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

