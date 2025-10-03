import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About the Masterclass
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <Card className="p-8 md:p-12 shadow-soft border-border/50">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                In a world seeking wisdom, our mission is to <strong className="text-primary">empower Buddhist teachers, monastics, and practitioners</strong> to share the timeless teachings of the Dharma on modern digital platforms. This intensive event is designed to bridge the gap between profound, authentic wisdom, and the channels of today's world.
              </p>
              
              <p>
                Over the course of an immersive <strong className="text-secondary">7-day hands-on masterclass</strong>, you will learn practical skills in content creation, mindful social media strategy, compelling storytelling, and video production. Our goal is to help you create content that is authentic, engaging, and beneficial for a global audience.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pt-8 border-t border-border">
              <p className="text-xl md:text-2xl italic text-secondary font-light text-center leading-relaxed">
                "In the Buddha's time, a teaching could travel from one village to another on foot. Today, a teaching can travel from one continent to another in seconds."
              </p>
            </blockquote>
          </Card>

          {/* Convention Notice */}
          <Card className="p-6 bg-gradient-hero text-primary-foreground border-0 shadow-elevated">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">2-Day Convention</h3>
              <p className="text-primary-foreground/90">Dates Coming Soon</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
