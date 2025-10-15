import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: " Who is eligible to apply, and what are the requirements?",
    a: "The convention is designed for active Buddhist content creators of all experience levels, including monks, nuns, social media managers for monasteries or centers, and lay practitioners seeking to enhance their online presence. While prior professional experience is not required, applicants must have at least one active social media account with either a minimum of 1,000 followers or a consistent posting history. Regarding equipment, you do not need professional gear; we encourage you to bring whatever you typically use for content creation.",
  },
  {
    q: "Is travel support available?",
    a: "We're excited to offer financial travel assistance to a limited number of selected applicants through our scholarship support program! While general travel costs aren't included, this support is only applicable for residents of Nepal, Bhutan, and India, covering AC3 train or bus travel to help you attend.",
  },
  {
    q: "When will selected participants be notified?",
    a: "After registering on our website, you’ll receive a confirmation call from our team within two weeks.",
  },
  {
    q: "What kind of food will be served for participants?",
    a: "The program provides free accommodation at the venue, vegetarian meals three times a day, and all workshop materials.",
  },
  {
    q: "Will I be sharing a room with other participants?",
    a: "Yes. Accommodation will be provided on a shared basis to encourage community bonding and interaction among participants. Male and female participants will be accommodated separately.",
  },
  {
    q: 'Is it mandatory to attend the entire workshop?',
    a: 'Yes. Participants are required to attend all sessions throughout the workshop. Full participation ensures you gain the complete learning experience and benefit from every aspect of the program.'
  },
  {
    q: "What support is available after the convention ends?",
    a: "Upon graduation, you will join a supportive and growing community of dedicated Buddhist content creators. Furthermore, promising participants will be invited to a special 'Train the Trainer' program, equipping them to scale this initiative within their own communities. Graduates will also be provided with opportunities to contribute their content to our established platforms, such as WeBuddhist and Sherab.org, amplifying their reach and impact.",
  },
];

export const FAQSection = () => {
  return (
    <section className="pt-4 md:pt-2 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          <Card className="p-4 md:p-6 shadow-soft border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


