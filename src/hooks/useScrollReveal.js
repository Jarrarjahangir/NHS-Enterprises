import { useEffect } from "react";

/**
 * useScrollReveal — High-performance, lightweight scroll reveal engine for NHS Enterprises.
 * Uses native IntersectionObserver with zero external dependencies.
 * Respects prefers-reduced-motion, prevents layout flashes, and cleans up cleanly.
 */
export function useScrollReveal(selector = "[data-reveal]", dep = null) {
  useEffect(() => {
    // If user prefers reduced motion, immediately reveal everything without animation
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.08
      }
    );

    const init = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });
    };

    init();
    const timer = setTimeout(init, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [selector, dep]);
}

export default useScrollReveal;
