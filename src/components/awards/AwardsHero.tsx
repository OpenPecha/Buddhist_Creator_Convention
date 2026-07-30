import { Trophy } from "lucide-react";
import { AWARD_CEREMONY, ALL_WINNERS } from "@/data/awards";
import { Reveal } from "@/components/shared/Reveal";

export const AwardsHero = () => {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden md:min-h-[85vh]">
      <div className="absolute inset-0">
        <img
          src="/images/home/award-ceremony.jpg"
          alt="The Buddhist Influencer of the Year award being presented on stage at BCC 2026"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent ring-1 ring-accent/40">
            <Trophy className="h-4 w-4" />
            BCC 2026 Awards
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-white text-balance">
            Honouring the creators carrying the Dharma forward.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-white/85">
            Five awards. Five creators whose work reached millions and inspired a new generation to share the
            Buddha's teachings online.
          </p>

          <Reveal className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-white">{ALL_WINNERS.length}</p>
              <p className="text-sm text-white/70">Awards presented</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-white">{AWARD_CEREMONY.date}</p>
              <p className="text-sm text-white/70">Closing ceremony</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-white">Bodh Gaya</p>
              <p className="text-sm text-white/70">{AWARD_CEREMONY.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
