import { Card } from "@/components/ui/card";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import drJaimin from "@/assets/dr-jaimin.webp";
import milan from "@/assets/milan.jpeg";

const audienceVisuals = [
  {
    title: "Monastics expanding their reach",
    image: coach1,
    alt: "Monk recording content with camera setup"
  },
  {
    title: "Passionate lay practitioners",
    image: coach2,
    alt: "Lay practitioner creating video content"
  },
  {
    title: "Organization social media managers",
    image: drJaimin,
    alt: "Team collaborating on social strategy"
  },
  {
    title: "Buddhist content creators",
    image: milan,
    alt: "Creator presenting to an audience"
  }
];

export const WhoIsThisForSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who Is This For?
            </h2>
            <p className="text-xl text-muted-foreground">
              This masterclass is for the growing community of Buddhist creators
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Audience Visual Grid */}
          <Card className="p-6 md:p-10 shadow-soft border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {audienceVisuals.map((item) => (
                <div key={item.title} className="rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img src={item.image} alt={item.alt ?? item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm md:text-base text-foreground/90 font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pt-8 border-t border-border">
              <p className="text-xl md:text-2xl italic text-primary text-center leading-relaxed">
                "If you have a heartfelt wish to spread wisdom and compassion online, this masterclass is for you."
              </p>
            </blockquote>
          </Card>

          {/* What We Provide */}
          <Card className="p-8 bg-secondary/5 border-secondary/20 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              What We Will Provide
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Accommodation", image: "/placeholder.svg", alt: "Comfortable accommodation rooms" },
                { title: "Meals", image: "/placeholder.svg", alt: "Nutritious meals served to attendees" },
                { title: "Materials", image: "/placeholder.svg", alt: "Workshop materials and stationery" },
                { title: "Scholarship Support", image: "/placeholder.svg", alt: "Scholarship support for travel" }
              ].map((item) => (
                <div key={item.title} className="rounded-xl overflow-hidden border border-secondary/20 bg-background">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img src={item.image} alt={item.alt ?? item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-foreground font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
