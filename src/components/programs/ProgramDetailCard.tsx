import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

interface ProgramDetailCardProps {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  to: string;
  ctaLabel: string;
  reverse?: boolean;
  delay?: number;
}

export const ProgramDetailCard = ({ title, description, bullets, image, to, ctaLabel, reverse, delay = 0 }: ProgramDetailCardProps) => {
  return (
    <Reveal delay={delay}>
      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-foreground/80">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
          <Link to={to} className="inline-flex items-center gap-1.5 text-primary font-semibold pt-1 hover:gap-2.5 transition-all">
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
};
