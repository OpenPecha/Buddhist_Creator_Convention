import { usePageMeta } from "@/hooks/use-page-meta";
import { ConventionHero } from "@/components/convention/ConventionHero";
import { DocumentaryFeature } from "@/components/shared/DocumentaryFeature";
import { ImageMarquee } from "@/components/shared/ImageMarquee";
import { ConventionPrograms } from "@/components/convention/ConventionPrograms";
import { PhaseOne } from "@/components/convention/PhaseOne";
import { PhaseTwo } from "@/components/convention/PhaseTwo";
import { PhaseThree } from "@/components/convention/PhaseThree";
import { ConventionTestimonials } from "@/components/convention/ConventionTestimonials";
import { Collaborators } from "@/components/shared/Collaborators";
import { ConventionGallery } from "@/components/convention/ConventionGallery";
import { NextConvention } from "@/components/convention/NextConvention";
import { ConventionFAQ } from "@/components/convention/ConventionFAQ";

const MARQUEE_IMAGES = [
  { src: "/images/convention/hero-1.jpg", alt: "Convention stage in Bodh Gaya" },
  { src: "/images/convention/hero-2.jpg", alt: "Speaker presenting to attendees" },
  { src: "/images/convention/hero-3.jpg", alt: "Attendees registering at the welcome desk" },
  { src: "/images/home/gallery-1.jpg", alt: "Creator capturing a moment on her phone" },
  { src: "/images/home/gallery-2.jpg", alt: "A creator smiling with fellow attendees" },
  { src: "/images/home/gallery-3.jpg", alt: "Creators in conversation at the Convention" },
  { src: "/images/home/masterclass.jpg", alt: "A monastic and coach reviewing content on a tablet" },
  { src: "/images/home/upcoming-gathering.jpg", alt: "Attendees dancing together at BCC 2026" },
  { src: "/images/awards/quinthup-pema-bhutia.jpg", alt: "Buddhist Influencer of the Year 2026 award presentation" },
  { src: "/images/awards/tashi-chosgon.jpg", alt: "Audience Choice Award presentation" },
  { src: "/images/awards/tenzin-chime.jpg", alt: "Most Creative Video Award presentation" },
  { src: "/images/awards/sonam-dolma.jpg", alt: "Most Followers Gained Award presentation" },
];

const Convention = () => {
  usePageMeta({
    title: "Convention",
    description: "BCC 2026 in Bodh Gaya — the first-ever global gathering of Buddhist creators — and what's next for 2027.",
  });

  return (
    <div>
      <ConventionHero />
      <DocumentaryFeature />
      <ImageMarquee images={MARQUEE_IMAGES} />
      <ConventionPrograms />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <ConventionTestimonials />
      <Collaborators eyebrow="Collaborators" title="Organisations Behind BCC 2026" />
      <ConventionGallery />
      <NextConvention />
      <ConventionFAQ />
    </div>
  );
};

export default Convention;
