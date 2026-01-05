import { SectionHeader } from "@/components/section-header";
import { Calendar, MapPin, Code, Rocket, Users, Target } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { icon: Calendar, label: "Experience", value: `${siteConfig.experience}+ Years` },
  { icon: Code, label: "Projects", value: "20+" },
  { icon: Users, label: "Clients", value: "15+" },
  { icon: Rocket, label: "Technologies", value: "15+" },
];

const opportunities = [
  {
    title: "Full-time roles",
    description: "Web & Mobile Development positions",
    icon: Target,
  },
  {
    title: "Freelance & contract work",
    description: "Let's build something awesome together",
    icon: Code,
  },
  {
    title: "Innovative collaborations",
    description: "AI-powered or cutting-edge tech projects",
    icon: Rocket,
  },
  {
    title: "Startup partnerships",
    description: "Looking for a skilled developer with vision",
    icon: Users,
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: About Text */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Building Digital
              <span className="block text-primary">Experiences</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over {siteConfig.experience} years of experience in software development, I
                specialize in creating robust web and mobile applications that
                deliver exceptional user experiences and measurable business
                results.
              </p>
              <p>
                My approach combines technical expertise with a deep
                understanding of user needs, ensuring that every solution I
                build is both powerful and intuitive.
              </p>
            </div>
            
            {/* Location Badge */}
            <div className="flex items-center gap-3 pt-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{siteConfig.location.city}, {siteConfig.location.country}</p>
                <p className="text-sm text-muted-foreground">Based & Available Worldwide</p>
              </div>
            </div>
          </div>

          {/* Right: Opportunities Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Currently Open To
                </h3>
                <p className="text-primary font-semibold text-lg">
                  New Opportunities
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {opportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <opp.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{opp.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {opp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &quot;If it&apos;s exciting, challenging, or just plain genius, I want
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
