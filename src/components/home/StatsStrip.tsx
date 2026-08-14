import { ReactNode } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";
import { REPORT_PDF_PATH } from "@/data/impact";

interface TileProps {
  image?: string;
  /** "top-gold" suits the pre-graded brand illustrations; "bottom-dark" suits plain photos. */
  scrim?: "top-gold" | "bottom-dark";
  className?: string;
  children: ReactNode;
}

const Tile = ({ image, scrim = "top-gold", className, children }: TileProps) => (
  <div
    className={cn(
      "relative flex min-h-[11rem] flex-col overflow-hidden rounded-2xl p-5 sm:min-h-[12rem] sm:p-6 md:h-full md:min-h-0",
      scrim === "bottom-dark" ? "justify-end" : "justify-start",
      !image && "bg-gradient-to-b from-accent to-accent/10",
      className,
    )}
  >
    {image && (
      <>
        <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        {scrim === "top-gold" ? (
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/95 to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        )}
      </>
    )}
    <div className="relative z-10">{children}</div>
  </div>
);

export const StatsStrip = () => {
  return (
    <section className="bg-secondary py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:auto-rows-[13rem] md:grid-cols-[repeat(3,minmax(0,1fr))_1.1fr] md:grid-rows-2">
          <Tile
            image="/images/home/gallery-1.jpg"
            scrim="bottom-dark"
            className="col-span-2 min-h-[24rem] sm:min-h-[26rem] md:col-span-1 md:row-span-2 md:min-h-0"
          >
            <p className="text-sm font-medium text-white/80 sm:text-base">Total Engagement</p>
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              1 <span className="italic">Million</span>+
            </p>
          </Tile>

          <Tile image="/images/home/join-globe.jpg">
            <p className="text-sm font-medium text-accent-foreground/80">Uniting Buddhist Creators Across</p>
            <p className="font-display text-3xl font-bold text-accent-foreground sm:text-4xl">
              12+ <span className="italic">Countries</span>
            </p>
          </Tile>

          <Tile image="/images/home/award-group.jpg" scrim="bottom-dark">
            <p className="text-sm font-medium text-white/80">A Community Of</p>
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">110+</p>
            <p className="font-display text-xl font-bold text-white sm:text-2xl">
              <span className="italic">Active</span> Creators
            </p>
          </Tile>

          <div className="col-span-2 flex items-center md:col-span-1 md:row-span-2 md:pl-6">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl md:text-[2.5rem]">
              Join Us In Bringing The <span className="italic text-accent">Dharma</span> To The Digital Age
            </h2>
          </div>

          <Tile image="/images/home/masterclass.jpg" scrim="bottom-dark">
            <p className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
              Learn, Collaborate & Create <span className="italic">Dharma Content</span>
            </p>
          </Tile>

          <Tile image="/images/home/join-buddha-line.jpg">
            <p className="font-display text-lg font-semibold leading-snug text-accent-foreground sm:text-xl">
              Making The Dharma <span className="italic">Accessible</span> To All
            </p>
          </Tile>
        </Reveal>

        <Reveal delay={80} className="mt-8 text-center md:mt-12">
          <a
            href={REPORT_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent"
          >
            <Download className="h-4 w-4" /> Read the full BCC 2026 report
          </a>
        </Reveal>
      </div>
    </section>
  );
};
