import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialGrid } from "@/components/shared/TestimonialGrid";
import { CREATOR_TESTIMONIALS, RINPOCHE_TESTIMONIALS } from "@/data/testimonials";

export const ConventionTestimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Community Voices" title="Creators' Testimonials" className="mb-12" />
        <TestimonialGrid testimonials={CREATOR_TESTIMONIALS} className="mx-auto mb-16 max-w-6xl" />

        {RINPOCHE_TESTIMONIALS.length > 0 && (
          <>
            <SectionHeading eyebrow="Words of Guidance" title="Rinpoche Testimonials" className="mb-12" />
            <TestimonialGrid testimonials={RINPOCHE_TESTIMONIALS} className="mx-auto max-w-6xl" />
          </>
        )}
      </div>
    </section>
  );
};
