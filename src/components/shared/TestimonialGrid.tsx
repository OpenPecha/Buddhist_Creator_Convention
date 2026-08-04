import { Play, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { VideoLightbox } from "@/components/shared/VideoLightbox";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const card = (
    <figure
      className={cn(
        "group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-soft transition-all duration-300 hover:shadow-elevated",
        !testimonial.photo && "bg-gradient-hero",
      )}
    >
      {testimonial.photo && (
        <img
          src={testimonial.photo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

      {testimonial.youtubeId && (
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:ring-primary">
          <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
        </span>
      )}

      <Quote className="relative z-10 mb-3 h-6 w-6 text-white/50" />
      <blockquote className="relative z-10 leading-relaxed text-white/95">"{testimonial.quote}"</blockquote>
      <figcaption className="relative z-10 mt-4 text-sm font-medium text-white/80">
        {testimonial.name}
        {(testimonial.role || testimonial.location) && (
          <span className="text-white/60">, {testimonial.role ?? testimonial.location}</span>
        )}
      </figcaption>
    </figure>
  );

  if (!testimonial.youtubeId) return card;

  return (
    <VideoLightbox youtubeId={testimonial.youtubeId} title={`${testimonial.name} — testimonial`}>
      <button type="button" className="block h-full w-full text-left">
        {card}
      </button>
    </VideoLightbox>
  );
};

/** Renders nothing when `testimonials` is empty, so sections can stay data-driven. */
export const TestimonialGrid = ({ testimonials, className }: TestimonialGridProps) => {
  if (testimonials.length === 0) return null;

  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {testimonials.map((testimonial, i) => (
        <Reveal key={testimonial.id} delay={i * 100} className="h-full">
          <TestimonialCard testimonial={testimonial} />
        </Reveal>
      ))}
    </div>
  );
};
