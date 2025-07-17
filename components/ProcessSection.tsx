import { SectionHeader } from "@/components/section-header";

export default function ProcessSection() {
  const steps = [
    {
      icon: (
        <span className="bg-yellow-100 text-yellow-600 dark:bg-yellow-400/20 dark:text-yellow-400 p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-300 group-hover:text-yellow-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
        </span>
      ),
      title: "Discovery & Planning",
      desc: "Understanding your goals, audience, and requirements to set a strong foundation."
    },
    {
      icon: (
        <span className="bg-sky-100 text-sky-600 dark:bg-sky-400/20 dark:text-sky-400 p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-300 group-hover:text-sky-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0l-6 3m6-3l-6-3" /></svg>
        </span>
      ),
      title: "Design & Prototyping",
      desc: "Crafting intuitive, beautiful interfaces and user experiences."
    },
    {
      icon: (
        <span className="bg-lime-100 text-lime-700 dark:bg-lime-400/20 dark:text-lime-400 p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-lime-300 group-hover:text-lime-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
        </span>
      ),
      title: "Development",
      desc: "Building robust, scalable solutions using modern technologies."
    },
    {
      icon: (
        <span className="bg-purple-100 text-purple-700 dark:bg-purple-400/20 dark:text-purple-400 p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-300 group-hover:text-purple-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8z" /></svg>
        </span>
      ),
      title: "Testing & QA",
      desc: "Ensuring quality, reliability, and performance through thorough testing."
    },
    {
      icon: (
        <span className="bg-pink-100 text-pink-700 dark:bg-pink-400/20 dark:text-pink-400 p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-300 group-hover:text-pink-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
      ),
      title: "Launch & Support",
      desc: "Deploying, monitoring, and supporting your project for ongoing success."
    }
  ];
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="My Process"
          subtitle="How I approach every project: from idea to launch"
        />
        <div className="relative mt-12">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/20 -translate-x-1/2"></div>
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`mb-12 flex flex-col md:flex-row items-center w-full`}
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 md:pr-8">
                    <div className="group bg-card p-6 rounded-xl border border-border shadow transition-all duration-300 hover:shadow-2xl hover:bg-primary/5 flex flex-col items-center md:items-start gap-4 mx-2 md:mx-0">
                      {step.icon}
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1 max-w-xs">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="group bg-card p-6 rounded-xl border border-border shadow transition-all duration-300 hover:shadow-2xl hover:bg-primary/5 flex flex-col items-center md:items-start gap-4 mx-2 md:mx-0">
                      {step.icon}
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1 max-w-xs">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 