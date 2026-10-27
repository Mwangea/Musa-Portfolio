import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Start a project
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">Tell me what you need built.</h2>
          <p className="mt-4 text-muted-foreground">
            Send a short brief. I reply with what I would build, how long it takes, and a price range.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">
                WhatsApp {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.links.email}`} className="hover:text-primary">
                {siteConfig.links.email}
              </a>
            </li>
            <li className="text-muted-foreground">
              {siteConfig.location.city}, {siteConfig.location.country}
            </li>
          </ul>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
