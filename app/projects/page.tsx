import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, categoryLabels } from "@/lib/data/projects";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Selected websites, web apps, and business systems designed and built by Musa Mwangea.",
  keywords: ["portfolio", "web projects", "business systems", "case studies"],
  url: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Work", url: "/projects" },
        ])}
      />
      <Navbar />
      <main className="min-h-screen bg-background px-6 pb-20 pt-28">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Work</p>
            <h1 className="mt-3 text-5xl md:text-6xl">Projects that shipped.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Sites, products, and internal systems. Each one is live, or was built for a client who is using it.
            </p>
          </header>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div
                    className={`relative overflow-hidden bg-muted ${
                      index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={`/${encodeURI(project.image)}`}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.imageClass ?? "object-center"} transition-transform duration-500 group-hover:scale-[1.03]`}
                      sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {categoryLabels[project.category]}
                        {project.completedAt ? ` · ${project.completedAt}` : ""}
                      </p>
                      <h2 className="mt-2 text-2xl group-hover:text-primary md:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <ArrowUpRight className="mt-6 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.outcome || project.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-20 border-t border-border pt-12">
            <h2 className="text-3xl md:text-4xl">Have a project in mind?</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Send a brief and I will come back with a scope and a price range.
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
