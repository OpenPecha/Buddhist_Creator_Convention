import { PageHero } from "@/components/shared/PageHero";
import { CreatorSection } from "@/components/get-involved/CreatorSection";
import { PartnerSection } from "@/components/get-involved/PartnerSection";
import { TeamSection } from "@/components/get-involved/TeamSection";
import { usePageMeta } from "@/hooks/use-page-meta";

const GetInvolved = () => {
  usePageMeta({
    title: "Get Involved",
    description: "Join a challenge as a creator, partner with us as an institution, or join our team.",
  });

  return (
    <div>
      <PageHero
        image="/images/home/join-globe.jpg"
        imageAlt="Buddhist creators from around the world connecting online"
        eyebrow="Get Involved"
        title="There are many ways to help carry the Dharma into the digital age."
        description="Whether you create, lead an institution, or want to join us behind the scenes — there's a place for you in this community."
      />
      <CreatorSection />
      <PartnerSection />
      <TeamSection />
    </div>
  );
};

export default GetInvolved;
