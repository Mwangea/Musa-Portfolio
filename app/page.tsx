import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { testimonials } from "@/lib/data/testimonials";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FloatingFact from "@/components/floating-fact";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HashScrollHandler } from "@/components/HashScrollHandler";

export const metadata: Metadata = generatePageMetadata({
  title: "Software Engineer & Full-Stack Developer",
  description:
    "Musa Mwangea is a full-stack software engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web and mobile applications.",
  url: "/",
});

export default function Home() {
  // Transform projects for the section component
  const projectsForSection = projects.map((project) => ({
    title: project.title,
    description: project.description,
    image: project.image,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    slug: project.slug,
  }));

  // Transform testimonials for the section component
  const testimonialsForSection = testimonials.map((t) => ({
    content: t.content,
    author: t.author,
    position: `${t.position}, ${t.company}`,
    image: t.image,
  }));

  return (
    <main className="min-h-screen bg-background">
      <HashScrollHandler />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FloatingFact />
      <ProcessSection />
      <ProjectsSection allProjects={projectsForSection} />
      <TestimonialsSection testimonials={testimonialsForSection} />
      <ContactSection />
      <Footer />
    </main>
  );
}
