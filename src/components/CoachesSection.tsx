import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import drJaiminImage from "@/assets/jaimin.jpg";
import milanImage from "@/assets/milan.jpg";

const coaches = [
  {
    name: "Milan Amin",
    title: "Senior Brand Strategist",
    image: milanImage,
    bio: "With over <b>15 years in marketing</b> and a <b>decade in C-level leadership</b>, Milan has led <b>global brand and strategy</b> for multi-billion-dollar companies, spearheading <b>landmark Web3 partnerships</b> with Cristiano Ronaldo, Lionel Messi, Formula 1, The GRAMMYs, and the Cannes Film Festival. Based in Dubai, he has advised 30+ startups, governments, and global consultancies across Crypto, AI, and FinTech. He’s a <b>Buddhist practitioner for eight years</b>, and has <b>trained under Theravāda masters</b> in Thailand, completing several intense retreats and studied with <b>Vajrayāna and Dzogchen teachers</b> from Tibet and Nepal. A lifelong pilgrim, he has journeyed to Nepal, Wutaishan, Putuoshan, Tso Pema, Pharping, and Maratika Cave, undertaking yearly solo retreats devoted to realisation and compassion."
  },
  {
    name: "Dr. Jaimin Shukla",
    title: "Global Chief Marketing Officer",
    image: drJaiminImage,
    bio: "Dr. Jaimin Shukla is a <b>Global Chief Marketing Officer</b> with <b>14 years of experience</b> driving exponential business growth through multi-channel marketing and technology. A Shell-sponsored <b>PhD from University College London</b>, his research in advanced fuel systems is published internationally. He is the founder of <b>The School of Insights</b> and author of <b>Transform Every Moment</b>. He’s also been a <b>Buddhist practitioner for eight years</b>, and has studied with <b>Theravāda teachers in Thailand, Zen masters in Japan, and Vajrayāna teachers from Tibet</b>, undertaking pilgrimages across Nepal, Char Dham, Bodhgaya, Wutaishan, and Padmasambhava’s sacred caves. Together with Milan, he has received the <b>blessings of His Holiness the Dalai Lama</b> and continues to travel annually on sacred retreats to <b>share authentic Buddhist wisdom with the modern world</b>."
  },
];

function CoachCard({ coach }: { coach: { name: string; title: string; image: string; bio: string } }) {
  const [expanded, setExpanded] = useState(false);
  const isTruncated = coach.bio.length > 180;

  return (
    <Card key={coach.name} className="p-8 hover:shadow-elevated transition-all duration-300 border-border/50">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
          <img 
            src={coach.image} 
            alt={`${coach.name} - ${coach.title}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">
            {coach.name}
          </h3>
          <p className="text-primary font-semibold">
            {coach.title}
          </p>
        </div>
        <p
          className="text-muted-foreground leading-relaxed"
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
          dangerouslySetInnerHTML={{ __html: coach.bio }}
        />
        {isTruncated && (
          <Button variant="outline" size="sm" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Read less" : "Read more"}
          </Button>
        )}
      </div>
    </Card>
  );
}

export const CoachesSection = () => {
  return (
    <section id="coaches" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet Your Coaches
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from experienced marketing executives with proven track records
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Coaches Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
