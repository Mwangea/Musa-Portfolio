"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, [activeTestimonial]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-gray-900 dark:via-gray-950 dark:to-primary/10 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative background accent */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl opacity-40 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          title="Client Testimonials"
          subtitle="What people say about working with me"
        />
        <div className="mt-16 relative flex flex-col items-center">
          {/* Gradient accent bar */}
          <div
            className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-8"
            aria-hidden="true"
          />
          <div className="overflow-hidden w-full max-w-2xl">
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              key={activeTestimonial}
            >
              <figure className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center">
                <Quote
                  className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 text-primary/20 dark:text-primary/30"
                  aria-hidden="true"
                />
                <blockquote className="text-lg md:text-xl font-serif italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary mb-8 text-center max-w-lg mx-auto drop-shadow-md">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>
                <figcaption className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-sm opacity-60 animate-pulse"
                      style={{ zIndex: 0 }}
                      aria-hidden="true"
                    />
                    <Image
                      src={currentTestimonial.image}
                      alt={`${currentTestimonial.author} testimonial`}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-4 border-primary relative z-10 shadow-lg"
                    />
                  </div>
                  <cite className="not-italic">
                    <span className="block text-lg font-bold text-gray-900 dark:text-white">
                      {currentTestimonial.author}
                    </span>
                    <span className="block text-primary font-medium text-sm mt-1">
                      {currentTestimonial.position}
                    </span>
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Dots navigation */}
          <nav className="flex justify-center mt-10 gap-3" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full border-2 border-primary transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-primary scale-125 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`View testimonial from ${testimonial.author}`}
                aria-current={index === activeTestimonial ? "true" : "false"}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
