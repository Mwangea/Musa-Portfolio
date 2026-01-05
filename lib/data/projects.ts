export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  category: "website" | "webapp" | "mobile" | "system";
  completedAt?: string;
}

export const projects: Project[] = [
  {
    slug: "atlas-blockchain-land-due-diligence",
    title: "Atlas - Blockchain Land Due Diligence Engine",
    description:
      "Kenya's first blockchain-powered land due diligence engine that empowers land owners to digitize land records, verify ownership authenticity, and secure verified records on the blockchain.",
    longDescription:
      "Atlas is Kenya's first blockchain-powered land due diligence engine. The platform empowers bona fide land owners to digitize land records, verify ownership authenticity, and ultimately secures verified records on the blockchain. Atlas also empowers the public to conduct robust land due diligence in a convenient digital channel for better informed decision support. The system addresses weak property rights by moving away from paper-based land records that are vulnerable to manipulation and disappearance.",
    image: "Atlas-block-chain.png",
    technologies: [
      "Blockchain",
      "Web3",
      "React",
      "Next.js",
      "TypeScript",
      "Smart Contracts",
      "Land Registry",
    ],
    githubUrl: "#",
    liveUrl: "https://www.atlas-ke.net/",
    featured: true,
    category: "system",
    completedAt: "2024",
  },
  {
    slug: "ping-waiter-digital-waiter-system",
    title: "PingWaiter - Digital Waiter System",
    description:
      "A Laravel-based restaurant management and ordering platform that digitizes table service and order management through QR code scanning and real-time order tracking.",
    longDescription:
      "PingWaiter is a comprehensive Laravel-based restaurant management and ordering platform that digitizes table service and order management. The system allows customers to scan QR codes at tables to access menus and place orders directly from their tables. Key features include table-based ordering with cookie-based session tracking, comprehensive menu management with food categories, styles, and customizations, complete order workflow with status tracking (pending → approved → prepared → delivered → completed), multi-user roles for restaurant owners, managers, and workers, reward points system, subscription management with Stripe integration, payment processing via PayPal and Stripe, real-time notifications using Pusher, QR code generation for tables, Excel import/export functionality, backup system, email notifications with Twilio and Telegram integration, barcode generation, and customer ping/call waiter functionality. The platform is designed to replace or supplement traditional waiter service with a digital system.",
    image: "Ping-waiter.png",
    technologies: [
      "Laravel 10",
      "PHP 8.1+",
      "MySQL",
      "Blade Templating",
      "Pusher",
      "Stripe",
      "PayPal",
      "Spatie Media Library",
      "QR Code Generation",
      "Real-time Notifications",
      "Excel Import/Export",
    ],
    githubUrl: "#",
    liveUrl: "https://pingwaiter.com/",
    featured: true,
    category: "webapp",
    completedAt: "2024",
  },
  {
    slug: "twende-rides-car-hire",
    title: "Twende Rides - Premium Car Hire Website",
    description:
      "A modern, responsive car hire platform built with Next.js 15, offering a premium vehicle rental experience across Kenya.",
    longDescription:
      "Twende Rides is a modern, responsive car hire platform built with Next.js 15, offering a premium vehicle rental experience across Kenya. It includes a sleek UI, real-time booking system, comprehensive fleet management, and smooth user experience optimized for mobile and desktop. Features include date-based availability, location-based pickup/drop-off, customer testimonials, and a beautiful parallax hero section.",
    image: "car-hire.webp",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn/UI",
      "MongoDB",
    ],
    githubUrl: "https://github.com/Mwangea/Car-hire",
    liveUrl: "https://car-hire-gv3x.vercel.app/",
    featured: true,
    category: "webapp",
    completedAt: "2024",
  },
  {
    slug: "don-palace-furniture",
    title: "Don Palace Furniture",
    description:
      "A modern ecommerce website for selling furniture, featuring a complete shopping experience with product catalog, shopping cart, checkout system, and payment integration.",
    longDescription:
      "A modern ecommerce website for selling furniture, featuring a complete shopping experience with product catalog, shopping cart, checkout system, and payment integration. The platform offers a user-friendly interface for browsing furniture collections, viewing detailed product information, and seamless online purchasing.",
    image: "Donpalace.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "E-commerce",
      "Payment Integration",
    ],
    githubUrl: "#",
    liveUrl: "https://testingdonpalace.hotsportgym.com/",
    featured: true,
    category: "webapp",
    completedAt: "2024",
  },
  {
    slug: "foreign-languages-hospitality",
    title: "Foreign Languages and Hospitality",
    description:
      "A comprehensive platform offering foreign language courses and hospitality training programs with interactive learning modules.",
    longDescription:
      "A comprehensive platform offering foreign language courses and hospitality training programs. Features include interactive language learning modules, cultural immersion experiences, and professional hospitality certification courses designed to prepare students for international careers.",
    image: "German.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://foreignlanguagesandhospitality.com/",
    featured: false,
    category: "website",
    completedAt: "2024",
  },
  {
    slug: "invoice-pro-saas",
    title: "Invoice Pro",
    description:
      "A modern SaaS invoicing platform built for freelancers, contractors, creatives, and small business owners.",
    longDescription:
      "A modern SaaS invoicing platform built for freelancers, contractors, creatives, and small business owners. Users can create and send professional invoices instantly from any device. Currently includes a landing page, pricing, features, about, and authentication pages, with a dashboard coming soon.",
    image: "INVOICE.png",
    technologies: ["React", "TypeScript", "MySQL", "CSS", "Express"],
    githubUrl: "#",
    liveUrl: "https://invoice-saas-roan.vercel.app/",
    featured: true,
    category: "webapp",
    completedAt: "2024",
  },
  {
    slug: "olosuashi-tours",
    title: "Olosuashi Tours Website",
    description:
      "A dynamic touring website offering customized safari and travel experiences across Kenya and Tanzania.",
    longDescription:
      "A dynamic touring website offering customized safari and travel experiences across Kenya and Tanzania. Features include tour booking, destination showcases, and seamless user experience for planning African safaris.",
    image: "olosuasi.png",
    technologies: ["React", "MySQL", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "https://olosuashi.com",
    featured: false,
    category: "website",
    completedAt: "2023",
  },
  {
    slug: "shanzu-learning-center",
    title: "Shanzu Learning Center",
    description:
      "A fully functional school website for Shanzu Learning Center providing information about programs, admissions, and donations.",
    longDescription:
      "A fully functional school website for Shanzu Learning Center, built using WordPress. The website provides information about the school, programs, admissions, Donation, and contact details.",
    image: "shanzu.png",
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://theshanzulearningcentre.org/shanzu/",
    featured: false,
    category: "website",
    completedAt: "2023",
  },
  {
    slug: "hotsport-gym-landing",
    title: "HotSport Gym Landing Page",
    description:
      "A professional landing page for HotSport Gym showcasing gym services, facilities, membership plans, and more.",
    longDescription:
      "A professional landing page for HotSport Gym in Ruiru Gwakairo, designed to showcase the gym's mission, services, facilities, membership plans, and more. Features include hero section, about, services, timetable, exercises, gallery, testimonials, membership plans, contact form, and a modern footer.",
    image: "HotSport.webp",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "lucide-react",
      "@vercel/analytics",
    ],
    githubUrl: "https://github.com/Mwangea/HotSportLandingPage",
    liveUrl: "https://hot-sport-landing-page.vercel.app/",
    featured: false,
    category: "website",
    completedAt: "2024",
  },
  {
    slug: "maritime-asset-management",
    title: "Maritime Asset Management System",
    description:
      "Comprehensive solution for managing maritime assets, including vessels, equipment, and maintenance schedules.",
    longDescription:
      "Comprehensive solution for managing maritime assets, including vessels, equipment, and maintenance schedules. Features include asset tracking, QR code integration, and user management for efficient maritime operations.",
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
    featured: true,
    category: "system",
    completedAt: "2024",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

