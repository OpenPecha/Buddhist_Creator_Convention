import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialGrid } from "@/components/shared/TestimonialGrid";
import { CREATOR_TESTIMONIALS } from "@/data/testimonials";

export const CreatorsVoice = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Creator's Voice" title="Stories from the Community" className="mb-14" />
        <TestimonialGrid testimonials={CREATOR_TESTIMONIALS} className="max-w-6xl mx-auto" />
      </div>
    </section>
  );
};
