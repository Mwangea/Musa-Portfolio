import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/home/HomePage";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HashScrollHandler } from "@/components/HashScrollHandler";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "Websites, apps, and business systems",
  description: siteConfig.description,
  url: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HashScrollHandler />
      <Navbar />
      <HomePage />
      <ContactSection />
      <Footer />
    </main>
  );
}
