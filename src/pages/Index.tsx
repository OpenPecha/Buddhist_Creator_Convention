import { Hero } from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { CoachesSection } from "@/components/CoachesSection";
import { WhoIsThisForSection } from "@/components/WhoIsThisForSection";
import { AwardsSection } from "@/components/AwardsSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Top navigation bar with dynamic background on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" aria-label="Home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Buddhist Creator Convention logo"
              className="h-10 w-auto drop-shadow-md opacity-95 hover:opacity-100 transition"
            />
          </a>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated"
            asChild
          >
            <a href="https://forms.gle/fjmqhZs2Ff1VxMap6" target="_blank" rel="noopener noreferrer" aria-label="Register Now">Register Now</a>
          </Button>
        </div>
      </div>
      <Hero />
      <MissionSection />
      <AboutSection />
      <CoachesSection />
      <WhatYouGetSection />
      <AwardsSection />
      <WhoIsThisForSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
