import { DOCUMENTARY } from "@/data/documentary";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface DocumentaryFeatureProps {
  className?: string;
  /** `full` gives the film a tall cinematic band; `compact` fits inside a busier page. */
  size?: "full" | "compact";
}

export const DocumentaryFeature = ({ className, size = "full" }: DocumentaryFeatureProps) => {
  return (
    <section
      id="documentary"
      className={cn("relative bg-secondary scroll-mt-20 text-secondary-foreground", className)}
    >
      <div
        className={cn(
          "container mx-auto px-4",
          size === "full" ? "py-16 md:py-24" : "py-12 md:py-16",
        )}
      >
        <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {DOCUMENTARY.tagline}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08] text-balance">
            {DOCUMENTARY.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-secondary-foreground/85">
            {DOCUMENTARY.description}
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-10 max-w-5xl md:mt-14">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${DOCUMENTARY.youtubeId}?rel=0&modestbranding=1`}
              title={DOCUMENTARY.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
          <p className="mt-3 text-center text-sm text-secondary-foreground/60">
            {DOCUMENTARY.runtime}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
