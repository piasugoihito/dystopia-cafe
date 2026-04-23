/**
 * Café Lumière — Hero Section
 * Full-screen parallax hero with animated petal particles
 * Background: hero_morning.png (light/warm image → dark text)
 */
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663580896162/mYnBLiTpqmy7fL5jsCADaY/hero_morning-2ChVGucaLbQvvGcLAmPzCY.webp";

// Petal particle component
function Petal({ delay, x, duration, size }: { delay: number; x: number; duration: number; size: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${x}%`,
        top: "-5%",
        width: size,
        height: size,
        borderRadius: "50% 0 50% 0",
        background: `oklch(${0.85 + Math.random() * 0.1} 0.04 ${10 + Math.random() * 20})`,
        opacity: 0.6,
      }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, Math.sin(delay) * 80],
        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
        opacity: [0, 0.7, 0.7, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: i * 0.9,
  x: Math.random() * 100,
  duration: 8 + Math.random() * 8,
  size: 8 + Math.random() * 14,
}));

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: imgY }}
      >
        <img
          src={HERO_IMG}
          alt="Café Lumière interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay — light image → use dark-ish overlay at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.98 0.005 60 / 0.05) 0%, oklch(0.98 0.005 60 / 0.1) 40%, oklch(0.98 0.005 60 / 0.7) 80%, oklch(0.98 0.005 60 / 0.95) 100%)",
          }}
        />
      </motion.div>

      {/* Petal particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((p) => (
          <Petal key={p.id} {...p} />
        ))}
      </div>

      {/* Hero text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Est. 2024 · Paris-Inspired
        </motion.p>

        <motion.h1
          className="leading-none mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "oklch(0.18 0.01 60)",
            letterSpacing: "-0.01em",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Café Lumière
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span style={{ display: "block", width: "4rem", height: "1px", background: "oklch(0.78 0.09 75)" }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.07 330)", fontWeight: 300 }}
          >
            光の中の一杯
          </span>
          <span style={{ display: "block", width: "4rem", height: "1px", background: "oklch(0.78 0.09 75)" }} />
        </motion.div>

        <motion.p
          className="max-w-md text-base leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 60)", fontWeight: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          すべての一杯に、物語がある。<br />
          光と花と香りが溶け合う、特別な時間へ。
        </motion.p>

        <motion.a
          href="#concept"
          className="px-10 py-4 text-sm tracking-[0.25em] uppercase transition-all duration-500 hover:bg-opacity-90"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            background: "oklch(0.18 0.01 60)",
            color: "oklch(0.98 0.005 60)",
            letterSpacing: "0.25em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Discover
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 60)", fontWeight: 300 }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, oklch(0.78 0.09 75), transparent)",
          }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
