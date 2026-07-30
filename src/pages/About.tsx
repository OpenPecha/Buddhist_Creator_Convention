import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SanghaSection } from "@/components/about/SanghaSection";
import { AboutCollaborators } from "@/components/about/AboutCollaborators";
import { usePageMeta } from "@/hooks/use-page-meta";

const About = () => {
  usePageMeta({
    title: "About",
    description: "We connect Buddhist creators, storytellers, and practitioners across the world.",
  });

  return (
    <div>
      <PageHero
        image="/images/about/hero.jpg"
        imageAlt="Community members in conversation with monastics during a Buddhist Creators gathering"
        eyebrow="About Us"
        title="We connect Buddhist creators, storytellers, and practitioners across the world."
      >
        <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground rounded-full px-8" asChild>
          <a href="/#newsletter">Join Us</a>
        </Button>
      </PageHero>

      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Reveal className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src="/images/about/mission.jpg"
                alt="Close-up of a Buddha statue"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
                Let's spread Buddhist wisdom and compassion to 100 million people by 2030
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe the Dharma belongs online as much as it does in the monastery. By supporting the
                creators already doing this work — and training the next generation — we're building a global
                sangha equipped for the digital age.
              </p>
              <Button variant="outline" className="rounded-full mt-2" asChild>
                <Link to="/programs">See Our Programs</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <SanghaSection />
      <AboutCollaborators />
    </div>
  );
};

export default About;
