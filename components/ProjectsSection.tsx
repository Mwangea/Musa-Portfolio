"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  slug?: string;
}

interface ProjectsSectionProps {
  allProjects: Project[];
}

export default function ProjectsSection({ allProjects }: ProjectsSectionProps) {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const featuredProjects = allProjects.slice(0, visibleProjects);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work building scalable web and mobile applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug || index}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                slug={project.slug}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {visibleProjects < allProjects.length && (
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                setVisibleProjects((prev) =>
                  Math.min(prev + 3, allProjects.length)
                )
              }
            >
              Load More Projects
            </Button>
          )}
          
          <Button asChild size="lg" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
