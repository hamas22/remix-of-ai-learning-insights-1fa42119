import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "الرئيسية", en: "Index" },
  { to: "/works", label: "الأعمال", en: "Works" },
  { to: "/resources", label: "المصادر", en: "Archive" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  return (
    <header className="px-6 md:px-14 pt-8 pb-6">
      <div className="flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif-en text-2xl md:text-3xl text-deep italic">Alaa</span>
          <span className="font-mono-en text-deep/60">— Portfolio · 2026</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname === l.to ? "active" : ""}`}
            >
              <span className="hidden md:inline font-mono-en ml-2 text-deep/50">
                0{links.indexOf(l) + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hairline mt-6" />
    </header>
  );
}
