import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/drone_shot.gif" alt="Drone shot of the venue in Bodhgaya" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-white font-medium backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              Jan 29 - Feb 6, 2026
              <span aria-hidden="true">•</span>
              <a
                href="https://calendar.google.com/calendar/u/0?cid=Y19iYjA4ZDZiODc3ODcxMjYxNGRjYzZkMGEzOTNiOWNlYmJkMTdmMTUzMWEyM2U1ZDY0NjZjNTRlYmI2ZDgyNTU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary-foreground/90"
              >
                Add to Calendar
              </a>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Buddhist Creators{' '}
            <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Convention</span>
          </h1>


          {/* Location */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-foreground/90 backdrop-blur-sm">
              <MapPin className="w-5 h-5" />
              <a
                href="https://maps.app.goo.gl/KnpgfrYUFX4NoZHc8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold" }}
                className="text-lg hover:underline underline-offset-4"
              >
                Buddhist Thai-Bharat Society, Bodhgaya, India
              </a>
            </span>
          </div>

          {/* Key Stats */}
          <div className="pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">100+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Attendees</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">10+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Countries</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">500K+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Combined Followers</div>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary/10 backdrop-blur-md p-4 text-primary-foreground shadow-elevated">
                <div className="text-3xl md:text-4xl font-extrabold leading-none">5+</div>
                <div className="mt-1 text-sm md:text-base opacity-90">Major Platforms</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground shadow-elevated text-lg px-8 py-6" asChild>
              <a href="https://forms.gle/fjmqhZs2Ff1VxMap6" target="_blank" rel="noopener noreferrer">Register Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/20 text-primary-foreground backdrop-blur-sm text-lg px-8 py-6 bg-orange-500 hover:bg-orange-400" asChild>
              <a href="#what-you-get">Learn More</a>
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