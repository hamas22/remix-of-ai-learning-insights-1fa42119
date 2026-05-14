import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions } from "@/data/works";

export const Route = createFileRoute("/works/solutions/")({
  component: SolutionsHub,
  head: () => ({
    meta: [
      { title: "الحلول التعليمية | ألاء الزهراني" },
      { name: "description", content: "ستة حلول تعليمية تطبيقية: واقع معزز، ستوري لاين، تلعيب، ألعاب تعليمية، تدريب رقمي، وتكاملي." },
    ],
  }),
});

function SolutionsHub() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-8 pb-4 relative">
        <div className="absolute top-6 left-10 w-56 h-56 rounded-full bg-mauve/15 blur-3xl animate-float-rev pointer-events-none" />
        <div className="relative reveal max-w-3xl">
          <span className="tag-soft">القسم الأول</span>
          <h1 className="display-ar text-3xl md:text-5xl text-deep mt-3">
            <span className="shimmer-text">حلول تعليمية</span>
          </h1>
          <div className="hairline w-24 mt-3 origin-right draw-line" />
          <p className="text-plum text-sm md:text-base leading-relaxed mt-3">
            اختاري نوع الحل لاستعراض تفاصيله الكاملة — الهدف، الفئة المستهدفة، البرنامج، والمنتج النهائي.
          </p>
        </div>
      </section>

      {/* CIRCLES — double ring modernist */}
      <section className="px-6 md:px-14 pb-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 md:gap-y-20 gap-x-8 md:gap-x-12">
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center text-center reveal reveal-delay-${(i % 5) + 1}`}
              >
                <Link
                  to="/works/solutions/$id"
                  params={{ id: String(i + 1) }}
                  aria-label={s.tag}
                  className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center transition-all duration-500"
                >
                  {/* Outer dashed rotating ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700 group-hover:rotate-45"
                    style={{ borderColor: "color-mix(in oklab, var(--brand-mauve) 45%, transparent)" }}
                  />

                  {/* Inner solid ring */}
                  <div
                    className="absolute inset-3 rounded-full border-[3px] bg-cream shadow-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      borderColor: "var(--brand-deep)",
                      boxShadow: "0 18px 40px -18px color-mix(in oklab, var(--brand-deep) 40%, transparent)",
                    }}
                  >
                    {!s.circleImage && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-deep text-cream text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}

                    {s.circleImage ? (
                      <img
                        src={s.circleImage}
                        alt={s.tag}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-5 text-center">
                        <h3 className="font-display text-deep text-base md:text-xl mb-1.5 mt-1">
                          {s.tag}
                        </h3>
                        <div className="w-10 h-0.5 bg-mauve/50 mb-2" />
                        <p className="text-mauve text-[10px] md:text-xs font-medium tracking-tight line-clamp-2 max-w-[8rem]">
                          {s.program}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>

                <p className="mt-3 font-display text-deep text-sm md:text-base">
                  {s.tag}
                </p>
                <p className="mt-1 text-plum/70 text-xs md:text-sm leading-relaxed max-w-[12rem]">
                  {s.course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
