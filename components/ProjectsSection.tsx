import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "@/components/project-card";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectsSectionProps {
  allProjects: Project[];
}

export default function ProjectsSection({ allProjects }: ProjectsSectionProps) {
  const [visibleProjects, setVisibleProjects] = useState(3);
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          title="Selected Projects"
          subtitle="A showcase of my recent work"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        {visibleProjects < allProjects.length && (
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                setVisibleProjects((prev) =>
                  Math.min(prev + 3, allProjects.length)
                )
              }
              className="flex items-center gap-2 mx-auto"
            >
              Load More Projects <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 