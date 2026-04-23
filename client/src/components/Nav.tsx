/**
 * Café Lumière — Navigation
 * Sticky top nav that transitions from transparent to frosted glass on scroll
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Concept", href: "#concept" },
  { label: "Menu", href: "#menu" },
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Access", href: "#access" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled
          ? "oklch(0.98 0.005 60 / 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.90 0.02 60 / 0.5)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl tracking-widest"
          style={{
            fontFamily: "var(--font-display)",
            color: scrolled ? "oklch(0.18 0.01 60)" : "oklch(0.98 0.005 60)",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.15em",
          }}
        >
          Café Lumière
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: scrolled ? "oklch(0.18 0.01 60)" : "oklch(0.98 0.005 60)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#access"
            className="px-6 py-2 text-sm tracking-[0.15em] uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              border: `1px solid ${scrolled ? "oklch(0.78 0.09 75)" : "oklch(0.98 0.005 60 / 0.6)"}`,
              color: scrolled ? "oklch(0.78 0.09 75)" : "oklch(0.98 0.005 60)",
              borderRadius: "0",
            }}
          >
            Reserve
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
