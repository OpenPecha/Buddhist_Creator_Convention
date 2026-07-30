import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const PHOTOS = [
  { src: "/images/home/upcoming-gathering.jpg", alt: "Attendees dancing together at BCC 2026", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/home/gallery-1.jpg", alt: "Creator capturing a moment on her phone", span: "" },
  { src: "/images/home/gallery-2.jpg", alt: "A creator smiling with fellow attendees", span: "" },
  { src: "/images/home/masterclass.jpg", alt: "A monastic and coach reviewing content on a tablet", span: "" },
  { src: "/images/home/gallery-3.jpg", alt: "Creators in conversation at the Convention", span: "" },
];

export const ConventionGallery = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Gallery" title="Moments from BCC 2026" className="mb-12" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 70} className={photo.span}>
              <div className="rounded-2xl overflow-hidden shadow-soft h-full aspect-square group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
