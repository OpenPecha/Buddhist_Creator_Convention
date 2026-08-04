import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { COLLABORATORS } from "@/data/partners";

interface CollaboratorsProps {
  title?: string;
  eyebrow?: string;
}

export const Collaborators = ({
  title = "Partnering with Organizations Dedicated to the Dharma",
  eyebrow = "Our Collaboration",
}: CollaboratorsProps) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow={eyebrow} title={title} className="mb-14" />
        <Reveal className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-4xl mx-auto">
          {COLLABORATORS.map((partner) =>
            partner.logo ? (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                loading="lazy"
              />
            ) : (
              <span key={partner.id} className="text-lg font-semibold text-muted-foreground/80">
                {partner.name}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
};
