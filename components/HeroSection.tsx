"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Mail, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = `Hi, I'm ${siteConfig.name}`;
  const roles = siteConfig.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const typeText = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, [fullText]);

  useEffect(() => {
    if (!mounted) return;
    const typeRole = () => {
      const currentRole = roles[roleIndex];
      let index = 0;
      const type = () => {
        if (index <= currentRole.length) {
          setRoleText(currentRole.slice(0, index));
          index++;
          setTimeout(type, 100);
        } else {
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setRoleText("");
          }, 2000);
        }
      };
      type();
    };
    typeRole();
  }, [mounted, roleIndex, roles]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6"
      aria-label="Hero section"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {mounted ? (
                  <>
                    {text}
                    <span className="inline-block w-[3px] h-12 bg-primary animate-blink ml-2" aria-hidden="true" />
                  </>
                ) : (
                  `Hi, I'm ${siteConfig.name}`
                )}
              </h1>
              
              <div className="h-12 flex items-center">
                {mounted ? (
                  <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {roleText}
                    </span>
                    <span className="inline-block w-[3px] h-8 bg-primary animate-blink ml-2" aria-hidden="true" />
                  </p>
                ) : (
                  <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {siteConfig.roles[0]}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I craft digital experiences that merge innovative technology
              with intuitive design to solve real-world problems.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{siteConfig.experience} Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{siteConfig.location.city}, {siteConfig.location.country}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group px-8"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-3">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href={`mailto:${siteConfig.links.email}`}
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                <Image
                  src="/musaa.jpg"
                  alt={`${siteConfig.name} - Software Engineer`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
