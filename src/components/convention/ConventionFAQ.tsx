import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  {
    q: "Who was eligible to attend BCC 2026?",
    a: "The convention was open to active Buddhist content creators of all experience levels — monastics, social media managers for monasteries or centers, and lay practitioners. Applicants needed at least one active social media account with 1,000+ followers or a consistent posting history.",
  },
  {
    q: "Was travel support available?",
    a: "A limited number of travel scholarships were offered to selected applicants, covering AC3 train or bus travel for residents of Nepal, Bhutan, and India.",
  },
  {
    q: "What was included for attendees?",
    a: "Sponsored accommodation, three vegetarian meals a day, and all masterclass materials were provided free of charge, on a shared-room basis to encourage community bonding.",
  },
  {
    q: "What happens after a convention ends?",
    a: "Graduates join a supportive, growing community of Buddhist content creators. Promising participants are invited into a 'Train the Trainer' program, and many contribute content to WeBuddhist and Sherab.org.",
  },
  {
    q: "Will this be the same for BCC 2027?",
    a: "We expect a similar structure — in-person masterclass, community day, and awards — but exact eligibility, scholarships, and dates will be announced closer to the event. Reach out to be notified first.",
  },
];

export const ConventionFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" className="mb-12" />
        <Reveal className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/50 bg-card shadow-soft p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((item, idx) => (
                <AccordionItem key={item.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
