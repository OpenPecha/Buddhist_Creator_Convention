import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { PARTNER_PRODUCTS } from "@/data/partners";

const [WEBUDDHIST, WEBUDDHIST_ACADEMY] = PARTNER_PRODUCTS;

export const PartnerProductsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Partner's Products"
          title="Technology that Powers our Mission"
          description="From daily practice to Dharma content and free e-learning, our partners' products help Buddhist creators learn, create, and grow — all in one place."
          className="mb-14"
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/home/tech-webuddhist-brand.jpg"
                alt="WeBuddhist app shown across laptop, tablet, and phone"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{WEBUDDHIST.name}</h3>
              <p className="text-sm font-medium text-primary">{WEBUDDHIST.tagline}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{WEBUDDHIST.description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <img
                src="/images/brand/app-store-badge.png"
                alt="Download on the App Store"
                className="h-10 sm:h-11 w-auto max-w-full shrink-0 object-contain"
              />
              <img
                src="/images/brand/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-10 sm:h-11 w-auto max-w-full shrink-0 object-contain"
              />
              <a
                href={WEBUDDHIST.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                webuddhist.com <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
          {WEBUDDHIST.screenshots?.map((img) => (
            <div key={img} className="rounded-xl overflow-hidden border border-border/50 aspect-square">
              <img src={img} alt="WeBuddhist product screenshot" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </Reveal>

        <Reveal delay={100} className="max-w-5xl mx-auto mt-14">
          <div className="rounded-2xl border border-border/50 bg-card shadow-soft p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{WEBUDDHIST_ACADEMY.name}</h3>
                <p className="text-sm font-medium text-primary">{WEBUDDHIST_ACADEMY.tagline}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{WEBUDDHIST_ACADEMY.description}</p>
            </div>
            <a
              href={WEBUDDHIST_ACADEMY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-semibold text-primary shrink-0 hover:bg-primary/15 transition-colors"
            >
              Visit sherab.org <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
