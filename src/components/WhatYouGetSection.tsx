import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, MessageCircle, Video, Lightbulb } from "lucide-react";

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

const features: FeatureItem[] = [
  {
    icon: Users,
    title: "Expert Coaching",
    description: "7 days of intensive training by 2 senior marketing executives with proven techniques",
    image: "/what you will get/Expert Coaching.png",
    alt: "Coach guiding attendees during a master class"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Workbooks",
    description: "Detailed notes translated into actionable insights to get you started immediately",
    image: "/what you will get/Comprehensive Workbooks.png",
    alt: "Printed workbooks and notes on a desk"
  },
  {
    icon: Video,
    title: "Hands-On Skills",
    description: "Master filming, lighting, sound, editing, scheduling, and livestreaming",
    image: "/what you will get/Hands-On Skills.png",
    alt: "Attendee filming with camera and lighting setup"
  },
  {
    icon: Lightbulb,
    title: "Strategic Knowledge",
    description: "Learn platform selection, storytelling, hooks, and viral content formats",
    image: "/what you will get/Strategic Knowledge.png",
    alt: "Lightbulb icon over content strategy board"
  },
  {
    icon: MessageCircle,
    title: "Daily Q&A Sessions",
    description: "Get your questions answered with full support throughout the masterclass",
    image: "/what you will get/Daily Q&A Sessions.png",
    alt: "Group Q&A session with mentors"
  },
  {
    icon: Trophy,
    title: "Competitions & Prizes",
    description: "Compete with peers and win prizes for outstanding content creation",
    image: "/what you will get/Competitions & Prizes.png",
    alt: "Winners holding a trophy on stage"
  }
];
export const WhatYouGetSection = () => {
  return <section id="what-you-get" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In just one week, our experienced coaches will deliver an intensive hands-on program that will take you to a professional level
            </p>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Features Grid with Visuals */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="overflow-hidden hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30">
                  {feature.image && (
                    <div className="aspect-[3/4] w-full overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.alt ?? feature.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quote */}
          
        </div>
      </div>
    </section>;
};