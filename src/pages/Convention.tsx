import { usePageMeta } from "@/hooks/use-page-meta";
import { ConventionHero } from "@/components/convention/ConventionHero";
import { ConventionPillars } from "@/components/convention/ConventionPillars";
import { ProgramArchive } from "@/components/convention/ProgramArchive";
import { PhaseHighlight } from "@/components/convention/PhaseHighlight";
import { ConventionGallery } from "@/components/convention/ConventionGallery";
import { AwardsSection } from "@/components/convention/AwardsSection";
import { CoachesRecap } from "@/components/convention/CoachesRecap";
import { NextConvention } from "@/components/convention/NextConvention";
import { ConventionFAQ } from "@/components/convention/ConventionFAQ";

const Convention = () => {
  usePageMeta({
    title: "Convention",
    description: "BCC 2026 in Bodh Gaya — the first-ever global gathering of Buddhist creators — and what's next for 2027.",
  });

  return (
    <div>
      <ConventionHero />
      <ConventionPillars />
      <ProgramArchive />
      <PhaseHighlight />
      <ConventionGallery />
      <AwardsSection />
      <CoachesRecap />
      <NextConvention />
      <ConventionFAQ />
    </div>
  );
};

export default Convention;
