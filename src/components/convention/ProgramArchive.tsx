import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";

const DAYS = [
  {
    day: "Day 1",
    title: "Registration & Opening Ceremony",
    body: "Attendees arrived, completed on-site registration, and settled in before an inspiring opening session that kicked off the week.",
  },
  {
    day: "Day 2",
    title: "Community Day",
    body: "A panel discussion on the future of Buddhism in the digital age, lightning talks from creators, and community circles for deeper connection.",
  },
  {
    day: "Day 3",
    title: "Becoming a Digital Bodhisattva",
    body: "Why social media is the modern monastery — finding your Dharma niche, choosing your format, and understanding that sharing online is service, not self-promotion.",
  },
  {
    day: "Day 4",
    title: "Knowing What the World Needs",
    body: "How to stop guessing and create content that resonates, aligning lived truth, market demand, and audience voice into magnetic content.",
  },
  {
    day: "Day 5",
    title: "Storytelling that Transforms",
    body: "The timeless structure of storytelling, learning from global creators, and blending humour, emotion, and humanity into Dharma teaching.",
  },
  {
    day: "Day 6",
    title: "Working with AI as Your Dharma Assistant",
    body: "Turning AI into a creative partner for scripting and editing, training it on your own teachings, and using it ethically without losing your voice.",
  },
  {
    day: "Day 7",
    title: "Virality through Consistency",
    body: "The real science of virality, building a rhythm of small daily improvements, and refining through analytics and discipline.",
  },
  {
    day: "Day 8",
    title: "Sustainability and Presence",
    body: "Reframing monetisation as compassion in action, and strengthening on-camera presence through authenticity and mindfulness.",
  },
  {
    day: "Day 9",
    title: "Integrating Wisdom into Action",
    body: "A guided review of the week's transformation, closing awards, and setting intentions to carry the Dharma forward as a Digital Bodhisattva.",
  },
];

export const ProgramArchive = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Program Archive</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
            The Full 9-Day Program
          </h2>
        </Reveal>
        <Reveal delay={100} className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card shadow-soft p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {DAYS.map((item) => (
                <AccordionItem key={item.day} value={item.day}>
                  <AccordionTrigger className="text-left text-foreground">
                    <span className="text-primary font-semibold mr-3">{item.day}</span> {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
