import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CONVENTION_PHASES, MASTERCLASS_MODULES, PHASE_TWO } from "@/data/convention";
import milanImage from "@/assets/milan.jpg";
import drJaiminImage from "@/assets/jaimin.jpg";

const PHASE = CONVENTION_PHASES[1];

const COACH_BIOS: Record<string, { image: string; bio: string }> = {
  "Milan Amin": {
    image: milanImage,
    bio: "With over 15 years in marketing and a decade in C-level leadership, Milan has led global brand and strategy for multi-billion-dollar companies, spearheading landmark Web3 partnerships with Cristiano Ronaldo, Lionel Messi, Formula 1, The GRAMMYs, and the Cannes Film Festival. A Buddhist practitioner for eight years, he has trained under Theravāda masters in Thailand and studied with Vajrayāna and Dzogchen teachers from Tibet and Nepal.",
  },
  "Dr. Jaimin Shukla": {
    image: drJaiminImage,
    bio: "Dr. Jaimin Shukla is a Global Chief Marketing Officer with 14 years of experience driving business growth through multi-channel marketing and technology. A Shell-sponsored PhD from University College London, he is the founder of The School of Insights and author of Transform Every Moment. A Buddhist practitioner for eight years, he has studied with teachers across Thailand, Japan, and Tibet.",
  },
};

const CoachCard = ({ coach }: { coach: (typeof PHASE_TWO.coaches)[number] }) => {
  const [expanded, setExpanded] = useState(false);
  const details = COACH_BIOS[coach.name];
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-7 text-center shadow-soft">
      <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-primary/20 shadow-soft">
        <img src={details.image} alt={coach.name} className="h-full w-full object-cover object-top" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{coach.name}</h3>
        <p className="text-sm font-medium text-primary">{coach.title}</p>
      </div>
      <p className={`text-sm leading-relaxed text-muted-foreground ${expanded ? "" : "line-clamp-3"}`}>{details.bio}</p>
      <Button variant="outline" size="sm" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Read less" : "Read more"}
      </Button>
    </div>
  );
};

export const PhaseTwo = () => {
  return (
    <section id={PHASE.id} className="scroll-mt-20 py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={`${PHASE.phase} · ${PHASE.dates}`}
          title={PHASE.title}
          description={PHASE.summary}
          className="mb-14"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <Reveal className="grid gap-6 sm:grid-cols-2">
            {PHASE_TWO.coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} />
            ))}
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft sm:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">How the Masterclass Ran</p>
            <ul className="space-y-3">
              {PHASE_TWO.programStructure.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-border/50 bg-card p-4 shadow-soft md:p-6">
            <p className="mb-2 px-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Six Masterclass Modules
            </p>
            <Accordion type="single" collapsible className="w-full">
              {MASTERCLASS_MODULES.map((module) => (
                <AccordionItem key={module.number} value={`module-${module.number}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    <span className="mr-3 font-semibold text-primary">Module {module.number}</span> {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{module.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft sm:p-8">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{PHASE_TWO.specialSession.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{PHASE_TWO.specialSession.body}</p>
          </Reveal>

          <Reveal delay={140} className="grid grid-cols-2 gap-6 rounded-2xl bg-secondary p-8 text-center text-secondary-foreground">
            <div>
              <p className="font-display text-3xl font-semibold sm:text-4xl">{PHASE_TWO.effectiveness.veryEffective}</p>
              <p className="mt-1 text-sm text-secondary-foreground/75">Rated it very effective</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold sm:text-4xl">{PHASE_TWO.effectiveness.somewhatEffective}</p>
              <p className="mt-1 text-sm text-secondary-foreground/75">Rated it somewhat effective</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
