import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

export const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
