import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { otherSections } from "@/data/works";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/works", label: "الأعمال" },
  { to: "/resources", label: "المصادر" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-500 ${
        scrolled
          ? "px-4 md:px-8 pt-3 pb-3"
          : "px-4 md:px-8 pt-5 pb-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-deep/15 shadow-[0_8px_30px_-12px_rgba(20,20,40,0.18)]"
            : "bg-cream/60 backdrop-blur-md border-deep/10 shadow-[0_4px_20px_-12px_rgba(20,20,40,0.12)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-3">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-deep text-cream font-display text-lg shadow-md transition-transform duration-500 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full ring-1 ring-deep/20 ring-offset-2 ring-offset-cream"></span>
              أ
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg md:text-xl text-deep tracking-tight">
                ألاء الزهراني
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-mauve">
                Educational Designer
              </span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1 md:gap-2">
            {links.map((l) => {
              const isWorks = l.to === "/works";
              const active =
                pathname === l.to || (isWorks && pathname.startsWith("/works"));
              return (
                <div key={l.to} className={isWorks ? "relative group" : ""}>
                  <Link
                    to={l.to}
                    className={`relative inline-flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      active
                        ? "bg-deep text-cream shadow-sm"
                        : "text-deep hover:bg-deep/5"
                    }`}
                  >
                    {l.label}
                    {isWorks && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          active ? "opacity-90" : "opacity-60"
                        }`}
                      >
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    )}
                  </Link>

                  {isWorks && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                        focus-within:opacity-100 focus-within:visible focus-within:translate-y-0
                        transition-all duration-300 z-40"
                    >
                      <div className="min-w-[300px] rounded-3xl bg-cream shadow-[0_20px_50px_-15px_rgba(20,20,40,0.25)] border border-deep/10 overflow-hidden p-2">
                        <Link
                          to="/works"
                          className="group/item flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-deep hover:text-cream text-deep transition-colors duration-200"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-full bg-deep/8 group-hover/item:bg-cream/15 flex items-center justify-center text-base transition-colors">
                              💡
                            </span>
                            <span className="font-bold text-sm">حلول تعليمية</span>
                          </span>
                          <span className="text-[10px] uppercase tracking-widest opacity-60">
                            الرئيسي
                          </span>
                        </Link>
                        <div className="h-px bg-deep/8 mx-3 my-1" />
                        {otherSections.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/works/${s.slug}` as string}
                            className="group/item flex items-center justify-between gap-3 px-4 py-3 rounded-2xl hover:bg-deep hover:text-cream text-deep transition-colors duration-200"
                          >
                            <span className="flex items-center gap-3">
                              <span className="w-9 h-9 rounded-full bg-deep/8 group-hover/item:bg-cream/15 flex items-center justify-center text-base transition-colors">
                                {s.emoji}
                              </span>
                              <span className="font-bold text-sm">{s.title}</span>
                            </span>
                            <span className="text-[11px] font-mono opacity-60">
                              {String(s.items.length).padStart(2, "0")}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
