import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
export const Hero = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    let timer: number | undefined;

    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        carouselApi.scrollNext();
      }, 5000);
    };

    const onCycle = () => {
      if (timer) window.clearTimeout(timer);
      scheduleNext();
    };

    scheduleNext();
    carouselApi.on("select", onCycle);
    carouselApi.on("reInit", onCycle);

    return () => {
      if (timer) window.clearTimeout(timer);
      carouselApi.off("select", onCycle);
      carouselApi.off("reInit", onCycle);
    };
  }, [carouselApi]);
  return <section className="relative h-auto min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="h-full">
          {/* Mobile carousel */}
          <div className="h-screen md:hidden">
            <Carousel className="h-screen" opts={{ loop: true }} setApi={!isDesktop ? setCarouselApi : undefined}>
              <CarouselContent className="h-full">
                <CarouselItem className="h-full">
                  <img src="/hero/mobile/1.jpg" alt="Slide 1" className="w-full h-screen object-cover object-center" />
                </CarouselItem>
                <CarouselItem className="h-full">
                  <img src="/hero/mobile/2.jpg" alt="Slide 2" className="w-full h-screen object-cover object-center" />
                </CarouselItem>
                <CarouselItem className="h-full">
                  <img src="/hero/mobile/3.jpg" alt="Slide 3" className="w-full h-screen object-cover object-center" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop carousel */}
          <div className="h-full hidden md:block">
            <Carousel className="h-full" opts={{ loop: true }} setApi={isDesktop ? setCarouselApi : undefined}>
              <CarouselContent className="h-full">
                <CarouselItem className="h-full">
                  <img src="/hero/desktop/1.png" alt="Slide 1" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                  <img src="/hero/desktop/2.png" alt="Slide 2" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                  <img src="/hero/desktop/3.png" alt="Slide 3" className="w-full h-full object-cover" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12 bg-background/60 backdrop-blur-sm hover:bg-background/80" />
              <CarouselNext className="-right-4 md:-right-12 bg-background/60 backdrop-blur-sm hover:bg-background/80" />
            </Carousel>
          </div>
        </div>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 pt-8 md:pt-12">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-white font-medium backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              Jan 29 - Feb 6, 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm text-primary-foreground">
            Buddhist Creators <span className="text-white">Convention 2026</span>
          </h1>


          {/* Location */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-foreground/90 backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
              Wat Thai, Bodhgaya, India
            </span>
          </div>

          {/* Key Stats */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">100+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Buddhist Creators</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-lg md:text-xl font-bold leading-snug">From India, Nepal, Malaysia,</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Sri Lanka, and many more</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">1M+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Combined Followers</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated text-lg px-8 py-6" asChild>
              <a href="https://forms.gle/fjmqhZs2Ff1VxMap6" target="_blank" rel="noopener noreferrer">Register In 30s</a>
            </Button>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elevated text-lg px-8 py-6" asChild>
              <a href="https://forms.gle/v84KfqtioFnQPjXa9" target="_blank" rel="noopener noreferrer">Apply for Travel Scholarship</a>
            </Button>
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elevated text-lg px-8 py-6" asChild>
              <a href="#timeline">Learn More</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};