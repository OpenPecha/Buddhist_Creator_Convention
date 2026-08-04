import { Mail } from "lucide-react";
import { COLLABORATORS } from "@/data/partners";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const INITIATIVES = [
  {
    title: "Buddhist Creators Convention",
    description:
      "Our annual global gathering in Bodh Gaya — sponsor a scholarship seat, host a session, or support the ceremony.",
  },
  {
    title: "WeBuddhist Influencer Masterclass",
    description:
      "An intensive, practicals-led training that runs at partner institutes throughout the year — host the next one at your centre.",
  },
];

export const PartnerSection = () => {
  return (
    <section id="partner" className="scroll-mt-24 bg-gradient-section py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="As an Institution or Group"
          title="Become Our Partner"
          description="Monasteries, foundations, and organisations already power our two flagship initiatives — join them in bringing the Dharma to the digital age."
          className="mb-12"
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {INITIATIVES.map((initiative, i) => (
            <Reveal key={initiative.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border/50 bg-card p-7 shadow-soft">
                <h3 className="mb-3 text-xl font-semibold text-foreground">{initiative.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{initiative.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-14 max-w-4xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Organisations Already Partnering With Us
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {COLLABORATORS.map((partner) =>
              partner.logo ? (
                <img
                  key={partner.id}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-20"
                  loading="lazy"
                />
              ) : (
                <span key={partner.id} className="text-lg font-semibold text-muted-foreground">
                  {partner.name}
                </span>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-14 max-w-2xl text-center">
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light" asChild>
            <a href="mailto:hello@buddhistcreators.com?subject=Partnership%20Inquiry">
              <Mail className="mr-2 h-4 w-4" /> Start a Partnership Conversation
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
