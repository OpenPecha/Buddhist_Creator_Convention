import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
export const Hero = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    const id = setInterval(() => {
      carouselApi.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [carouselApi]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="h-full">
          <Carousel className="h-full" opts={{ loop: true }} setApi={setCarouselApi}>
            <CarouselContent className="h-full">
              <CarouselItem className="h-full">
                <img src="/hero/stupa.png" alt="Buddha" className="w-full h-full object-cover object-bottom" />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img src="/hero/venue.png" alt="Buddha" className="w-full h-full object-cover object-bottom" />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img src="/hero/stupa1.png" alt="Stupa" className="w-full h-full object-cover object-bottom" />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img src="/hero/buddha.jpg" alt="Buddha statue" className="w-full h-full object-cover object-bottom" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-background/60 backdrop-blur-sm hover:bg-background/80" />
            <CarouselNext className="-right-4 md:-right-12 bg-background/60 backdrop-blur-sm hover:bg-background/80" />
          </Carousel>
        </div>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-white font-medium backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              Jan 29 - Feb 6, 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm text-primary-foreground">
            Buddhist Creators <span className="text-white">Convention</span>
          </h1>


          {/* Location */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-foreground/90 backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
              Wat Thai Magadh Buddhists Vipassana centre Bodhgaya, India
            </span>
          </div>

          {/* Key Stats */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">100+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Attendees</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">10+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Countries</div>
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