"use client";

import { Search, Palette, Code2, TestTube, Rocket, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Planning",
    description: "Understanding your goals, audience, and requirements to set a strong foundation.",
    details: [
      "Requirements gathering",
      "Stakeholder interviews",
      "Technical feasibility analysis",
      "Project roadmap creation"
    ],
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Crafting intuitive, beautiful interfaces and user experiences.",
    details: [
      "UI/UX design",
      "Interactive prototypes",
      "Design system creation",
      "User testing & feedback"
    ],
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building robust, scalable solutions using modern technologies.",
    details: [
      "Agile development",
      "Code reviews",
      "Version control",
      "Continuous integration"
    ],
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Ensuring quality, reliability, and performance through thorough testing.",
    details: [
      "Unit & integration tests",
      "Performance optimization",
      "Security audits",
      "Cross-browser testing"
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploying, monitoring, and supporting your project for ongoing success.",
    details: [
      "Production deployment",
      "Monitoring & analytics",
      "Bug fixes & updates",
      "Ongoing maintenance"
    ],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = steps[activeStep].icon;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collaborative process designed to deliver exceptional results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeStep === index
                      ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                      : "border-border bg-card hover:border-primary/30 hover:bg-card/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg transition-colors ${
                        activeStep === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-semibold ${
                            activeStep === index ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                        {activeStep === index && (
                          <ChevronRight className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <ActiveIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Step {activeStep + 1} of {steps.length}
                  </span>
                  <h3 className="text-2xl font-bold mt-1">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  What&apos;s Included:
                </h4>
                {steps[activeStep].details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>
                    {activeStep + 1} / {steps.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start your project?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group"
          >
            <span>Let&apos;s discuss your needs</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
