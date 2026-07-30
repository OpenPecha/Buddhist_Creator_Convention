import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const TESTIMONIALS = [
  {
    quote: "I came for the skills, I stayed for the sangha. This place melted my doubt.",
    name: "Thinle Dorjee",
    location: "Nepal",
  },
  {
    quote: "The Convention connected me with creators worldwide. Together we learned to share the Dharma better.",
    name: "Rahul Dongre",
    location: "India",
  },
  {
    quote: "This community taught me that sharing the Dharma online is real, meaningful, and deeply needed.",
    name: "Noah",
    location: "Germany",
  },
];

export const CreatorsVoice = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Creator's Voice" title="Stories from the Community" className="mb-14" />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="h-full rounded-2xl border border-border/50 bg-card shadow-soft p-6 flex flex-col gap-4">
                <Quote className="w-6 h-6 text-primary/40" />
                <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</blockquote>
                <figcaption className="text-sm font-medium text-muted-foreground">
                  {t.name}, {t.location}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
