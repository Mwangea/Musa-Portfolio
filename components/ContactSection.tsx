import { SectionHeader } from "@/components/section-header";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <SectionHeader
            title="Get In Touch"
            subtitle="Let's discuss your project"
          />
          <div className="mt-8">
            <ContactForm />
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:mwangeamusa@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mwangeamusa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:0758311071"
                  className="hover:text-primary transition-colors"
                >
                  0758311071
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 