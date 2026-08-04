import { Mail } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

export const TeamSection = () => {
  return (
    <section id="team" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Join Our Team</p>
          <h2 className="text-3xl font-semibold text-balance text-foreground sm:text-4xl md:text-5xl">
            Help us build the movement from the inside
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We're a small, fast-growing team behind the Convention, the Masterclass, and the Awards — and we're
            always glad to hear from people who want to contribute their time and skills. Tell us a little about
            yourself and where you'd like to help.
          </p>
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light" asChild>
            <a href="mailto:hello@buddhistcreators.com?subject=Join%20the%20Team">
              <Mail className="mr-2 h-4 w-4" /> Introduce Yourself
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
