import { Trophy, Quote, Instagram } from "lucide-react";
import { INFLUENCER_OF_THE_YEAR as WINNER, AWARD_CEREMONY } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { Reveal } from "@/components/shared/Reveal";

export const InfluencerOfTheYear = () => {
  return (
    <section
      id={WINNER.id}
      className="relative overflow-hidden bg-secondary py-16 text-secondary-foreground scroll-mt-20 sm:py-20 md:py-28"
    >
      {/* Soft gold wash behind the portrait, kept out of the way on small screens. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl lg:block"
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-none lg:max-w-none">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-accent/50 via-accent/10 to-transparent" />
              <WinnerPortrait
                name={WINNER.name}
                photo={WINNER.photo}
                className="relative aspect-[4/5] w-full rounded-3xl shadow-elevated"
                monogramClassName="text-6xl sm:text-7xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground shadow-elevated">
                Winner 2026
              </div>
            </div>
          </Reveal>

          <div className="order-2 space-y-6 lg:order-none">
            <Reveal className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-accent/30">
                <Trophy className="h-4 w-4" />
                The Highest Honour
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white text-balance">
                {WINNER.category}
              </h2>
              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-accent">
                  {WINNER.honorific} {WINNER.name}
                </p>
                {WINNER.affiliation && (
                  <p className="text-base sm:text-lg text-secondary-foreground/70">{WINNER.affiliation}</p>
                )}
                {WINNER.instagram && (
                  <a
                    href={`https://www.instagram.com/${WINNER.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
                  >
                    <Instagram className="h-4 w-4" /> @{WINNER.instagram}
                  </a>
                )}
              </div>
            </Reveal>

            {WINNER.stats && (
              <Reveal delay={80}>
                <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {WINNER.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10"
                    >
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-display text-2xl sm:text-3xl font-semibold text-white">
                          {stat.value}
                        </span>
                        <span className="mt-1 block text-xs sm:text-sm text-secondary-foreground/70">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}

            <Reveal delay={140} className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-secondary-foreground/85">{WINNER.story}</p>

              {WINNER.quote && (
                <blockquote className="relative rounded-2xl bg-white/5 p-5 pl-12 ring-1 ring-white/10 sm:p-6 sm:pl-14">
                  <Quote className="absolute left-4 top-5 h-6 w-6 text-accent/60 sm:left-5" />
                  <p className="text-base sm:text-lg italic leading-relaxed text-white/90">{WINNER.quote}</p>
                </blockquote>
              )}

              <div className="rounded-2xl border border-white/10 p-5 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">How it was decided</p>
                <p className="text-sm sm:text-base leading-relaxed text-secondary-foreground/75">
                  {WINNER.selection}
                </p>
              </div>

              <p className="text-sm text-secondary-foreground/60">
                Presented by {AWARD_CEREMONY.presenters} on {AWARD_CEREMONY.date}.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
