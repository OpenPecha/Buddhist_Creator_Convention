import { usePageMeta } from "@/hooks/use-page-meta";
import { HomeHero } from "@/components/home/HomeHero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { DocumentaryFeature } from "@/components/shared/DocumentaryFeature";
import { MissionTeaser } from "@/components/home/MissionTeaser";
import { AwardsSpotlight } from "@/components/home/AwardsSpotlight";
import { ContributeTeaser } from "@/components/home/ContributeTeaser";
import { ProgramsTeaser } from "@/components/home/ProgramsTeaser";
import { CreatorsVoice } from "@/components/home/CreatorsVoice";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { PartnerProductsSection } from "@/components/home/PartnerProductsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { PastHighlight } from "@/components/home/PastHighlight";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Home = () => {
  usePageMeta({
    title: "Buddhist Creators",
    description:
      "A worldwide community of monastics, practitioners, and storytellers bringing the Dharma to the digital age.",
  });

  return (
    <div>
      <HomeHero />
      <StatsStrip />
      <DocumentaryFeature />
      <MissionTeaser />
      <AwardsSpotlight />
      <ContributeTeaser />
      <ProgramsTeaser />
      <CreatorsVoice />
      <ChallengesSection />
      <PartnerProductsSection />
      <GallerySection />
      <PastHighlight />
      <UpcomingEvents />
      <NewsletterSection />
    </div>
  );
};

export default Home;
