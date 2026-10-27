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
  outcome?: string;
  imageClass?: string;
  caseStudy?: {
    problem: string;
    role: string;
    shipped: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "atlas-blockchain-land-due-diligence",
    title: "Atlas - Blockchain Land Due Diligence Engine",
    description:
      "Kenya's first blockchain-powered land due diligence engine that empowers land owners to digitize land records, verify ownership authenticity, and secure verified records on the blockchain.",
    longDescription:
      "Atlas is Kenya's first blockchain-powered land due diligence engine. The platform empowers bona fide land owners to digitize land records, verify ownership authenticity, and ultimately secures verified records on the blockchain. Atlas also empowers the public to conduct robust land due diligence in a convenient digital channel for better informed decision support. The system addresses weak property rights by moving away from paper-based land records that are vulnerable to manipulation and disappearance.",
    image: "Atlas.png",
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
    completedAt: "2025",
    outcome:
      "Land owners digitize records, and buyers can check them before a deal, instead of trusting paper that can be altered or lost.",
    caseStudy: {
      problem:
        "Land transactions in Kenya still lean on paper. A record can be altered, misplaced, or lost, and a buyer has no straightforward way to confirm ownership before money changes hands.",
      role:
        "I designed and built Atlas, the web platform where an owner digitizes a land record, ownership can be checked, and a verified record is secured on the blockchain.",
      shipped: [
        "A flow for land owners to digitize their records",
        "Checks on ownership authenticity before a record is treated as verified",
        "Verified records secured on the blockchain",
        "A public due-diligence channel so a buyer can review a record before a deal",
      ],
    },
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
    outcome:
      "Guests scan a QR code at the table, place the order, and the kitchen tracks it from pending to served.",
    caseStudy: {
      problem:
        "Table service still depends on a waiter carrying an order to the kitchen. Tickets stall, the guest cannot see status, and the floor has no shared view of what is pending, cooking, or ready.",
      role:
        "I built PingWaiter, the system a restaurant uses to take the order at the table, move it through the kitchen, and give owners, managers, and floor staff their own access.",
      shipped: [
        "QR ordering from the table, with the session kept on that table",
        "An order path from pending, to approved, prepared, delivered, and completed",
        "Separate access for owners, managers, and floor staff",
        "Card payments through Stripe and PayPal, with live updates to the team",
      ],
    },
  },
  {
    slug: "josuddi-pwd-uganda-platform",
    title: "JOSUDDI",
    description:
      "JOSUDDI is a community-centered platform that supports Persons with Disabilities (PWDs) in Uganda through advocacy, entrepreneurship, savings groups, and disability support services.",
    longDescription:
      "JOSUDDI is a community-centered platform that supports Persons with Disabilities (PWDs) in Uganda through advocacy, entrepreneurship, savings groups, and disability support services. The platform highlights inclusive community programs, impact stories, and opportunities for partners and supporters to engage in sustainable change.",
    image: "jossud.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Accessibility",
    ],
    githubUrl: "#",
    liveUrl: "https://josuddi.vercel.app/",
    featured: true,
    category: "website",
    completedAt: "2026",
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
    outcome:
      "A car-hire site with fleet, dates, and pickup locations, built so a customer can book from a phone.",
    caseStudy: {
      problem:
        "Someone hiring a car needs to know which vehicles are free, choose dates and a pickup point, and complete the booking without a phone call.",
      role:
        "I designed and built the Twende Rides site: the fleet, the booking flow, and a layout that holds up on a phone as well as a desktop.",
      shipped: [
        "A fleet a customer can browse before choosing a vehicle",
        "Date-based availability, with pickup and drop-off by location",
        "A booking path built for mobile and desktop",
      ],
    },
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
    liveUrl: "https://donpalacefurniture.com/",
    featured: true,
    category: "webapp",
    completedAt: "2026",
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
    slug: "oltukai-mara-camp",
    title: "Oltukai Mara Camp",
    description:
      "A luxury safari camp website for Oltukai Mara Camp in the Maasai Mara, covering the stay, the experiences, and how to book.",
    longDescription:
      "Oltukai Mara Camp is an intimate luxury safari camp in the Maasai Mara. The site introduces the camp and its tents, game drives and balloon safaris, a gallery, and a direct way to plan a stay, including reservations over WhatsApp.",
    image: "oltukai mara.png",
    technologies: ["Next.js", "React"],
    githubUrl: "#",
    liveUrl: "https://oltukaimaracamp.com",
    featured: false,
    category: "website",
    completedAt: "2026",
    outcome:
      "Guests can explore the camp, the tents, and the Mara experiences, then plan a stay or reach reservations on WhatsApp.",
  },
  // {
  //   slug: "shanzu-learning-center",
  //   title: "Shanzu Learning Center",
  //   description:
  //     "A fully functional school website for Shanzu Learning Center providing information about programs, admissions, and donations.",
  //   longDescription:
  //     "A fully functional school website for Shanzu Learning Center, built using WordPress. The website provides information about the school, programs, admissions, Donation, and contact details.",
  //   image: "shanzu.png",
  //   technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
  //   githubUrl: "#",
  //   liveUrl: "https://theshanzulearningcentre.org/shanzu/",
  //   featured: false,
  //   category: "website",
  //   completedAt: "2023",
  // },
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
    completedAt: "2025",
  },
  
  {
    slug: "maritime-asset-management",
    title: "Maritime Asset Management System",
    description:
      "Comprehensive solution for managing maritime assets, including vessels, equipment, and maintenance schedules.",
    longDescription:
      "Comprehensive solution for managing maritime assets, including vessels, equipment, and maintenance schedules. Features include asset tracking, QR code integration, and user management for efficient maritime operations.",
    image: "Maritime.png",
    imageClass: "object-top",
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
    outcome:
      "Vessels, equipment, and maintenance schedules live in one system, with a QR code on each asset.",
    caseStudy: {
      problem:
        "Vessels, equipment, and the maintenance due on them were not in one place the operations team could trust. Finding an asset, or knowing what work it needed, meant chasing separate records.",
      role:
        "I built the asset management system for Kenya Maritime Authority: a register of vessels and equipment, a QR code on each asset, and a schedule for the maintenance due on it.",
      shipped: [
        "A register of vessels and equipment",
        "QR codes so an asset can be identified in the field",
        "Maintenance schedules tied to those assets",
        "User accounts for the people running operations",
      ],
    },
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  website: "Website",
  webapp: "Web app",
  mobile: "Mobile app",
  system: "System",
};

export const selectedProjectSlugs = [
  "atlas-blockchain-land-due-diligence",
  "ping-waiter-digital-waiter-system",
  "twende-rides-car-hire",
  "oltukai-mara-camp",
] as const;

export function getSelectedProjects(): Project[] {
  return selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}

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

