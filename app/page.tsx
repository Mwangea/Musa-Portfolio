/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";
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
  title: "Twende Rides - Premium Car Hire Website",
  description:
    "Twende Rides is a modern, responsive car hire platform built with Next.js 15, offering a premium vehicle rental experience across Kenya. It includes a sleek UI, real-time booking system, comprehensive fleet management, and smooth user experience optimized for mobile and desktop. Features include date-based availability, location-based pickup/drop-off, customer testimonials, and a beautiful parallax hero section.",
  image: "car-hire.webp", 
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "Shadcn/UI",
    "MongoDB"
  ],
  githubUrl: "https://github.com/Mwangea/Car-hire", 
  liveUrl: "https://car-hire-gv3x.vercel.app/",
},

  
  {
    title: "Foreign Languages and Hospitality",
    description:
      "A comprehensive platform offering foreign language courses and hospitality training programs. Features include interactive language learning modules, cultural immersion experiences, and professional hospitality certification courses designed to prepare students for international careers.",
    image: "German.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://foreignlanguagesandhospitality.com/",
  },
  {
    title: "Invoice Pro",
    description:
      "A modern SaaS invoicing platform built for freelancers, contractors, creatives, and small business owners. Users can create and send professional invoices instantly from any device. Currently includes a landing page, pricing, features, about, and authentication pages, with a dashboard coming soon.",
    image: "INVOICE.png",
    technologies: ["React", "TypeScript", "MySQL", "CSS", "Express"],
    githubUrl: "#", // Replace with your actual repo link when ready
    liveUrl: "https://invoice-saas-roan.vercel.app/"
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
    title: "Shanzu Learning Center ",
    description:
      "A fully functional school website for Shanzu Learning Center, built using WordPress. The website provides information about the school, programs, admissions, Donation, and contact details.",
    image: "shanzu.png",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://theshanzulearningcentre.org/shanzu/",
  },
  {
    title: "HotSport Gym Landing Page",
    description:
      "A professional landing page for HotSport Gym in Ruiru Gwakairo, designed to showcase the gym's mission, services, facilities, membership plans, and more. Features include hero section, about, services, timetable, exercises, gallery, testimonials, membership plans, contact form, and a modern footer.",
    image: "HotSport.webp",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "lucide-react",
      "@vercel/analytics"
    ],
    githubUrl: "https://github.com/Mwangea/HotSportLandingPage",
    liveUrl: "https://hot-sport-landing-page.vercel.app/" 
  },
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
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Musa Mwangea";
  const roles = ["Software Engineer", "Web Developer", "Tech Innovator"];
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
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection text={text} roleText={roleText} scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <FloatingFact />
      <ProcessSection />
      <ProjectsSection allProjects={allProjects} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </main>
  );
}
