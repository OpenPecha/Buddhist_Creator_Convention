import { Link } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import { INFLUENCER_OF_THE_YEAR, CATEGORY_WINNERS, AWARD_CEREMONY } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

export const AwardsSection = () => {
  return (
    <section id="awards" className="bg-background py-16 scroll-mt-20 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Trophy className="h-4 w-4" />
            The Honour
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Buddhist Influencer of the Year 2026
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-hero" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            For the first time, we honoured those who have dedicated themselves to spreading the Dharma through
            digital media — five awards presented at the closing ceremony on {AWARD_CEREMONY.date}.
          </p>
        </Reveal>

        <div className="mx-auto max-w-6xl space-y-6">
          <Reveal>
            <Link
              to={`/awards#${INFLUENCER_OF_THE_YEAR.id}`}
              className="group grid gap-6 overflow-hidden rounded-3xl border border-border/50 bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-elevated sm:p-6 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-8 md:p-8"
            >
              <div className="relative mx-auto w-full max-w-[15rem] md:mx-0 md:max-w-none">
                <WinnerPortrait
                  name={INFLUENCER_OF_THE_YEAR.name}
                  photo={INFLUENCER_OF_THE_YEAR.photo}
                  className="aspect-[4/5] w-full rounded-2xl shadow-soft"
                  monogramClassName="text-5xl sm:text-6xl"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground shadow-elevated">
                  Winner 2026
                </span>
              </div>

              <div className="flex flex-col justify-center space-y-4 pt-4 md:pt-0">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
                    {INFLUENCER_OF_THE_YEAR.honorific} {INFLUENCER_OF_THE_YEAR.name}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                    {INFLUENCER_OF_THE_YEAR.affiliation}
                  </p>
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-foreground/85">
                  {INFLUENCER_OF_THE_YEAR.citation}
                </p>
                {INFLUENCER_OF_THE_YEAR.stats && (
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {INFLUENCER_OF_THE_YEAR.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-xl sm:text-2xl font-semibold text-primary">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 pt-1 font-medium text-primary transition-all group-hover:gap-3">
                  Read his story <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_WINNERS.map((winner, i) => (
              <Reveal key={winner.id} delay={i * 80} className="h-full">
                <Link
                  to={`/awards#${winner.id}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border/50 bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated lg:flex-col lg:items-start lg:gap-3 lg:p-5"
                >
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="h-16 w-16 shrink-0 rounded-xl sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20"
                    monogramClassName="text-lg"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary">
                      {winner.shortCategory}
                    </p>
                    <p className="mt-1 text-base sm:text-lg font-semibold text-foreground">{winner.name}</p>
                    {winner.affiliation && (
                      <p className="text-xs sm:text-sm text-muted-foreground">{winner.affiliation}</p>
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
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-light sm:w-auto"
            asChild
          >
            <Link to="/awards">
              Meet all the winners <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
