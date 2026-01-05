// Site configuration for SEO and branding
export const siteConfig = {
  name: "Musa Mwangea",
  title: "Musa Mwangea | Software Engineer & Full-Stack Developer",
  description:
    "Full-stack software engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web and mobile applications in Kenya.",
  url: "https://musamwangea.dev", // Update with your actual domain
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/mwangea",
    linkedin: "https://www.linkedin.com/in/musa-mwangea-00b6b726b",
    twitter: "https://twitter.com/_mwangea",
    email: "mwangeamusa@gmail.com",
  },
  creator: "Musa Mwangea",
  keywords: [
    "software engineer",
    "web developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Kenya developer",
    "freelance developer",
    "mobile app developer",
    "Nairobi developer",
  ],
  location: {
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
  },
  phone: "+254758311071",
  experience: "4",
  roles: ["Software Engineer", "Web Developer", "Tech Innovator"],
} as const;

export type SiteConfig = typeof siteConfig;

