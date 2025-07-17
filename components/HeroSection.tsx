/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ChevronDown, Send, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  text: string;
  roleText: string;
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ text, roleText, scrollToSection }: HeroSectionProps) {
  return (
    <section className="min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-stretch pt-40 pb-24 px-6">
      {/* Text content */}
      <div className="flex-1 flex flex-col justify-center items-start md:pr-16 mt-8 md:mt-0">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
          Available for work
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {text}
          <span className="inline-block w-[3px] h-12 bg-primary animate-blink"></span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {roleText}
          </span>
          <span className="inline-block w-[3px] h-6 bg-primary animate-blink"></span>
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          I craft digital experiences that merge innovative technology
          with intuitive design to solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2"
          >
            View My Work <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2"
          >
            Contact Me <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/mwangea"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group-hover:bg-primary/10"
              >
                <Github className="h-5 w-5 group-hover:text-primary" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/musa-mwangea-00b6b726b"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group-hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary" />
              </Button>
            </a>
            <a
              href="https://twitter.com/_mwangea"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group-hover:bg-primary/10"
              >
                <Twitter className="h-5 w-5 group-hover:text-primary" />
              </Button>
            </a>
            <a href="mailto:mwangeamusa@gmail.com" className="group">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full group-hover:bg-primary/10"
              >
                <Mail className="h-5 w-5 group-hover:text-primary" />
              </Button>
            </a>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
          <div className="text-sm text-muted-foreground">
            Based in Kenya
          </div>
        </div>
      </div>
      {/* Image with gradient overlay on the right */}
      <div className="relative flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="relative w-full h-full max-h-[500px] md:max-h-[600px] flex items-center justify-center">
          <img
            src="musaa.jpg"
            alt="Musa Mwangea"
            className="object-cover w-full h-full rounded-r-3xl"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
          {/* Gradient overlay: left to right, white in light mode (subtle), black in dark mode (stronger) */}
          <div className="absolute inset-0 pointer-events-none rounded-r-3xl bg-gradient-to-r from-white/40 to-transparent dark:from-black/95 dark:to-transparent" />
        </div>
      </div>
    </section>
  );
} 