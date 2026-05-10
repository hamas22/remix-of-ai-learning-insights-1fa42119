import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions, otherSections } from "@/data/works";

export const Route = createFileRoute("/works/")({
  component: WorksHub,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "أقسام الأعمال: حلول تعليمية، تصاميم، تقارير، عروض، وورش عمل." },
    ],
  }),
});

const categories = [
  {
    slug: "solutions",
    index: "١",
    emoji: "💡",
    title: "حلول تعليمية",
    description: "حلول تطبيقية لمقررات الماجستير تجمع التقنية والمحتوى التعليمي.",
    count: solutions.length,
  },
  ...otherSections.map((s) => ({
    slug: s.slug,
    index: s.index,
    emoji: s.emoji,
    title: s.title,
    description: s.description,
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
          <span className="chip">المشاريع والأعمال</span>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to={`/works/${c.slug}` as string}
              className={`group reveal reveal-delay-${(i % 4) + 1} relative block rounded-[2rem] overflow-hidden bg-cream border border-deep/15 hover:border-mauve/50 p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-deep via-mauve to-plum" />
              <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-mauve/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full frame-deep flex items-center justify-center font-display text-2xl text-cream shadow-md">
                      {c.index}
                    </div>
                    <div>
                      <p className="text-mauve text-[10px] font-bold tracking-[0.4em] uppercase">
                        Section
                      </p>
                      <p className="font-display text-2xl text-deep mt-0.5">{c.title}</p>
                    </div>
                  </div>
                  <span className="text-5xl text-mauve/40 group-hover:text-mauve/70 transition-colors">
                    {c.emoji}
                  </span>
                </div>

                <div className="hairline mb-5" />

                <p className="text-plum leading-loose text-[15px] min-h-[3.5rem]">
                  {c.description}
                </p>

                <div className="flex items-center justify-between mt-7">
                  <span className="text-xs bg-deep/5 text-deep px-3 py-1.5 rounded-full font-bold">
                    {c.count} عنصر
                  </span>
                  <span className="inline-flex items-center gap-2 text-deep font-bold text-sm group-hover:text-mauve transition-colors">
                    استعراض
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
