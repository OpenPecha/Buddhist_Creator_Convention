import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const SUPPORTING_IMAGES = [
  "/images/home/tech-assistant-tablet.jpg",
  "/images/home/tech-tibetan-app.jpg",
  "/images/home/tech-assistant-desktop.jpg",
  "/images/home/tech-assistant-mobile.jpg",
];

export const TechnologySection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Products"
          title="Technology that Powers our Mission"
          description="From daily practice to Dharma content, our products help Buddhist creators learn, create, and grow — all in one place."
          className="mb-14"
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/home/tech-webuddhist-brand.jpg"
                alt="WeBuddhist app shown across laptop, tablet, and phone"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <h3 className="text-2xl font-semibold text-foreground">WeBuddhist</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              An AI-guided companion for daily practice and content creation, built with Buddhist creators in mind —
              from scripting challenge reels to studying the Bodhicharyavatara, verse by verse.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <img
                src="/images/brand/app-store-badge.png"
                alt="Download on the App Store"
                className="h-10 sm:h-11 w-auto max-w-full shrink-0 object-contain"
              />
              <img
                src="/images/brand/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-10 sm:h-11 w-auto max-w-full shrink-0 object-contain"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {SUPPORTING_IMAGES.map((img) => (
            <div key={img} className="rounded-xl overflow-hidden border border-border/50 aspect-square">
              <img src={img} alt="WeBuddhist product screenshot" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
