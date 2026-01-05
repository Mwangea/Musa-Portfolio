import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/lib/data/projects";
import { generatePageMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return generatePageMetadata({
      title: "Project Not Found",
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    keywords: project.technologies,
    image: `/${project.image}`,
    url: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const relatedProjects = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.category === project.category ||
          p.technologies.some((tech) => project.technologies.includes(tech)))
    )
    .slice(0, 3);

  return (
    <>
      <JsonLd data={generateProjectSchema(project)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
          { name: project.title, url: `/projects/${project.slug}` },
        ])}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium truncate max-w-[200px]">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">
                {project.category}
              </Badge>
              {project.completedAt && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.completedAt}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>
          </header>

          {/* Project Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-border">
            <Image
              src={`/${project.image}`}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild className="w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Site
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-between items-center py-8 border-t border-border">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Previous</p>
                  <p className="font-medium">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 hover:text-primary transition-colors text-right"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Next</p>
                  <p className="font-medium">{nextProject.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="pt-12 border-t border-border">
              <h2 className="text-2xl font-semibold mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/projects/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3 border border-border">
                      <Image
                        src={`/${related.image}`}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 text-center bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/rates">View My Rates</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

