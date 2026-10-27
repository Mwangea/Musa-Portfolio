"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Work", match: "/projects" },
  { href: "/rates", label: "Rates", match: "/rates" },
  { href: "/#about", label: "About", match: "" },
  { href: "/#contact", label: "Contact", match: "" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      event.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight"
          aria-label="Musa Mwangea, home"
        >
          <span className="sm:hidden">Musa</span>
          <span className="hidden sm:inline">Musa Mwangea</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = link.match && pathname.startsWith(link.match);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className={`text-sm transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            onClick={(event) => handleClick(event, "/#contact")}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className="border-b border-border py-3 text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(event) => handleClick(event, "/#contact")}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
