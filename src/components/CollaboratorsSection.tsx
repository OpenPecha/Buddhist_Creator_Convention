import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Add your collaborator organization logos here
const collaborators = [
  {
    name: "Shechen Monastery",
    logo: "/collaborators/shechen-logo.png",
    alt: "Shechen Monastery Logo"
  },
  {
    name: "OpenPecha",
    logo: "/collaborators/openpecha-logo.png",
    alt: "OpenPecha Logo"
  },
];

export const CollaboratorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (!isAutoPlaying || collaborators.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collaborators.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? collaborators.length - 1 : prevIndex - 1
    );
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collaborators.length);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  if (collaborators.length === 0) {
    return null;
  }

  return (
    <section id="collaborators" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Collaborators
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mt-6">
              Partnering with organizations dedicated to spreading the Dharma
            </p>
          </div>

          {/* Carousel Container */}
          <Card className="p-8 md:p-12 shadow-soft border-border/50 bg-background">
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              {collaborators.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
                  aria-label="Previous collaborator"
                >
                  <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary-light" />
                </button>
              )}

              {/* Logo Display */}
              <div className="flex-1 flex justify-center items-center min-h-[200px] px-12">
                <div className="relative w-full max-w-md">
                  <div className="transition-all duration-500 ease-in-out">
                    <img
                      src={collaborators[currentIndex].logo}
                      alt={collaborators[currentIndex].alt}
                      className="w-full h-auto object-contain max-h-[200px] drop-shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {collaborators[currentIndex].name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              {collaborators.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-0 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
                  aria-label="Next collaborator"
                >
                  <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary-light" />
                </button>
              )}
            </div>

            {/* Dots Indicator */}
            {collaborators.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {collaborators.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to collaborator ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

