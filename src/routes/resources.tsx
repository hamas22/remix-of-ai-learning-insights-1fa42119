import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { resourceGroups } from "@/data/resources";

export const Route = createFileRoute("/resources")({
  component: ResourcesHub,
  head: () => ({
    meta: [
      { title: "المصادر | ألاء الزهراني" },
      { name: "description", content: "أرشيف مصادر تعليمية: ملكية فكرية، تقويم إلكتروني، تقويم البرامج، وذكاء اصطناعي." },
    ],
  }),
});

function ResourcesHub() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-8 relative">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl reveal">
          <span className="tag-soft">المصادر والمراجع</span>
          <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6 leading-tight">
            أرشيف <span className="shimmer-text">القراءات</span>
          </h1>
          <div className="hairline w-32 mt-6 origin-right draw-line" />
          <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
            اختاري المحور لاستعراض المصادر العلمية والمؤسسية التي شكّلت معرفتي المهنية.
          </p>
        </div>
      </section>

      {/* CIRCLES */}
      <section className="px-6 md:px-14 pb-24 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-8">
            {resourceGroups.map((g, i) => (
              <div
                key={g.id}
                className={`flex justify-center reveal reveal-delay-${(i % 4) + 1} ${
                  i % 2 === 1 ? "md:translate-y-12" : ""
                }`}
              >
                <Link
                  to="/resources/$id"
                  params={{ id: g.id }}
                  className="group relative block"
                  aria-label={g.title}
                >
                  {/* rotating ring on hover */}
                  <span
                    className="pointer-events-none absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, var(--brand-mauve) 25%, transparent 50%, var(--brand-soft) 75%, transparent 100%)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                      mask:
                        "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                      animation: "spin 14s linear infinite",
                    }}
                  />

                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-cream border border-deep/15 shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-mauve/60 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft/25 via-transparent to-mauve/15 opacity-70 group-hover:opacity-100 transition-opacity" />

                    <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-deep/8 group-hover:bg-deep group-hover:text-cream text-deep text-xs font-display flex items-center justify-center transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <span className="text-2xl md:text-3xl mb-1.5 opacity-80 group-hover:opacity-100 transition">{g.emoji}</span>
                      <p className="font-display text-deep text-base md:text-lg leading-snug">
                        {g.title}
                      </p>
                      <span className="mt-2 inline-block w-8 h-px bg-mauve/60 group-hover:w-12 group-hover:bg-mauve transition-all duration-500" />
                      <p className="text-plum text-[11px] mt-1.5">
                        {String(g.items.length).padStart(2, "0")} مصدر
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
