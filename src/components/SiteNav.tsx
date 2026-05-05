import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/works", label: "الأعمال" },
  { to: "/resources", label: "المصادر" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  return (
    <header className="px-6 md:px-14 pt-8 pb-6 sticky top-0 z-30 backdrop-blur-md bg-cream/70">
      <div className="flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl md:text-3xl text-deep">
          ألاء الزهراني
        </Link>
        <nav className="flex items-center gap-5 md:gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname === l.to ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hairline mt-6" />
    </header>
  );
}
