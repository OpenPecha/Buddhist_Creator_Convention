import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const audience = [
  "Monks and nuns from different traditions wishing to expand their reach",
  "Lay practitioners passionate about sharing the Dharma",
  "Individuals managing social media accounts for Rinpoches, monasteries, or Buddhist organizations",
  "Buddhist content creators seeking to deepen their impact and connect with a global audience"
];

export const WhoIsThisForSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
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

          {/* Audience List */}
          <Card className="p-8 md:p-12 shadow-soft border-border/50">
            <ul className="space-y-6">
              {audience.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

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
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Stay accommodation for the entire workshop duration",
                "Meals throughout the workshop",
                "All workshop-related materials",
                "Scholarship assistance for needy applicants (travel expenses)"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
