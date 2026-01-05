import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/rates", label: "Rates" },
    { href: "/#contact", label: "Contact" },
  ],
  services: [
    { href: "/rates#websites", label: "Web Development" },
    { href: "/rates#mobile-applications", label: "Mobile Apps" },
    { href: "/rates#system-applications", label: "Custom Software" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 border-t border-border bg-muted/30"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/favicon.ico"
                alt={`${siteConfig.name} Logo`}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-stack software engineer specializing in building scalable web
              and mobile applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {siteConfig.location.city}, {siteConfig.location.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/rates" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
