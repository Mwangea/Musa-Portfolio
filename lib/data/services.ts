export interface ServiceOption {
  name: string;
  price: string;
  priceKES: number;
  description: string;
  features: string[];
  note?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  category: string;
  slug: string;
  description: string;
  options: ServiceOption[];
}

export const services: ServiceCategory[] = [
  {
    category: "WEBSITES",
    slug: "websites",
    description: "Professional web development services for businesses of all sizes",
    options: [
      {
        name: "Static Sites",
        price: "10,000 to 25,000",
        priceKES: 17500,
        description: "Simple, fast-loading websites with fixed content.",
        features: [
          "Landing Pages",
          "Business Sites",
          "Portfolios",
          "Blazing Fast",
          "SEO Optimized",
        ],
        note: "Can vary depending with complexity",
        popular: false,
      },
      {
        name: "Dynamic Sites",
        price: "25,000 to 50,000",
        priceKES: 37500,
        description: "Interactive websites with database integration.",
        features: [
          "Content Management",
          "User Accounts",
          "Admin Dashboard",
          "E-commerce Capabilities",
          "API Integration",
        ],
        note: "Can vary depending with complexity",
        popular: true,
      },
    ],
  },
  {
    category: "SYSTEM APPLICATIONS",
    slug: "system-applications",
    description: "Custom software solutions tailored to your business needs",
    options: [
      {
        name: "Custom Software",
        price: "70,000 to 150,000",
        priceKES: 110000,
        description: "Tailored software solutions for your business needs.",
        features: [
          "Database Management",
          "User Authentication",
          "Custom Workflows",
          "Reporting Tools",
          "Third-party Integrations",
        ],
        note: "Can vary depending with complexity",
        popular: false,
      },
    ],
  },
  {
    category: "MOBILE APPLICATIONS",
    slug: "mobile-applications",
    description: "Cross-platform and native mobile app development",
    options: [
      {
        name: "Hybrid Apps",
        price: "50,000",
        priceKES: 50000,
        description: "Cross-platform mobile applications.",
        features: [
          "iOS & Android Compatible",
          "Single Codebase",
          "Faster Development",
          "Cost-Effective",
          "Easy Updates",
        ],
        note: "Can vary depending with complexity",
        popular: false,
      },
      {
        name: "Native Apps",
        price: "150,000",
        priceKES: 150000,
        description: "Platform-specific applications with optimal performance.",
        features: [
          "Platform-Specific",
          "Enhanced Performance",
          "Full Device Features Access",
          "Better User Experience",
          "Offline Functionality",
        ],
        note: "Can vary depending with complexity",
        popular: true,
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find((service) => service.slug === slug);
}

