/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Calendar,
  MapPin,
  Send,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";
import { Quote } from "lucide-react";
import FloatingFact from "@/components/floating-fact";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    content:
      "Musa's dedication to creating impactful solutions was evident in our work at World Vision. His ability to build scalable systems while keeping sustainability and real-world impact in mind made a significant difference in our projects.",
    author: "Nuru Mbeyu",
    position: "Project Manager, World Vision",
    image: "/nuru.jpg",
  },
  {
    content:
      "Musa played a crucial role in developing our e-commerce platform. His expertise in frontend and backend technologies ensured a seamless shopping experience for our customers, helping us scale efficiently.",
    author: "Bonny Longa",
    position: "CEO, ShopEase",
    image: "Bonny.jpg",
  },
  {
    content:
      "Musa played a crucial role in bringing the King Chi Foundation's vision to life through a beautifully designed and highly functional website. His technical expertise, problem-solving mindset, and ability to collaborate effectively ensured that the platform was user-friendly, secure, and impactful.",
    author: "Juma Mwavadu",
    position: "CEO, King Chi Foundation",
    image: "Kingchi.jpg",
  },
];

const allProjects = [
  {
    title: "Maritime Asset Management System",
    description:
      "Comprehensive solution for managing maritime assets, including vessels, equipment, and maintenance schedules. Features include asset tracking, QR code integration, and user management.",
    image: "Maritime.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "QR Code Integration",
    ],
    githubUrl: "#",
    liveUrl: "https://kma-asset-management.vercel.app/",
  },
  {
    title: "Expert Nursing Education Support",
    description:
      "A professional platform designed to assist nursing students with exam preparation, online tutoring, and academic excellence. Start your journey towards becoming a successful healthcare professional.",
    image: "nursing.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://nursing-m9j6.vercel.app/",
  },
  {
    title: "Shanzu Learning Center ",
    description:
      "A fully functional school website for Shanzu Learning Center, built using WordPress. The website provides information about the school, programs, admissions, Donation, and contact details.",
    image: "shanzu.png",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://theshanzulearningcentre.org/shanzu/",
  },
  {
    title: "Tutor Christabel Website",
    description:
      "A professional tutoring website built with modern web technologies, featuring responsive design and interactive elements for educational services.",
    image: "tutor.png",
    technologies: ["React", "D3.js", "Responsive Design"],
    githubUrl: "#",
    liveUrl: "https://tutorchristabel.com/",
  },
  {
    title: "Olosuashi Tours Website",
    description:
      "A dynamic touring website offering customized safari and travel experiences across Kenya and Tanzania.",
    image: "olosuasi.png",
    technologies: ["React", "MySQL", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "https://olosuashi.com",
  },
  {
    title: "Inventory Management System",
    description:
      "Enterprise inventory tracking solution with real-time analytics and reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop",
    technologies: [".NET Core", "Angular", "SQL Server", "Azure"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Musa Mwangea";
  const roles = ["Software Engineer", "Web Developer", "Tech Innovator"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
  }, []);

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
  }, [mounted, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation - Modern Professional Design */}
      <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold flex items-center">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="ml-2 hidden sm:inline-block text-primary font-semibold"></span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/rates"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Rates
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="md:hidden px-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
              <Button
                size="sm"
                className="hidden md:flex items-center gap-1"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Design */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2 p-4">
              <Link
                href="/"
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Home <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#projects"
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
              >
                Projects <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rates"
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Rates <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact <ChevronRight className="h-4 w-4" />
              </Link>
              <Button
                className="mt-2 w-full flex items-center justify-center gap-1"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
              >
                Hire Me <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Modern Design */}
      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Available for work
                </span>
              </div>

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

            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-purple-600 opacity-20 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl h-full w-full">
                  <img
                    src="musaa.jpg"
                    alt="Musa Mwangea"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Design */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <SectionHeader
                title="About Me"
                subtitle="My journey in technology"
              />

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  With over 3 years of experience in software development, I
                  specialize in creating robust web and mobile applications that
                  deliver exceptional user experiences and measurable business
                  results.
                </p>

                <p className="text-lg text-muted-foreground">
                  My approach combines technical expertise with a deep
                  understanding of user needs, ensuring that every solution I
                  build is both powerful and intuitive.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">3+ Years</h4>
                        <p className="text-sm text-muted-foreground">
                          Experience
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Kenya</h4>
                        <p className="text-sm text-muted-foreground">
                          Location
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">
                  Currently Open To{" "}
                  <span className="text-primary">Opportunities</span>
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <div className="bg-green-500 rounded-full h-2 w-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Full-time roles</h4>
                      <p className="text-muted-foreground text-sm">
                        Web & Mobile Development positions
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <div className="bg-green-500 rounded-full h-2 w-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Freelance & contract work</h4>
                      <p className="text-muted-foreground text-sm">
                        Let's build something awesome together
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <div className="bg-green-500 rounded-full h-2 w-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Innovative collaborations</h4>
                      <p className="text-muted-foreground text-sm">
                        AI-powered or cutting-edge tech projects
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                      <div className="bg-green-500 rounded-full h-2 w-2"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Startup partnerships</h4>
                      <p className="text-muted-foreground text-sm">
                        Looking for a skilled developer with vision
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground italic">
                    "If its exciting, challenging, or just plain genius, I want
                    to be part of it. Let's discuss how we can work together."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Interactive Grid Layout */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader
            title="Technical Stack"
            subtitle="Technologies I work with daily"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Frontend Technologies */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    Angular
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-green-500/30 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    .NET Core
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    REST API
                  </span>
                </div>
              </div>
            </div>

            {/* Database Technologies */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-yellow-500/30 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Databases</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    MongoDB
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    MySQL
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    Firebase
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                    SQL Server
                  </span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-purple-500/30 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                    AWS
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                    Azure
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                    Docker
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                    CI/CD
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                    GitHub Actions
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-red-500/30 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Mobile</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                    React Native
                  </span>
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                    Flutter
                  </span>
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                    iOS
                  </span>
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                    Android
                  </span>
                  <span className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                    Expo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Proficiency Meter */}
          <div className="mt-16 bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Skill Proficiency
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Frontend Development",
                  level: 90,
                  color: "bg-blue-500",
                },
                {
                  name: "Backend Development",
                  level: 85,
                  color: "bg-green-500",
                },
                { name: "Database Design", level: 80, color: "bg-yellow-500" },
                {
                  name: "Cloud Architecture",
                  level: 75,
                  color: "bg-purple-500",
                },
                { name: "Mobile Development", level: 70, color: "bg-red-500" },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`${skill.color} h-2.5 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Fact - Modernized */}
      <FloatingFact />

      {/* Projects Section - Enhanced Grid */}
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

      {/* Testimonial Section - Carousel Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Client Testimonials"
            subtitle="What people say about working with me"
          />

          <div className="mt-12 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                      <Quote className="absolute top-8 right-8 h-8 w-8 text-gray-200 dark:text-gray-700" />
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 relative">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  title="button"
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-primary w-6"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <SectionHeader
              title="Get In Touch"
              subtitle="Let's discuss your project"
            />

            <div className="mt-8">
              <ContactForm />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:mwangeamusa@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    mwangeamusa@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:0758311071"
                    className="hover:text-primary transition-colors"
                  >
                    0758311071
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Design */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-medium"></span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/mwangea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/musa-mwangea-00b6b726b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/_mwangea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Musa Mwangea. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
