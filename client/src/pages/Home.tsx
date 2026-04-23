/**
 * Café Lumière — Home Page
 * Design: Ethereal Maximalism × Sensory Overload
 * Palette: Pearl White / Blush Pink / Gold / Deep Mauve
 * Typography: Cormorant Garamond (display) + Jost (body)
 *
 * Sections:
 * 1. Hero — Full-screen parallax with petal particles
 * 2. Concept — Narrative / brand story
 * 3. Menu — Signature items with 3D hover cards
 * 4. Atmosphere — Parallax image gallery
 * 5. Testimonials — Social proof
 * 6. Access — Location & hours
 * 7. Footer
 */

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import MenuSection from "@/components/MenuSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccessSection from "@/components/AccessSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els.forEach((el) => observer.observe(el));

    const timer = setTimeout(() => setLoaded(true), 100);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
      <Nav />
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <AtmosphereSection />
      <TestimonialsSection />
      <AccessSection />
      <FooterSection />
    </div>
  );
}
