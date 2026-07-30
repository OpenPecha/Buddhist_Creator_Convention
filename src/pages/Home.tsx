import { usePageMeta } from "@/hooks/use-page-meta";
import { HomeHero } from "@/components/home/HomeHero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { MissionTeaser } from "@/components/home/MissionTeaser";
import { ProgramsTeaser } from "@/components/home/ProgramsTeaser";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { PastHighlight } from "@/components/home/PastHighlight";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { GallerySection } from "@/components/home/GallerySection";
import { CreatorsVoice } from "@/components/home/CreatorsVoice";
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
      <MissionTeaser />
      <ProgramsTeaser />
      <UpcomingEvents />
      <PastHighlight />
      <ChallengesSection />
      <TechnologySection />
      <GallerySection />
      <CreatorsVoice />
      <NewsletterSection />
    </div>
  );
};

export default Home;
