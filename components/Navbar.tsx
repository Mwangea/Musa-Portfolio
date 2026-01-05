"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  scrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll to section
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold flex items-center"
            aria-label="Go to homepage"
          >
            <Image
              src="/favicon.ico"
              alt="Musa Mwangea Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href={isHomePage ? "#projects" : "/#projects"}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScrollToSection("projects");
                }
              }}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/rates"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Rates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScrollToSection("contact");
                }
              }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="md:hidden px-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              className="hidden md:flex items-center gap-1"
              onClick={() => {
                if (isHomePage) {
                  handleScrollToSection("contact");
                } else {
                  router.push("/#contact");
                }
              }}
            >
              Hire Me <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/"
              className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Home <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={isHomePage ? "#projects" : "/#projects"}
              className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScrollToSection("projects");
                }
                setIsMenuOpen(false);
              }}
            >
              Projects <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/rates"
              className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Rates <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScrollToSection("contact");
                }
                setIsMenuOpen(false);
              }}
            >
              Contact <ChevronRight className="h-4 w-4" />
            </Link>
            <Button
              className="mt-2 w-full flex items-center justify-center gap-1"
              onClick={() => {
                if (isHomePage) {
                  handleScrollToSection("contact");
                } else {
                  router.push("/#contact");
                }
                setIsMenuOpen(false);
              }}
            >
              Hire Me <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
