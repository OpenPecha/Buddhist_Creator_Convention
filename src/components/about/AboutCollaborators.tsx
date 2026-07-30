import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const LOGOS = [
  { src: "/images/about/collaborator-shechen.png", alt: "Shechen Monastery" },
  { src: "/images/about/collaborator-indrajala.png", alt: "Indrajala" },
  { src: "/images/about/collaborator-khyentse-foundation.png", alt: "Khyentse Foundation" },
  { src: "/images/about/collaborator-partner.png", alt: "Community partner organisation" },
];

export const AboutCollaborators = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Collaboration"
          title="Partnering with Organizations Dedicated to the Dharma"
          className="mb-14"
        />
        <Reveal className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-4xl mx-auto">
          {LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              loading="lazy"
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
};
