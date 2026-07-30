import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import milanImage from "@/assets/milan.jpg";
import drJaiminImage from "@/assets/jaimin.jpg";

const COACHES = [
  {
    name: "Milan Amin",
    title: "Senior Brand Strategist",
    image: milanImage,
    bio: "With over 15 years in marketing and a decade in C-level leadership, Milan has led global brand and strategy for multi-billion-dollar companies, spearheading landmark Web3 partnerships with Cristiano Ronaldo, Lionel Messi, Formula 1, The GRAMMYs, and the Cannes Film Festival. A Buddhist practitioner for eight years, he has trained under Theravāda masters in Thailand and studied with Vajrayāna and Dzogchen teachers from Tibet and Nepal.",
  },
  {
    name: "Dr. Jaimin Shukla",
    title: "Global Chief Marketing Officer",
    image: drJaiminImage,
    bio: "Dr. Jaimin Shukla is a Global Chief Marketing Officer with 14 years of experience driving business growth through multi-channel marketing and technology. A Shell-sponsored PhD from University College London, he is the founder of The School of Insights and author of Transform Every Moment. A Buddhist practitioner for eight years, he has studied with teachers across Thailand, Japan, and Tibet.",
  },
];

const CoachCard = ({ coach }: { coach: (typeof COACHES)[number] }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-2xl border border-border/50 bg-card shadow-soft p-7 flex flex-col items-center text-center gap-4">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
        <img src={coach.image} alt={coach.name} className="w-full h-full object-cover object-top" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{coach.name}</h3>
        <p className="text-primary text-sm font-medium">{coach.title}</p>
      </div>
      <p className={`text-muted-foreground text-sm leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>{coach.bio}</p>
      <Button variant="outline" size="sm" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Read less" : "Read more"}
      </Button>
    </div>
  );
};

export const CoachesRecap = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="What 2026 Included" title="Led by Our 2026 Coaches" className="mb-14" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {COACHES.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 100}>
              <CoachCard coach={coach} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
