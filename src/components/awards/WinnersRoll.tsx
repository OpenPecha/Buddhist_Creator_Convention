import { ALL_WINNERS } from "@/data/awards";
import { WinnerPortrait } from "@/components/awards/WinnerPortrait";
import { Reveal } from "@/components/shared/Reveal";

/**
 * A roll-call of every 2026 winner directly beneath the hero, so the names are
 * the first thing visible. Each entry jumps to that winner's full story.
 */
export const WinnersRoll = () => {
  return (
    <section className="border-b border-border/60 bg-background py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary md:mb-8">
          The 2026 Winners
        </p>
        <ul className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          {ALL_WINNERS.map((winner, i) => (
            <Reveal key={winner.id} delay={i * 70}>
              <li>
                <a
                  href={`#${winner.id}`}
                  className="group flex items-center gap-3 rounded-full border border-border/60 bg-card py-2 pl-2 pr-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
                >
                  <WinnerPortrait
                    name={winner.name}
                    photo={winner.photo}
                    className="h-11 w-11 shrink-0 rounded-full sm:h-12 sm:w-12"
                    monogramClassName="text-sm"
                  />
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary">
                      {winner.shortCategory}
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-foreground">
                      {winner.name}
                    </span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
