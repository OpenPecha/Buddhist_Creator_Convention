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
            Meet the community chosen winners of 2026
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mx-auto max-w-6xl space-y-6">
          {/* Headline winner */}
          <Reveal>
            <Link
              to={`/awards#${INFLUENCER_OF_THE_YEAR.id}`}
              className="group relative flex min-h-[36rem] overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-300 hover:ring-accent/40 sm:min-h-[30rem]"
            >
              <div className="absolute inset-0">
                <WinnerPortrait
                  name={INFLUENCER_OF_THE_YEAR.name}
                  photo={INFLUENCER_OF_THE_YEAR.photo}
                  className="h-full w-full"
                  monogramClassName="text-6xl sm:text-7xl"
                />
              </div>

              <span className="absolute left-5 top-5 z-10 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground shadow-elevated sm:left-6 sm:top-6">
                Winner 2026
              </span>

              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 pt-16 sm:p-8 sm:pt-24 md:max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {INFLUENCER_OF_THE_YEAR.category}
                </p>
                <div className="mt-2">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                    {INFLUENCER_OF_THE_YEAR.honorific} {INFLUENCER_OF_THE_YEAR.name}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-white/70">
                    {INFLUENCER_OF_THE_YEAR.affiliation}
                  </p>
                </div>
                {INFLUENCER_OF_THE_YEAR.stats && (
                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    {INFLUENCER_OF_THE_YEAR.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-xl sm:text-2xl font-semibold text-accent">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-white/65">{stat.label}</p>
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
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-accent/40"
                >
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="aspect-[4/5] w-full"
                    monogramClassName="text-4xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent">
                      {winner.shortCategory}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-semibold text-white">{winner.name}</p>
                    {winner.affiliation && (
                      <p className="text-xs sm:text-sm text-white/70">{winner.affiliation}</p>
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
