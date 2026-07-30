import { PageHero } from "@/components/shared/PageHero";
import { ProgramDetailCard } from "@/components/programs/ProgramDetailCard";
import { MasterclassDetail } from "@/components/programs/MasterclassDetail";
import { usePageMeta } from "@/hooks/use-page-meta";

const Programs = () => {
  usePageMeta({
    title: "Programs",
    description: "Convention, Award, and Masterclass — the three programs building the Buddhist Creators movement.",
  });

  return (
    <div>
      <PageHero
        image="/images/home/award-group.jpg"
        imageAlt="Buddhist Creators community gathered at the Mahabodhi Temple in Bodh Gaya"
        eyebrow="Our Programs"
        title="This is where Buddhist creators become a movement."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">
          <ProgramDetailCard
            title="Buddhist Creators Convention"
            description="The annual global gathering of the Buddhist Creators community — nine days of teaching, creation, and connection in person."
            bullets={["9 days in Bodh Gaya, India", "Community Day, Masterclass & Awards", "Open to monastics, lay practitioners, and creators"]}
            image="/images/home/bcc-recap.jpg"
            to="/convention"
            ctaLabel="Explore the Convention"
          />
          <ProgramDetailCard
            title="Buddhist Influencer of the Year"
            description="A global award ceremony honoring the Buddhist creator who best represents the movement's voice to the world that year."
            bullets={["Presented at the Convention's closing ceremony", "Recognizes impact, integrity, and reach", "The recipient serves as the movement's ambassador for the year"]}
            image="/images/home/award-ceremony.jpg"
            to="/awards"
            ctaLabel="Meet the Winners"
            reverse
            delay={80}
          />
          <ProgramDetailCard
            title="WeBuddhist Influencer Masterclass"
            description="An intensive training — 80% practicals, 20% theory — equipping creators with the skills to share the Dharma online."
            bullets={["Hands-on filming, storytelling & strategy", "Small-group coaching from senior marketers", "Runs multiple times a year at partner institutes"]}
            image="/images/home/masterclass.jpg"
            to="/programs#masterclass-2026"
            ctaLabel="See the Next Masterclass"
            delay={160}
          />
        </div>
      </section>

      <MasterclassDetail />
    </div>
  );
};

export default Programs;
