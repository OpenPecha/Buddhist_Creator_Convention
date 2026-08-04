import { Download } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { IMPACT_STATS, REPORT_PDF_PATH } from "@/data/impact";

export const StatsStrip = () => {
  return (
    <section className="bg-white text-foreground py-10 md:py-12">
      <div className="container mx-auto px-4">
        <Reveal className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-5xl font-semibold text-secondary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-base text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={80} className="mt-6 text-center">
          <a
            href={REPORT_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="w-4 h-4" /> Read the full BCC 2026 report
          </a>
        </Reveal>
      </div>
    </section>
  );
};
