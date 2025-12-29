import { Card } from "@/components/ui/card";
import { Award, Star, Sparkles } from "lucide-react";

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Buddhist Influencer of the Year Award
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mt-6">
            Celebrating outstanding contributions to spreading Buddhism
            </p>
          </div>

          {/* Main Award Card */}
          <Card className="p-8 md:p-12 shadow-soft border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Award Image/Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
                  <div className="relative rounded-full shadow-elevated overflow-hidden w-64 h-64">
                    <img 
                      src="/award.png" 
                      alt="Buddhist Influencer Award" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4">
                    <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                  </div>
                  <div className="absolute -bottom-2 -left-2">
                    <Star className="w-10 h-10 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              {/* Right: Award Description */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      A Historic Recognition
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      For the first time, we honor those who have dedicated themselves to spreading the Dharma 
                      through digital media. This prestigious award recognizes outstanding Buddhist influencers who have made a significant impact in bringing Buddhist teachings to the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Closing Statement */}
          <div className="text-center space-y-4 pt-6">
            <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-soft">
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                These awards will be presented during the <strong>closing ceremony on February 6th, 2026</strong>, 
                celebrating the remarkable work of Buddhist Influencers who are transforming lives through 
                their digital presence and dedication to Buddhism.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

