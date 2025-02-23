export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}