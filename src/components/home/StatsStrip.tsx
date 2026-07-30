import { Reveal } from "@/components/shared/Reveal";

const STATS = [
  { value: "1M+", label: "Total Engagement" },
  { value: "12+", label: "Countries United" },
  { value: "1,000+", label: "Active Creators" },
];

export const StatsStrip = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-10 md:py-12">
      <div className="container mx-auto px-4">
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm md:text-base text-secondary-foreground/75 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
