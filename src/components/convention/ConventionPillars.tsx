import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const PILLARS = [
  {
    title: "Community Day",
    description:
      "Opening ceremony, keynote addresses, a panel on the future of Buddhism in the digital age, lightning talks, and community circles.",
  },
  {
    title: "Masterclass: Marketing the Dharma",
    description:
      "Six intensive days covering storytelling, validation, AI as a creative partner, virality through consistency, monetisation, and on-camera presence.",
  },
  {
    title: "Buddhist Influencer of the Year Awards",
    description:
      "Recognition and celebration — awards, certificates, and a closing gala honoring the year's most impactful Buddhist creators.",
  },
];

export const ConventionPillars = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="The Program"
          title="Nine Days, Three Pillars"
          description="In January 2026, over a hundred Buddhist creators from more than a dozen countries gathered in Bodh Gaya — the first global sangha of its kind."
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border/50 bg-card p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
