/**
 * Café Lumière — Menu Section
 * Signature items with 3D tilt hover cards
 * Images: coffee_hero, pastry_hero + Unsplash for extras
 */
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const COFFEE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663580896162/mYnBLiTpqmy7fL5jsCADaY/coffee_hero-XzS482vLREFHYiKjsmRjRN.webp";
const PASTRY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663580896162/mYnBLiTpqmy7fL5jsCADaY/pastry_hero-byrJ7qsQVEHSst53Tt4Q2b.webp";

const menuItems = [
  {
    id: 1,
    category: "Signature Coffee",
    name: "Rose Latte",
    nameJp: "ローズラテ",
    description: "バラのシロップと特製フォームミルクで描いた、一輪の薔薇。エチオピア産豆の果実味が華やかに広がります。",
    price: "¥980",
    image: COFFEE_IMG,
    tag: "Most Popular",
  },
  {
    id: 2,
    category: "Pâtisserie",
    name: "Seasonal Tart",
    nameJp: "季節のタルト",
    description: "毎朝焼き上げる、旬のフルーツを贅沢に使ったタルト。サクサクのパート・シュクレと濃厚なクレームダマンドの調和。",
    price: "¥750",
    image: PASTRY_IMG,
    tag: "Chef's Choice",
  },
  {
    id: 3,
    category: "Afternoon Tea",
    name: "Lumière Set",
    nameJp: "ルミエールセット",
    description: "3段スタンドに並ぶ、サンドイッチ・スコーン・プチガトーの贅沢なアフタヌーンティーセット。2名様より。",
    price: "¥3,800",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "For Two",
  },
];

function Card3D({ item }: { item: typeof menuItems[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        borderRadius: 0,
      }}
      animate={{
        rotateX: hovered ? tilt.x : 0,
        rotateY: hovered ? tilt.y : 0,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, oklch(0.18 0.01 60 / 0.7) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-body)",
            background: "oklch(0.78 0.09 75)",
            color: "oklch(0.98 0.005 60)",
            fontWeight: 400,
          }}
        >
          {item.tag}
        </div>
      </div>

      {/* Content */}
      <div
        className="p-6"
        style={{ background: "oklch(1 0 0)" }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
        >
          {item.category}
        </p>
        <div className="flex items-baseline justify-between mb-3">
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.6rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: "oklch(0.18 0.01 60)",
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "oklch(0.78 0.09 75)",
            }}
          >
            {item.price}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 60)", fontWeight: 300 }}
        >
          {item.description}
        </p>
      </div>

      {/* Gold bottom border that grows on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: "oklch(0.78 0.09 75)" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(0.96 0.01 60)" }}
    >
      {/* Section header */}
      <div className="container mb-16">
        <div className="flex flex-col items-start reveal">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
          >
            Our Offerings
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
            Signature Menu
          </h2>
          <div
            className="mt-4"
            style={{
              width: "3rem",
              height: "1px",
              background: "linear-gradient(90deg, oklch(0.78 0.09 75), transparent)",
            }}
          />
        </div>
      </div>

      {/* Cards grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.15}s` } as React.CSSProperties}
            >
              <Card3D item={item} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16 reveal">
          <a
            href="#access"
            className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:gap-6"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.07 330)", fontWeight: 400 }}
          >
            <span
              style={{
                display: "block",
                width: "2rem",
                height: "1px",
                background: "oklch(0.45 0.07 330)",
              }}
            />
            View Full Menu
            <span
              style={{
                display: "block",
                width: "2rem",
                height: "1px",
                background: "oklch(0.45 0.07 330)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
