import { Code, Layers, Cloud, Zap, Shield, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Modern Web & Mobile Apps",
    description: "Building robust, scalable, and beautiful applications using the latest technologies and best practices.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From ideation to deployment, I deliver complete solutions tailored to your business needs.",
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Expertise",
    description: "Skilled in cloud architecture, CI/CD, and scalable infrastructure for high-availability applications.",
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast load times, smooth animations, and optimal user experiences across all devices.",
    color: "from-yellow-500/10 to-yellow-600/5",
    iconColor: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Security & Best Practices",
    description: "Implementing security best practices and following industry standards for reliable applications.",
    color: "from-red-500/10 to-red-600/5",
    iconColor: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating seamless experiences that work beautifully on desktop, tablet, and mobile devices.",
    color: "from-pink-500/10 to-pink-600/5",
    iconColor: "text-pink-500",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core competencies and value I bring to your project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className={`h-6 w-6 ${skill.iconColor}`} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
