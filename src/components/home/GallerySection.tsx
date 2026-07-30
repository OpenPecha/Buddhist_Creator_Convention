import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const GALLERY = [
  { src: "/images/home/gallery-1.jpg", alt: "Creator capturing a moment on her phone at a community gathering" },
  { src: "/images/home/gallery-2.jpg", alt: "A creator smiling with fellow community members" },
  { src: "/images/home/gallery-3.jpg", alt: "Creators in conversation at a Buddhist Creators event" },
];

export const GallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Media & Stories"
          title="A Global Community of Buddhist Creators"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={i * 80} className={i === 1 ? "sm:-translate-y-4" : undefined}>
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-[3/4] group">
                <img
                  src={item.src}
                  alt={item.alt}
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
