import { Calendar, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export const MasterclassDetail = () => {
  return (
    <section id="masterclass-2026" className="py-20 md:py-28 bg-secondary text-secondary-foreground scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
          <Reveal className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="/images/home/masterclass.jpg"
              alt="A monastic and a coach reviewing content together on a tablet"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">Next Masterclass</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-balance">
              WeBuddhist Influencer Masterclass 2026
            </h2>
            <p className="text-lg text-secondary-foreground/85 leading-relaxed">
              Expertise built through 80% practicals and 20% theory — a hands-on training for creators ready to
              sharpen their craft and grow their reach.
            </p>
            <div className="space-y-2 text-secondary-foreground/90">
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-light" /> 1 – 6 November 2026
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-light" /> Dzongsar Khyentse Chokyi Lodro Institute, Gadiara, Himachal Pradesh, India
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary-light" /> Hosted by Khyentse Foundation
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground rounded-full mt-2" asChild>
              <a href="mailto:hello@buddhistcreators.com?subject=Masterclass%202026%20Interest">Express Interest</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
