/**
 * Café Lumière — Testimonials Section
 * Social proof with glassmorphism cards on blush background
 */
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Yuki M.",
    handle: "@yukicafe_diary",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    text: "ローズラテのラテアートが本当に美しくて、飲むのがもったいないくらい。空間も花に囲まれていて、まるでパリのカフェにいるみたい。",
    stars: 5,
  },
  {
    id: 2,
    name: "Haruka T.",
    handle: "@haruka_sweets",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    text: "アフタヌーンティーセットは2人でシェアしてもボリューム満点。スコーンのサクサク感が最高で、毎月来たいと思えるお気に入りのカフェになりました。",
    stars: 5,
  },
  {
    id: 3,
    name: "Saki N.",
    handle: "@saki_lumiere",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
    text: "季節のタルトが毎回違うので、何度来ても飽きません。インテリアも写真映えするし、友人へのプレゼントにもなるオリジナルグッズも素敵です。",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="oklch(0.78 0.09 75)">
          <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8l-2.78 1.55.53-3.09L1.5 4.27l3.11-.45L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.94 0.02 10)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "oklch(0.88 0.045 10 / 0.4)", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "oklch(0.78 0.09 75 / 0.2)", filter: "blur(80px)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
          >
            Guest Stories
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "oklch(0.18 0.01 60)",
              lineHeight: 1.1,
            }}
          >
            お客様の声
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              className="reveal glass-card p-8"
              style={{ transitionDelay: `${i * 0.12}s` } as React.CSSProperties}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <StarRow count={r.stars} />
              <p
                className="mt-5 mb-6 text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.35 0.02 60)", fontWeight: 300 }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: "2px solid oklch(0.78 0.09 75 / 0.4)" }}
                />
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.18 0.01 60)", fontWeight: 400 }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 300 }}
                  >
                    {r.handle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
