import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  projects,
  categoryLabels,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/data/projects";
import { generatePageMetadata, generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
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
    description: project.outcome || project.description,
    keywords: project.technologies,
    image: `/${encodeURI(project.image)}`,
    url: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <JsonLd data={generateProjectSchema(project)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Work", url: "/projects" },
          { name: project.title, url: `/projects/${project.slug}` },
        ])}
      />
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-20 pt-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          <header className="mt-8 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {categoryLabels[project.category]}
              {project.completedAt ? ` · ${project.completedAt}` : ""}
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl">{project.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {project.outcome || project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  View live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
                >
                  Source code
                </a>
              )}
            </div>
          </header>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-muted">
            <Image
              src={`/${encodeURI(project.image)}`}
              alt={project.title}
              fill
              priority
              className={`object-cover ${project.imageClass ?? "object-center"}`}
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              {project.caseStudy ? (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-2xl">The problem</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {project.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl">What I did</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {project.caseStudy.role}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl">What shipped</h2>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                      {project.caseStudy.shipped.map((item) => (
                        <li key={item} className="border-t border-border pt-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl">About this project</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {project.longDescription || project.description}
                  </p>
                </>
              )}
            </div>
            <aside className="md:col-span-4 md:col-start-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-16 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="group">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Previous</p>
                <p className="mt-2 inline-flex items-center gap-2 text-lg group-hover:text-primary">
                  <ArrowLeft className="h-4 w-4" />
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`} className="group sm:text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Next</p>
                <p className="mt-2 inline-flex items-center gap-2 text-lg group-hover:text-primary sm:justify-end">
                  {nextProject.title}
                  <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            )}
          </div>

          <section className="mt-16 border-t border-border pt-12">
            <h2 className="text-3xl">Want something in this vein?</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Tell me the problem. I will reply with a scope and a price range.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start a project
              </Link>
              <Link
                href="/rates"
                className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
              >
                See rates
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
