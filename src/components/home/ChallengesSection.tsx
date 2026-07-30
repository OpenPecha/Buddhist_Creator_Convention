import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const CHALLENGES = [
  {
    title: "Bodhisattva Challenge",
    description:
      "A year-long daily practice inspired by The Way of the Bodhisattva, delivered through the WeBuddhist Creator Assistant.",
    image: "/images/home/challenge-bodhisattva.jpg",
  },
  {
    title: "My Buddha Moment",
    description:
      "A creative reel challenge inviting practitioners to share a Buddhist teaching, verse, or moment that resonates with them.",
    image: "/images/home/challenge-buddha-moment.jpg",
  },
];

export const ChallengesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Join a Challenge" title="Practice, Create, Share" className="mb-14" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CHALLENGES.map((challenge, i) => (
            <Reveal key={challenge.title} delay={i * 100}>
              <div className="h-full rounded-2xl overflow-hidden border border-border/50 bg-card shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
