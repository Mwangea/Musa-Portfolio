import { Metadata } from "next";
import { generatePageMetadata, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { services } from "@/lib/data/services";
import { JsonLd } from "@/components/JsonLd";
import RatesClient from "./RatesClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Pricing & Rates",
  description:
    "Transparent pricing for web development, mobile apps, and custom software solutions. View rates for static sites, dynamic websites, and enterprise applications.",
  keywords: [
    "web development pricing",
    "software development rates",
    "freelance developer rates Kenya",
    "website cost",
    "mobile app development cost",
  ],
  url: "/rates",
});

export default function RatesPage() {
  // Generate JSON-LD for all services
  const serviceSchemas = services.flatMap((category) =>
    category.options.map((option) =>
      generateServiceSchema({
        name: option.name,
        description: option.description,
        price: `KES ${option.price}`,
      })
    )
  );

  return (
    <>
      <JsonLd data={serviceSchemas} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Rates", url: "/rates" },
        ])}
      />
      <RatesClient services={services} />
    </>
  );
}
