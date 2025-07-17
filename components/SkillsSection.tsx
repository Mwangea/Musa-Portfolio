import { SectionHeader } from "@/components/section-header";

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="What I Offer"
          subtitle="Core competencies and value I bring to your project"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <h3 className="font-semibold text-lg mb-2">Modern Web & Mobile Apps</h3>
            <p className="text-muted-foreground">Building robust, scalable, and beautiful applications using the latest technologies and best practices.</p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            <h3 className="font-semibold text-lg mb-2">End-to-End Solutions</h3>
            <p className="text-muted-foreground">From ideation to deployment, I deliver complete solutions tailored to your business needs.</p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <svg className="w-10 h-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            <h3 className="font-semibold text-lg mb-2">Cloud & DevOps Expertise</h3>
            <p className="text-muted-foreground">Skilled in cloud architecture, CI/CD, and scalable infrastructure for high-availability applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 