/* eslint-disable react/no-unescaped-entities */
import { SectionHeader } from "@/components/section-header";
import { Calendar, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <SectionHeader
              title="About Me"
              subtitle="My journey in technology"
            />
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                With over 3 years of experience in software development, I
                specialize in creating robust web and mobile applications that
                deliver exceptional user experiences and measurable business
                results.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach combines technical expertise with a deep
                understanding of user needs, ensuring that every solution I
                build is both powerful and intuitive.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">3+ Years</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Kenya</h4>
                      <p className="text-sm text-muted-foreground">
                        Location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">
                Currently Open To{" "}
                <span className="text-primary">Opportunities</span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                    <div className="bg-green-500 rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Full-time roles</h4>
                    <p className="text-muted-foreground text-sm">
                      Web & Mobile Development positions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                    <div className="bg-green-500 rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Freelance & contract work</h4>
                    <p className="text-muted-foreground text-sm">
                      Let's build something awesome together
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                    <div className="bg-green-500 rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovative collaborations</h4>
                    <p className="text-muted-foreground text-sm">
                      AI-powered or cutting-edge tech projects
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-1">
                    <div className="bg-green-500 rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Startup partnerships</h4>
                    <p className="text-muted-foreground text-sm">
                      Looking for a skilled developer with vision
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  &quot;If its exciting, challenging, or just plain genius, I want
                  to be part of it. Let&apos;s discuss how we can work together.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 