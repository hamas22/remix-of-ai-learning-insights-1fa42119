import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions, otherSections } from "@/data/works";

import imgSolutions from "@/assets/cat-solutions.jpg";
import imgDesigns from "@/assets/cat-designs.jpg";
import imgReports from "@/assets/cat-reports.jpg";
import imgPresentations from "@/assets/cat-presentations.jpg";
import imgWorkshops from "@/assets/cat-workshops.jpg";

export const Route = createFileRoute("/works/")({
  component: WorksHub,
  head: () => ({
    meta: [
      { title: "أعمالي | ألاء الزهراني" },
      { name: "description", content: "أقسام الأعمال: حلول تعليمية، تصاميم، تقارير، عروض، وورش عمل." },
    ],
  }),
});

const imageMap: Record<string, string> = {
  solutions: imgSolutions,
  designs: imgDesigns,
  reports: imgReports,
  presentations: imgPresentations,
  workshops: imgWorkshops,
};

const categories = [
  {
    slug: "solutions",
    index: "١",
    title: "حلول تعليمية",
    count: solutions.length,
  },
  ...otherSections.map((s) => ({
    slug: s.slug,
    index: s.index,
    title: s.title,
    count: s.items.length,
  })),
];

function WorksHub() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-12 relative">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-mauve/15 blur-3xl animate-float-rev pointer-events-none" />
        <div className="relative reveal max-w-3xl">
          <span className="tag-soft">المشاريع والأعمال</span>
          <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6">
            <span className="shimmer-text">أعمالي</span>
          </h1>
          <div className="hairline w-32 mt-6 origin-right draw-line" />
          <p className="text-plum text-lg leading-loose mt-8">
            اختاري أحد الأقسام للاطّلاع على تفاصيله وأعماله.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 md:px-14 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to={`/works/${c.slug}` as string}
              className={`group reveal reveal-delay-${(i % 5) + 1} relative block aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-1`}
            >
              {/* Image */}
              <img
                src={imageMap[c.slug]}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />

              {/* Dark vignette overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/35 to-deep/15 transition-opacity duration-500 group-hover:from-deep/90" />

              {/* Animated double border on hover */}
              <div className="pointer-events-none absolute inset-3 rounded-[1.65rem] border border-cream/0 group-hover:border-cream/70 transition-all duration-500" />
              <div className="pointer-events-none absolute inset-5 rounded-[1.4rem] border border-cream/0 group-hover:border-cream/25 transition-all duration-700 delay-75" />

              {/* Top index badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream/90 backdrop-blur text-deep font-display text-lg shadow-md group-hover:bg-cream transition-colors">
                  {c.index}
                </span>
              </div>

              {/* Top-left tiny label */}
              <div className="absolute top-7 left-6 z-10">
                <span className="text-cream/80 text-[10px] font-bold tracking-[0.4em] uppercase">
                  Section
                </span>
              </div>

              {/* Centered title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                <h2 className="font-display text-3xl md:text-4xl text-cream drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-1">
                  {c.title}
                </h2>
                <div className="mt-4 w-12 h-px bg-cream/60 transition-all duration-500 group-hover:w-20 group-hover:bg-cream" />
              </div>

              {/* Bottom action row */}
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cream/85 bg-cream/10 backdrop-blur px-3 py-1.5 rounded-full border border-cream/20">
                  {String(c.count).padStart(2, "0")} عنصر
                </span>
                <span className="inline-flex items-center gap-2 text-cream font-bold text-sm">
                  استعراض
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
