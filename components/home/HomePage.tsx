import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import {
  categoryLabels,
  getSelectedProjects,
} from "@/lib/data/projects";

const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

const shortTitles: Record<string, string> = {
  "atlas-blockchain-land-due-diligence": "Atlas",
  "ping-waiter-digital-waiter-system": "PingWaiter",
  "twende-rides-car-hire": "Twende Rides",
  "oltukai-mara-camp": "Oltukai Mara Camp",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

export default function HomePage() {
  const selected = getSelectedProjects();

  return (
    <>
      <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Nairobi · Available for projects</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
              I build websites and systems your business can rely on.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            From business websites to web applications and internal systems, I take projects from the initial brief through development to a live, working product.            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                See the work
              </Link>
              <Link
                href="/rates"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent"
              >
                See rates
              </Link>
              {/* <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Message on WhatsApp
              </a> */}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:ml-auto">
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-primary/40" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src="/MUSA (2).png"
                  alt={`${siteConfig.name}, developer based in Nairobi`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 360px"
                />
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm lg:ml-auto lg:max-w-sm">
              <div>
                <dt className="text-muted-foreground">Experience</dt>
                <dd className="mt-1 font-medium">{siteConfig.experience} years</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-medium">{siteConfig.location.city}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 text-4xl md:text-5xl">Live products, not mockups.</h2>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              All projects
            </Link>
          </div>

          <div className="mt-14 space-y-16 md:space-y-24">
            {selected.map((project, index) => (
              <article
                key={project.slug}
                className="grid items-center gap-8 lg:grid-cols-12"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group relative block aspect-[16/10] overflow-hidden bg-muted lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={`/${encodeURI(project.image)}`}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.imageClass ?? "object-center"} transition-transform duration-500 group-hover:scale-[1.03]`}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </Link>
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                    <span className="mx-2">·</span>
                    {categoryLabels[project.category]}
                    {project.completedAt ? ` · ${project.completedAt}` : ""}
                  </p>
                  <h3 className="mt-3 text-3xl md:text-4xl">
                    <Link href={`/projects/${project.slug}`} className="hover:text-primary">
                      {shortTitles[project.slug] || project.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {project.outcome || project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 font-medium hover:text-primary"
                    >
                      Project details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        Live site
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>What I build</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl">A price range before we start.</h2>
            <p className="mt-4 text-muted-foreground">
              Final quotes depend on scope. These are the bands most projects fall into.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {services.map((category) => (
              <div key={category.slug} className="bg-background p-6 md:p-8">
                <h3 className="text-2xl capitalize">
                  {category.category.toLowerCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {category.options.map((option) => (
                    <li key={option.name} className="border-t border-border pt-4">
                      <p className="font-medium">{option.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">KES {option.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/rates"
            className="mt-8 inline-flex text-sm font-medium text-primary hover:underline"
          >
            Full rates and what is included
          </Link>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Clients</Eyebrow>
          <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">What it is like to work together.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.id}>
                <blockquote className="text-lg leading-relaxed">
                  “{item.content}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{item.author}</span>
                  <span className="mt-1 block">
                    {item.position}, {item.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-3 text-4xl">A builder you can brief.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              I work with founders and operators who need something shipped: a booking site,
              an ordering system, a record that used to live on paper. Most projects run from
              a few weeks to a couple of months, with a written scope before I start.
            </p>
            <p>
              I&apos;m based in {siteConfig.location.city} and work with clients remotely.
              If you have a brief, send it. If you only have a problem, that is enough to start.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
