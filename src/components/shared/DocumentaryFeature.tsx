import { Play } from "lucide-react";
import { DOCUMENTARY } from "@/data/documentary";
import { VideoLightbox } from "@/components/shared/VideoLightbox";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface DocumentaryFeatureProps {
  className?: string;
  /** `full` gives the film a tall cinematic band; `compact` fits inside a busier page. */
  size?: "full" | "compact";
}

const YOUTUBE_THUMB = `https://i.ytimg.com/vi/${DOCUMENTARY.youtubeId}/maxresdefault.jpg`;

export const DocumentaryFeature = ({ className, size = "full" }: DocumentaryFeatureProps) => {
  return (
    <section id="documentary" className={cn("relative bg-secondary scroll-mt-20", className)}>
      <VideoLightbox youtubeId={DOCUMENTARY.youtubeId} title={DOCUMENTARY.title}>
        <button
          type="button"
          aria-label={`Play the documentary: ${DOCUMENTARY.title}`}
          className={cn(
            "group relative flex w-full flex-col overflow-hidden text-left",
            size === "full"
              ? "min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh]"
              : "min-h-[60vh] md:min-h-[70vh]",
          )}
        >
          <picture className="absolute inset-0">
            <source srcSet={YOUTUBE_THUMB} />
            <img
              src={DOCUMENTARY.poster}
              alt=""
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

          {/* The play affordance takes the free space above the copy, so the two can
              never collide however far the headline wraps on narrow screens. */}
          <div className="relative z-10 flex flex-1 items-center justify-center px-4 pb-6 pt-24 md:pt-32">
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/40 transition-all duration-300 group-hover:bg-primary group-hover:ring-primary sm:h-24 sm:w-24 md:h-28 md:w-28">
              <span className="absolute inset-0 rounded-full ring-2 ring-white/30 motion-safe:animate-ping [animation-duration:2.8s]" />
              <Play className="ml-1 h-8 w-8 fill-white text-white sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </span>
          </div>

          <div className="relative z-10 container mx-auto px-4 pb-12 sm:pb-16 md:pb-20">
            <Reveal className="max-w-3xl space-y-4">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {DOCUMENTARY.tagline}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.08] text-white text-balance">
                {DOCUMENTARY.title}
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/85">
                {DOCUMENTARY.description}
              </p>
              <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm sm:text-base font-medium text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:ring-primary">
                <Play className="h-4 w-4 fill-current" />
                Watch the film
                <span className="text-white/60">· {DOCUMENTARY.runtime}</span>
              </span>
            </Reveal>
          </div>
        </button>
      </VideoLightbox>
    </section>
  );
};
