import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { CoachesSection } from "@/components/CoachesSection";
import { WhoIsThisForSection } from "@/components/WhoIsThisForSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Top-left logo */}
      <div className="fixed top-4 left-4 z-50">
        <a href="/" aria-label="Home">
          <img
            src="/logo.png" style={{ margin: "10px 0px 0px 20px" }}
            alt="Buddhist Creator Convention logo"
            className="h-10 w-auto drop-shadow-md opacity-95 hover:opacity-100 transition"
          />
        </a>
      </div>
      {/* Floating Register Now button */}
      <div className="fixed top-6 right-8 z-50">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated"
          asChild
        >
          <a href="https://forms.gle/fjmqhZs2Ff1VxMap6" target="_blank" rel="noopener noreferrer" aria-label="Register Now">Register Now</a>
        </Button>
      </div>
      <Hero />
      <AboutSection />
      <WhatYouGetSection />
      <CoachesSection />
      <WhoIsThisForSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
