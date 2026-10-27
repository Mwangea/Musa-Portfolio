// Site configuration for SEO and branding
export const siteConfig = {
  name: "Musa Mwangea",
  title: "Musa Mwangea | Websites, apps, and business systems",
  description:
    "Musa Mwangea designs and builds websites, web apps, and business systems for companies in Kenya and beyond. Scopes are clear and rates are listed in Kenyan shillings.",
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

