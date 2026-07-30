import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  height?: "full" | "tall";
  imageAlt: string;
}

/** Full-bleed photo hero used on interior pages (About, Programs, Convention). */
export const PageHero = ({ image, eyebrow, title, description, children, height = "tall", imageAlt }: PageHeroProps) => {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        height === "full" ? "min-h-[85vh] md:min-h-screen" : "min-h-[65vh] md:min-h-[75vh]"
      )}
    >
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
      </div>
      <div className="relative z-10 container mx-auto px-4 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl space-y-5">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.05] text-balance">
            {title}
          </h1>
          {description && <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};
