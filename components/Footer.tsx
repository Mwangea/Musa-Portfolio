import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/rates", label: "Rates" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-2xl tracking-tight">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Websites, web apps, and business systems for companies that need the work shipped.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav aria-label="Footer">
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.links.email}`} className="hover:text-foreground">
                {siteConfig.links.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              {siteConfig.location.city}, {siteConfig.location.country}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex gap-4">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
