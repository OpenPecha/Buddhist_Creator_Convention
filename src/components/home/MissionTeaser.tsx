import { Reveal } from "@/components/shared/Reveal";

export const MissionTeaser = () => {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <Reveal className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Let's spread Buddhist wisdom and compassion to{" "}
              <span className="text-primary">100 million people</span> by 2030
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every gathering, award, and masterclass we run is one step toward that goal — helping creators
              turn practice into content the world can find.
            </p>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <img
              src="/images/home/join-buddha-line.jpg"
              alt="Line illustration of the Buddha"
              className="w-full max-w-md mx-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
