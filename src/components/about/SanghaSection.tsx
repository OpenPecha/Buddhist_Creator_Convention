import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const TEAM = [
  { name: "Tenzin Palkyi", image: "/images/about/sangha-1.jpg" },
  { name: "Tenzin Noryang", image: "/images/about/sangha-2.jpg" },
  { name: "Yash", image: "/images/about/sangha-3.jpg" },
];

export const SanghaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Our People" title="The Sangha Behind the Mission" className="mb-14" />
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {TEAM.map((person, i) => (
            <Reveal key={person.name} delay={i * 100} className="w-40 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/15 shadow-soft">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="mt-4 font-semibold text-foreground">{person.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
