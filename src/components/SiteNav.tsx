import { Link, useLocation } from "@tanstack/react-router";
import { otherSections } from "@/data/works";

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
          {links.map((l) => {
            const isWorks = l.to === "/works";
            const active = pathname === l.to || (isWorks && pathname.startsWith("/works"));
            return (
              <div key={l.to} className={isWorks ? "relative group" : ""}>
                <Link to={l.to} className={`nav-link ${active ? "active" : ""}`}>
                  {l.label}
                </Link>
                {isWorks && (
                  <div
                    className="absolute top-full right-1/2 translate-x-1/2 pt-3 opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      focus-within:opacity-100 focus-within:visible focus-within:translate-y-0
                      transition-all duration-300 z-40"
                  >
                    <div className="min-w-[260px] rounded-2xl bg-cream shadow-xl border border-deep/10 overflow-hidden">
                      <Link
                        to="/works"
                        className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-deep hover:text-cream text-deep transition-colors duration-200 border-b border-deep/10"
                      >
                        <span className="flex items-center gap-3">
                          <span>💡</span>
                          <span className="font-bold">حلول تعليمية</span>
                        </span>
                        <span className="text-xs opacity-70">الرئيسي</span>
                      </Link>
                      {otherSections.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/works/${s.slug}` as string}
                          className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-deep hover:text-cream text-deep transition-colors duration-200 border-b last:border-b-0 border-deep/10"
                        >
                          <span className="flex items-center gap-3">
                            <span>{s.emoji}</span>
                            <span className="font-bold">{s.title}</span>
                          </span>
                          <span className="text-xs opacity-70">{s.items.length}</span>
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
      <div className="hairline mt-6" />
    </header>
  );
}
