import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/works", label: "الأعمال" },
  { to: "/resources", label: "المصادر" },
];

export default function SiteNav() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full px-6 md:px-12 pt-6">
      <div className="flex flex-wrap gap-3 justify-center md:justify-end">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`pill-nav ${pathname === l.to ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
