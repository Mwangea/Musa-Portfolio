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
      "Musa played a crucial role in bringing the King Chi Foundation's vision to life through a beautifully designed and highly functional website. His technical expertise, problem-solving mindset, and ability to collaborate effectively ensured that the platform was user-friendly, secure, and impactful. From implementing donation features to optimizing performance, his dedication to excellence made all the difference.",
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
    image:
      "nursing.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://nursing-m9j6.vercel.app/",
},
  {
    title: "Shanzu Learning Center Website",
    description:
      "A fully functional school website for Shanzu Learning Center, built using WordPress. The website provides information about the school, programs, admissions, Donation, and contact details.",
    image:
      "shanzu.png",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://theshanzulearningcentre.org/shanzu/",
},
{
  title: "Tutor Christabel Website",
  description:
    "A professional tutoring website built with modern web technologies, featuring responsive design and interactive elements for educational services. The website showcases various tutoring services including healthcare education, technical subjects, and standardized test preparation.",
  image:
    "tutor.png",
  technologies: ["React", "D3.js", "Responsive Design"],
  githubUrl: "#",
  liveUrl: "https://tutorchristabel.com/",
},
  {
    title: "AI-Powered Chat App",
    description: "Real-time chat application with AI integration",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=400&auto=format&fit=crop",
    technologies: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Inventory Management System",
    description: "Enterprise inventory tracking solution",
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
  const roles = ["Software Engineer", "Web Developer", "Innovator"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation - UPDATED with Menu Button */}
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}>
                Projects
              </Link>
              <Link href="/rates" className="hover:text-primary transition-colors">
                Rates
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}>
                Contact
              </Link>
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
                setIsMenuOpen(false);
              }}>
                Projects
              </Link>
              <Link href="/rates" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Rates
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {text}
                <span className="inline-block w-[3px] h-8 bg-primary animate-blink"></span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-6 h-[40px]">
                {roleText}
                <span className="inline-block w-[3px] h-6 bg-primary animate-blink"></span>
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Passionate about creating innovative solutions using modern
                technologies. Specialized in building scalable web and mobile
                applications with a focus on user experience and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/mwangea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/musa-mwangea-00b6b726b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://twitter.com/_mwangea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:mwangeamusa@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative max-w-md mx-auto lg:max-w-none order-1 lg:order-2">
              <div className="aspect-square w-64 md:w-80 mx-auto">
                <img
                  src="musaa.jpg"
                  alt="Musa Mwangea"
                  className="rounded-full object-cover w-full h-full border-8 border-card shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="About Me"
            subtitle="Learn more about my journey and expertise in software development"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With over 3 years of experience in software development,
                I&apos;ve led teams in developing complex healthcare management
                systems, e-commerce platforms, and mobile applications.
              </p>
              <p className="text-muted-foreground mb-4">
                My technical toolkit includes Angular, React, Python, .NET, and
                various cloud technologies, enabling me to deliver comprehensive
                solutions that meet modern business needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Kenya</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Currently Open To 🔎
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span>✅ Full-time roles in Web & Mobile Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    ✅ Freelance & contract work—Let’s build something awesome
                    together
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    ✅ Collaborations on AI-powered or innovative tech projects
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>
                    ✅ Startups & businesses looking for a skilled developer
                    with a vision
                  </span>
                </li>
              </ul>
              <h2 className="text-1xl text-muted-foreground italic mt-8">
                If it’s exciting, challenging, or just plain genius, let’s talk
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Skills & Expertise"
            subtitle="A comprehensive look at my technical capabilities and proficiency levels"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              name="Frontend Development"
              level={90}
              description="React, Angular, Next.js, TailwindCSS"
            />
            <SkillCard
              name="Backend Development"
              level={85}
              description=".NET Core, Node.js, Python"
            />
            <SkillCard
              name="Database Management"
              level={80}
              description="MySQL, PostgreSQL, MongoDB"
            />
            <SkillCard
              name="Cloud Services"
              level={85}
              description="AWS, Firebase, Azure"
            />
            <SkillCard
              name="Mobile Development"
              level={80}
              description="React Native, iOS, Android"
            />
            <SkillCard
              name="DevOps"
              level={75}
              description="Docker, CI/CD, Git"
            />
          </div>
        </div>
      </section>

      {/* Create a Floating Fact component */}
      <FloatingFact />

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my recent work and personal projects"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={() =>
                  setVisibleProjects((prev) =>
                    Math.min(prev + 3, allProjects.length)
                  )
                }
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What People Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Feedback from clients and colleagues I&apos;ve worked with
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100 dark:text-gray-700" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have a project in mind? Let's work together!"
          />
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Musa Mwangea. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
