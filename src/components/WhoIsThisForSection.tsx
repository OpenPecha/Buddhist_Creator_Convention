import { Card } from "@/components/ui/card";

const audienceVisuals = [
  {
    title: "Monastics expanding their reach",
    image: "/Who is this for/Monastics expanding their reach.png",
    alt: "Monk recording content with camera setup"
  },
  {
    title: "Passionate lay practitioners",
    image: "/Who is this for/Passionate lay practitioners.png",
    alt: "Lay practitioner creating video content"
  },
  {
    title: "Organization social media managers",
    image: "/Who is this for/Organization social media managers.png",
    alt: "Team collaborating on social strategy"
  },
  {
    title: "Buddhist content creators",
    image: "/Who is this for/Buddhist content creators.png",
    alt: "Creator presenting to an audience"
  }
];

export const WhoIsThisForSection = () => {
  return (
    <section className="py-16 bg-gradient-section">
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
          <div className="text-center space-y-4 mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What We Will Provide
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>
          <p className="text-center text-foreground/90 max-w-4xl mx-auto mt-4 text-lg md:text-xl">
            We are pleased to offer sponsored accommodation, three daily meals, and all workshop materials free of charge. Additionally, travel scholarships will be granted to selected applicants.
          </p>
          <Card className="p-8 bg-secondary/5 border-secondary/20 shadow-soft">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Accommodation", image: "/accomodation.jpg", alt: "Comfortable accommodation rooms" },
                { title: "Meals", image: "/meals.png", alt: "Nutritious meals served to attendees" },
                { title: "Materials", image: "/materials.png", alt: "Workshop materials and stationery" },
                { title: "Scholarship Support", image: "/scholarship.png", alt: "Scholarship support for travel" }
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
