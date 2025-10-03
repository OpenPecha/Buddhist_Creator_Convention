import { Card } from "@/components/ui/card";
import drJaiminImage from "@/assets/dr-jaimin.webp";
import milanImage from "@/assets/milan.jpeg";

const coaches = [
  {
    name: "Dr. Jaimin Shukla",
    title: "Senior Marketing Executive",
    image: drJaiminImage,
    bio: "With over 15 years of experience in digital marketing and content strategy, our lead coach has helped numerous organizations amplify their online presence and connect with global audiences."
  },
  {
    name: "Milan Amin",
    title: "Senior Marketing Executive",
    image: milanImage,
    bio: "A seasoned expert in social media strategy and brand storytelling, our second coach brings proven techniques and real-world success in building engaged digital communities."
  }
];

export const CoachesSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
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
            {coaches.map((coach, index) => (
              <Card key={index} className="p-8 hover:shadow-elevated transition-all duration-300 border-border/50">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                    <img 
                      src={coach.image} 
                      alt={`${coach.name} - ${coach.title}`}
                      className="w-full h-full object-cover"
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
                  <p className="text-muted-foreground leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
