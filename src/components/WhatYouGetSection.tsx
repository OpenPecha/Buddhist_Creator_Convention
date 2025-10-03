import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, MessageCircle, Video, Lightbulb } from "lucide-react";
const features = [{
  icon: Users,
  title: "Expert Coaching",
  description: "7 days of intensive training by 2 senior marketing executives with proven techniques"
}, {
  icon: BookOpen,
  title: "Comprehensive Workbooks",
  description: "Detailed notes translated into actionable insights to get you started immediately"
}, {
  icon: Video,
  title: "Hands-On Skills",
  description: "Master filming, lighting, sound, editing, scheduling, and livestreaming"
}, {
  icon: Lightbulb,
  title: "Strategic Knowledge",
  description: "Learn platform selection, storytelling, hooks, and viral content formats"
}, {
  icon: MessageCircle,
  title: "Daily Q&A Sessions",
  description: "Get your questions answered with full support throughout the masterclass"
}, {
  icon: Trophy,
  title: "Competitions & Prizes",
  description: "Compete with peers and win prizes for outstanding content creation"
}];
export const WhatYouGetSection = () => {
  return <section id="what-you-get" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What You'll Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In just one week, our experienced coaches will deliver an intensive hands-on program that will take you to a professional level
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>;
          })}
          </div>

          {/* Quote */}
          
        </div>
      </div>
    </section>;
};