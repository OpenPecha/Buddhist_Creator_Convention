import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const MOMENTS = [
  "Arrival, networking & opening ceremony",
  "Community circles",
  "Panel discussion",
  "Lightning talks",
];

export const PhaseHighlight = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Watch" title="Phase 1: Community Building & Knowledge Exchange" className="mb-12" />
        <Reveal className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-2xl overflow-hidden shadow-elevated aspect-video">
            <video
              controls
              preload="none"
              poster="/images/convention/phase1-poster.jpg"
              className="w-full h-full object-cover bg-black"
            >
              <source src="/images/convention/phase1-highlight.mp4" type="video/mp4" />
            </video>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {MOMENTS.map((moment) => (
              <li key={moment} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {moment}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
