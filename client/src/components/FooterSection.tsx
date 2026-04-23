/**
 * Café Lumière — Footer
 * Elegant dark footer with social links and newsletter
 */
export default function FooterSection() {
  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ background: "oklch(0.12 0.01 60)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
          {/* Brand */}
          <div>
            <p
              className="text-3xl mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "oklch(0.98 0.005 60)",
                letterSpacing: "0.1em",
              }}
            >
              一の矢ぬるぬる健康チーム
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.02 60)", fontWeight: 300 }}
            >
              筑波大学 雙峰祭出店。<br />
              一の矢学生宿舎発、本気の屋台。
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
            >
              Navigation
            </p>
            <div className="space-y-3">
              {["Concept", "Menu", "Atmosphere", "Access", "Reservation"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm transition-opacity duration-200 hover:opacity-60"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.75 0.01 60)", fontWeight: 300 }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
            >
              Follow Us
            </p>
            <div className="flex gap-4 mb-8">
              {[
                { label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:opacity-60"
                  style={{ border: "1px solid oklch(1 0 0 / 0.15)" }}
                  aria-label={s.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.75 0.01 60)">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.78 0.09 75)", fontWeight: 400 }}
            >
              Newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.98 0.005 60)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                  borderRight: "none",
                  fontWeight: 300,
                }}
              />
              <button
                className="px-5 py-3 text-xs tracking-[0.15em] uppercase transition-opacity duration-300 hover:opacity-80"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "oklch(0.78 0.09 75)",
                  color: "oklch(0.98 0.005 60)",
                  fontWeight: 400,
                  border: "none",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.01 60)", fontWeight: 300 }}
          >
            © 2024 一の矢ぬるぬる健康チーム / 筑波大学 雙峰祭
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-opacity duration-200 hover:opacity-60"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.01 60)", fontWeight: 300 }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
