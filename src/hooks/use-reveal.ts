import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element with a fade-up animation the first time it scrolls into view.
 * Respects prefers-reduced-motion by rendering as already visible.
 *
 * Fires on any intersection rather than a percentage of the element, because on
 * narrow screens content stacks tall enough that a percentage threshold may never
 * be reached — which would leave the block permanently invisible.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible };
}
