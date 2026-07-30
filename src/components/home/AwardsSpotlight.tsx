import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import { INFLUENCER_OF_THE_YEAR, CATEGORY_WINNERS } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

/** Home-page spotlight on the BCC 2026 award winners. */
export const AwardsSpotlight = () => {
  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-secondary py-16 text-secondary-foreground scroll-mt-20 sm:py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-accent/30">
            <Trophy className="h-4 w-4" />
            BCC 2026 Awards
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white text-balance">
            Meet the creators we honoured in Bodh Gaya
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* Headline winner */}
          <Reveal>
            <Link
              to={`/awards#${INFLUENCER_OF_THE_YEAR.id}`}
              className="group grid gap-6 overflow-hidden rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-accent/40 sm:p-6 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-8 md:p-8"
            >
              <div className="relative mx-auto w-full max-w-[16rem] md:mx-0 md:max-w-none">
                <WinnerPortrait
                  name={INFLUENCER_OF_THE_YEAR.name}
                  photo={INFLUENCER_OF_THE_YEAR.photo}
                  className="aspect-[4/5] w-full rounded-2xl ring-2 ring-accent/50"
                  monogramClassName="text-5xl sm:text-6xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground shadow-elevated">
                  Winner 2026
                </span>
              </div>

              <div className="flex flex-col justify-center space-y-4 pt-4 md:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {INFLUENCER_OF_THE_YEAR.category}
                </p>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                    {INFLUENCER_OF_THE_YEAR.honorific} {INFLUENCER_OF_THE_YEAR.name}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-secondary-foreground/70">
                    {INFLUENCER_OF_THE_YEAR.affiliation}
                  </p>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-secondary-foreground/85">
                  {INFLUENCER_OF_THE_YEAR.citation}
                </p>
                {INFLUENCER_OF_THE_YEAR.stats && (
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {INFLUENCER_OF_THE_YEAR.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-xl sm:text-2xl font-semibold text-accent">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-secondary-foreground/65">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 pt-1 font-medium text-accent transition-all group-hover:gap-3">
                  Read his story <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Category winners */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_WINNERS.map((winner, i) => (
              <Reveal key={winner.id} delay={i * 80} className="h-full">
                <Link
                  to={`/awards#${winner.id}`}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-accent/40 lg:flex-col lg:items-start lg:gap-3 lg:p-5"
                >
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="h-16 w-16 shrink-0 rounded-xl sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20"
                    monogramClassName="text-lg"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent">
                      {winner.shortCategory}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-semibold text-white">{winner.name}</p>
                    {winner.affiliation && (
                      <p className="text-xs sm:text-sm text-secondary-foreground/65">{winner.affiliation}</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="mt-10 text-center md:mt-14">
          <Button
            size="lg"
            className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
            asChild
          >
            <Link to="/awards">
              See all the winners <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
