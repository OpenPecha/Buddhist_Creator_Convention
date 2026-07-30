import { useState } from "react";
import { cn } from "@/lib/utils";

interface WinnerPortraitProps {
  name: string;
  photo?: string;
  className?: string;
  /** Monogram size; scales with the container it sits in. */
  monogramClassName?: string;
}

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

/**
 * Winner photo with a branded monogram fallback. Real portraits can be dropped
 * into public/images/awards/ at any time — until then (or if a file is missing)
 * this renders initials on the brand gradient rather than a broken image.
 */
export const WinnerPortrait = ({ name, photo, className, monogramClassName }: WinnerPortraitProps) => {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(photo) && !failed;

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {showPhoto ? (
        <img
          src={photo}
          alt={name}
          onError={() => setFailed(true)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-gradient-hero"
        >
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-white/90",
              monogramClassName ?? "text-4xl sm:text-5xl",
            )}
          >
            {initialsOf(name)}
          </span>
        </div>
      )}
    </div>
  );
};
