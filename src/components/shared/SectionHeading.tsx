import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) => {
  const isCenter = align === "center";
  return (
    <div className={cn("space-y-4", isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">{title}</h2>
      <div className={cn("h-1 w-16 rounded-full bg-gradient-hero", isCenter && "mx-auto")} />
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed text-balance">{description}</p>
      )}
    </div>
  );
};
