"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useScrollToSection } from "./HeroClient";

const navLinks = [
  { href: "/", label: "Home", isScroll: false },
  { href: "#projects", label: "Projects", isScroll: true, scrollTo: "projects" },
  { href: "/projects", label: "Portfolio", isScroll: false },
  { href: "/rates", label: "Rates", isScroll: false },
  { href: "#contact", label: "Contact", isScroll: true, scrollTo: "contact" },
];

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (
    e: React.MouseEvent,
    link: (typeof navLinks)[0]
  ) => {
    if (link.isScroll && link.scrollTo) {
      e.preventDefault();
      scrollToSection(link.scrollTo);
      setIsMenuOpen(false);
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
            <span className="ml-2 hidden sm:inline-block text-primary font-semibold">
              Musa M.
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
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
              onClick={() => scrollToSection("contact")}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center justify-between"
                onClick={(e) => {
                  handleNavClick(e, link);
                  if (!link.isScroll) setIsMenuOpen(false);
                }}
              >
                {link.label} <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
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
  );
}

