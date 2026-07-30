import { usePageMeta } from "@/hooks/use-page-meta";
import { AwardsHero } from "@/components/awards/AwardsHero";
import { WinnersRoll } from "@/components/awards/WinnersRoll";
import { InfluencerOfTheYear } from "@/components/awards/InfluencerOfTheYear";
import { CategoryWinners } from "@/components/awards/CategoryWinners";
import { DocumentaryFeature } from "@/components/shared/DocumentaryFeature";
import { AwardsCTA } from "@/components/awards/AwardsCTA";

const Awards = () => {
  usePageMeta({
    title: "Awards & Winners",
    description:
      "Meet the winners of the Buddhist Influencer of the Year 2026 and the four category awards presented at BCC 2026 in Bodh Gaya.",
  });

  return (
    <div>
      <AwardsHero />
      <WinnersRoll />
      <InfluencerOfTheYear />
      <CategoryWinners />
      <DocumentaryFeature size="compact" />
      <AwardsCTA />
    </div>
  );
};

export default Awards;
