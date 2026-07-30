import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "110+", label: "Creators" },
  { value: "9", label: "Days" },
  { value: "1", label: "First Global Sangha" },
];

export const PastHighlight = () => {
  return (
    <section id="bcc-2026" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
          <Reveal className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src="/images/home/bcc-recap.jpg"
              alt="Speaker presenting at the Buddhist Creators Convention 2026 in Bodh Gaya"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Looking Back</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
              What Happened at BCC 2026
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In January 2026, over a hundred Buddhist creators from more than a dozen countries gathered in
              Bodh Gaya for nine days — the first global sangha of its kind, brought together to learn, create,
              and grow as a community.
            </p>
            <div className="flex gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-primary hover:bg-primary-light text-primary-foreground rounded-full" asChild>
                <Link to="/convention">
                  Explore the Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/images/convention/bcc-2026-report.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" /> Download the Report
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
