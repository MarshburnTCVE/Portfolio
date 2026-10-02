"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const workSection = document.getElementById("work");
    if (!workSection) return;

    const updateVisibility = () => {
      setIsVisible(workSection.getBoundingClientRect().top <= window.innerHeight);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to the top"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-signal bg-signal px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:border-ink hover:bg-ink"
    >
      <span aria-hidden="true">↑</span>
      Back to the top
    </a>
  );
}