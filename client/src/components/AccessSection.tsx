/**
 * Café Lumière — Access Section
 * Location, hours, and reservation info
 */
export default function AccessSection() {
  const hours = [
    { day: "月曜日 — 金曜日", time: "8:00 — 20:00" },
    { day: "土曜日", time: "9:00 — 21:00" },
    { day: "日曜日・祝日", time: "10:00 — 19:00" },
  ];

  return (
    <section
      id="access"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.98 0.005 60)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: info */}
          <div className="reveal-left space-y-12">
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
              >
                Find Us
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "oklch(0.18 0.01 60)",
                  lineHeight: 1.1,
                }}
              >
                Access
              </h2>
            </div>

            {/* Address */}
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 60)", fontWeight: 400 }}
              >
                Address
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.18 0.01 60)", fontWeight: 300 }}
              >
                〒150-0001<br />
                東京都渋谷区神宮前 3-14-8<br />
                Lumière Building 1F
              </p>
              <p
                className="text-sm mt-2"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 60)", fontWeight: 300 }}
              >
                表参道駅 A2出口より徒歩5分
              </p>
            </div>

            {/* Hours */}
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 60)", fontWeight: 400 }}
              >
                Opening Hours
              </p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-3 border-b"
                    style={{ borderColor: "oklch(0.90 0.02 60)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 60)", fontWeight: 300 }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        color: "oklch(0.18 0.01 60)",
                        fontWeight: 300,
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservation CTA */}
            <div>
              <a
                href="tel:03-0000-0000"
                className="inline-flex items-center gap-4 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  background: "oklch(0.18 0.01 60)",
                  color: "oklch(0.98 0.005 60)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Reservation: 03-0000-0000
              </a>
            </div>
          </div>

          {/* Right: map placeholder / decorative */}
          <div className="reveal-right">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "1/1",
                background: "oklch(0.94 0.02 10)",
                border: "1px solid oklch(0.90 0.02 60)",
              }}
            >
              {/* Decorative map-like grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "5rem",
                      fontStyle: "italic",
                      fontWeight: 300,
                      color: "oklch(0.88 0.045 10)",
                      lineHeight: 1,
                    }}
                  >
                    表参道
                  </div>
                  <div
                    className="mt-4 text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
                  >
                    Omotesando, Tokyo
                  </div>
                </div>
              </div>
              {/* Decorative lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0"
                  style={{
                    top: `${20 * (i + 1)}%`,
                    height: "1px",
                    background: "oklch(0.90 0.02 60)",
                  }}
                />
              ))}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: `${20 * (i + 1)}%`,
                    width: "1px",
                    background: "oklch(0.90 0.02 60)",
                  }}
                />
              ))}
              {/* Pin */}
              <div
                className="absolute"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -100%)" }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: "oklch(0.78 0.09 75)", boxShadow: "0 0 0 4px oklch(0.78 0.09 75 / 0.3)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
