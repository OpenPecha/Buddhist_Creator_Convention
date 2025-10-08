import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { CoachesSection } from "@/components/CoachesSection";
import { WhoIsThisForSection } from "@/components/WhoIsThisForSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Floating Register Now button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated"
          asChild
        >
          <a href="#registration" aria-label="Register Now">Register Now</a>
        </Button>
      </div>
      <Hero />
      <AboutSection />
      <WhatYouGetSection />
      <CoachesSection />
      <WhoIsThisForSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
