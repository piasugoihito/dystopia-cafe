/**
 * Café Lumière — Atmosphere Section
 * Parallax image gallery showing cafe ambiance
 * Uses cafe_evening.png + Unsplash images
 */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EVENING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663580896162/mYnBLiTpqmy7fL5jsCADaY/cafe_evening-bfSPbR7jLQ4ST7XPyKrCt7.webp";

const galleryItems = [
  {
    id: 1,
    img: EVENING_IMG,
    label: "Evening Ambiance",
    labelJp: "夜の雰囲気",
    speed: 0.15,
    size: "large",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    label: "Crafted with Love",
    labelJp: "愛を込めて",
    speed: -0.1,
    size: "small",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    label: "Peaceful Moments",
    labelJp: "静かな時間",
    speed: 0.2,
    size: "small",
  },
];

function ParallaxImage({ src, speed }: { src: string; speed: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <motion.img
        src={src}
        alt=""
        className="w-full h-[120%] object-cover -mt-[10%]"
        style={{ y }}
      />
    </div>
  );
}

export default function AtmosphereSection() {
  return (
    <section
      id="atmosphere"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.18 0.01 60)" }}
    >
      {/* Section header */}
      <div className="container mb-16">
        <div className="reveal flex flex-col items-start">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
          >
            The Space
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "oklch(0.98 0.005 60)",
              lineHeight: 1.1,
            }}
          >
            Atmosphere
          </h2>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large image — left */}
          <div className="md:col-span-7 reveal-left" style={{ aspectRatio: "4/5" }}>
            <div className="relative w-full h-full overflow-hidden group">
              <ParallaxImage src={EVENING_IMG} speed={0.08} />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, oklch(0.18 0.01 60 / 0.8), transparent)",
                }}
              >
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
                >
                  Evening Ambiance
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "oklch(0.98 0.005 60)",
                  }}
                >
                  夜の雰囲気
                </p>
              </div>
            </div>
          </div>

          {/* Right column — two stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="reveal-right" style={{ aspectRatio: "4/3" }}>
              <div className="relative w-full h-full overflow-hidden group">
                <ParallaxImage src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" speed={-0.06} />
                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, oklch(0.18 0.01 60 / 0.6), transparent)" }}
                >
                  <div>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
                    >
                      Crafted with Love
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontStyle: "italic",
                        fontWeight: 300,
                        color: "oklch(0.98 0.005 60)",
                      }}
                    >
                      愛を込めて
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right" style={{ aspectRatio: "4/3", transitionDelay: "0.15s" } as React.CSSProperties}>
              <div className="relative w-full h-full overflow-hidden group">
                <ParallaxImage src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80" speed={0.1} />
                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, oklch(0.18 0.01 60 / 0.6), transparent)" }}
                >
                  <div>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
                    >
                      Peaceful Moments
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontStyle: "italic",
                        fontWeight: 300,
                        color: "oklch(0.98 0.005 60)",
                      }}
                    >
                      静かな時間
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating quote */}
      <div className="container mt-20 reveal">
        <div className="max-w-2xl mx-auto text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "oklch(0.88 0.045 10)",
              lineHeight: 1.6,
            }}
          >
            "一杯のコーヒーは、<br />
            世界で最も小さな贅沢である。"
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span style={{ display: "block", width: "2rem", height: "1px", background: "oklch(0.78 0.09 75 / 0.5)" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 300 }}
            >
              Café Lumière
            </span>
            <span style={{ display: "block", width: "2rem", height: "1px", background: "oklch(0.78 0.09 75 / 0.5)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
