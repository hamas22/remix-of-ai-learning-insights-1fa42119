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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to={`/works/${c.slug}` as string}
              className={`group reveal reveal-delay-${(i % 5) + 1} relative block aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              <img
                src={imageMap[c.slug]}
                alt={c.title}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />

              {/* Dark translucent overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Hover border frame */}
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-cream/0 group-hover:border-cream/80 transition-all duration-500" />

              {/* Centered title */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-3 z-10">
                <h2 className="font-display text-base md:text-lg lg:text-xl text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105">
                  {c.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
