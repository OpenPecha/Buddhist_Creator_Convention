import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { REPORT_PDF_PATH } from "@/data/impact";

const SLIDES = [
  { src: "/images/convention/hero-1.jpg", alt: "Buddhist Creators Convention 2026 stage in Bodh Gaya" },
  { src: "/images/convention/hero-2.jpg", alt: "Speaker presenting to attendees at the Convention" },
  { src: "/images/convention/hero-3.jpg", alt: "Attendees registering at the Convention welcome desk" },
];

const STATS = [
  { value: "110", label: "Creators" },
  { value: "10", label: "Countries" },
  { value: "Bodh Gaya", label: "Location" },
];

export const ConventionHero = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = window.setInterval(() => api.scrollNext(), 5500);
    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Carousel className="h-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full ml-0">
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.src} className="h-[85vh] md:h-screen pl-0">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Bodh Gaya, India</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.05] text-balance">
            Buddhist Creators Convention
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
            Where the first-ever global sangha of creators came together.
          </p>
          <div className="flex flex-wrap gap-8 pt-2">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white rounded-full backdrop-blur-sm" asChild>
              <a href={REPORT_PDF_PATH} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" /> Download the Full Report
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
