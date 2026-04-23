/**
 * Café Lumière — Concept Section
 * Brand narrative: why this cafe exists
 * Layout: asymmetric — large display text left, body text right
 */
export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.98 0.005 60)" }}
    >
      {/* Decorative large background letter */}
      <div
        className="absolute -left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(12rem, 30vw, 28rem)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "oklch(0.88 0.045 10 / 0.18)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
        aria-hidden
      >
        L
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: large display text */}
          <div className="reveal-left">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
            >
              Our Philosophy
            </p>
            <h2
              className="leading-[1.05] mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "oklch(0.18 0.01 60)",
                letterSpacing: "-0.01em",
              }}
            >
              光が注ぐ、<br />
              <span style={{ color: "oklch(0.78 0.09 75)" }}>美しい時間</span>を<br />
              あなたに。
            </h2>
            <div
              style={{
                width: "3rem",
                height: "1px",
                background: "linear-gradient(90deg, oklch(0.78 0.09 75), transparent)",
              }}
            />
          </div>

          {/* Right: body text */}
          <div className="reveal-right space-y-6">
            <p
              className="text-lg leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 60)", fontWeight: 300 }}
            >
              Café Lumièreは、「光」を意味するフランス語から生まれました。
              一杯のコーヒーが持つ力——それは、慌ただしい日常の中に、
              ほんの少しの静けさと豊かさをもたらすことだと私たちは信じています。
            </p>
            <p
              className="text-lg leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 60)", fontWeight: 300 }}
            >
              厳選されたシングルオリジンの豆、季節の花々で彩られた空間、
              そして職人が丁寧に仕上げたパティスリー。
              すべては、あなたの「特別な瞬間」のために設計されています。
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t" style={{ borderColor: "oklch(0.90 0.02 60)" }}>
              {[
                { num: "12", label: "Signature Drinks" },
                { num: "8", label: "Seasonal Pastries" },
                { num: "∞", label: "Moments of Joy" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "oklch(0.78 0.09 75)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs tracking-[0.15em] uppercase mt-1"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 60)", fontWeight: 300 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
