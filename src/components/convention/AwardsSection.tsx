import { Reveal } from "@/components/shared/Reveal";

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 md:py-28 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
          <Reveal className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="/images/home/award-ceremony.jpg"
              alt="Two monastics presenting the Buddhist Influencer of the Year award on stage"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Honour</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Buddhist Influencer of the Year
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For the first time, we honored those who have dedicated themselves to spreading the Dharma through
              digital media. The award recognizes outstanding Buddhist influencers who have made a significant
              impact bringing Buddhist teachings into the digital age.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The 2026 awards were presented during the closing ceremony on 6 February 2026, celebrating creators
              transforming lives through their digital presence and dedication to the Dharma.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
