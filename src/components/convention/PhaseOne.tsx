import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CONVENTION_PHASES, PHASE_ONE } from "@/data/convention";

const PHASE = CONVENTION_PHASES[0];

export const PhaseOne = () => {
  return (
    <section id={PHASE.id} className="scroll-mt-20 py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={`${PHASE.phase} · ${PHASE.dates}`}
          title={PHASE.title}
          description={PHASE.summary}
          className="mb-14"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <Reveal className="rounded-2xl overflow-hidden shadow-elevated aspect-video">
            <video controls preload="none" poster="/images/convention/phase1-poster.jpg" className="w-full h-full object-cover bg-black">
              <source src="/images/convention/phase1-highlight.mp4" type="video/mp4" />
            </video>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft sm:p-8">
            <h3 className="mb-2 text-xl font-semibold text-foreground">{PHASE_ONE.openingCeremony.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{PHASE_ONE.openingCeremony.body}</p>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-border/50 bg-card p-4 shadow-soft md:p-6">
            <p className="mb-2 px-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Keynote Addresses
            </p>
            <Accordion type="single" collapsible className="w-full">
              {PHASE_ONE.keynotes.map((keynote) => (
                <AccordionItem key={keynote.name} value={keynote.name}>
                  <AccordionTrigger className="text-left text-foreground">
                    <span>
                      {keynote.name}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">{keynote.role}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{keynote.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={120} className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Panel Discussion</p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{PHASE_ONE.panel.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Moderated by {PHASE_ONE.panel.moderator}, with {PHASE_ONE.panel.panelists.join(", ")}.
              </p>
              <p className="leading-relaxed text-muted-foreground">{PHASE_ONE.panel.body}</p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                {PHASE_ONE.lightningTalks.title}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {PHASE_ONE.lightningTalks.presenterCount} Creators, Four Rooms
              </h3>
              <div className="mb-3 flex flex-wrap gap-2">
                {PHASE_ONE.lightningTalks.rooms.map((room) => (
                  <span key={room} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {room}
                  </span>
                ))}
              </div>
              <p className="leading-relaxed text-muted-foreground">{PHASE_ONE.lightningTalks.body}</p>
            </div>
          </Reveal>

          <Reveal delay={140} className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft sm:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              {PHASE_ONE.whyBehindTheWhat.title}
            </p>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {PHASE_ONE.whyBehindTheWhat.speaker}, {PHASE_ONE.whyBehindTheWhat.role}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{PHASE_ONE.whyBehindTheWhat.body}</p>
          </Reveal>

          <Reveal delay={160} className="rounded-2xl border border-border/50 bg-card p-4 shadow-soft md:p-6">
            <p className="mb-2 px-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              {PHASE_ONE.communityCircles.title} — Seven Themes
            </p>
            <Accordion type="single" collapsible className="w-full">
              {PHASE_ONE.communityCircles.themes.map((theme) => (
                <AccordionItem key={theme.title} value={theme.title}>
                  <AccordionTrigger className="text-left text-foreground">{theme.title}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{theme.question}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
