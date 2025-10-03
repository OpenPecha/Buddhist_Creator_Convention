import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { WhoIsThisForSection } from "@/components/WhoIsThisForSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <WhatYouGetSection />
      <WhoIsThisForSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
