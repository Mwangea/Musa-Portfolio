import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
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
              onClick={e => {
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
              onClick={e => {
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
      {/* Mobile Menu */}
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
              onClick={e => {
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
              onClick={e => {
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
  );
} 