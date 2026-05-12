import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions } from "@/data/works";

export const Route = createFileRoute("/works/solutions")({
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

      {/* CIRCLES — staggered grid */}
      <section className="px-6 md:px-14 pb-16 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-8 gap-x-6 md:gap-x-10">
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`flex justify-center reveal reveal-delay-${(i % 5) + 1}`}
              >
                <Link
                  to="/works/solutions/$id"
                  params={{ id: String(i + 1) }}
                  className="group relative block"
                  aria-label={s.tag}
                >
                  {/* outer rotating dotted ring */}
                  <span
                    className="pointer-events-none absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, var(--brand-mauve) 25%, transparent 50%, var(--brand-soft) 75%, transparent 100%)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                      mask:
                        "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                      animation: "spin 12s linear infinite",
                    }}
                  />

                  {/* circle */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-cream border border-deep/15 shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-mauve/60 overflow-hidden">
                    {/* soft inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-soft/20 via-transparent to-mauve/15 opacity-70 group-hover:opacity-100 transition-opacity" />

                    {/* index badge */}
                    <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-deep/8 group-hover:bg-deep group-hover:text-cream text-deep text-xs font-display flex items-center justify-center transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <p className="font-display text-deep text-base md:text-lg leading-snug">
                        {s.tag}
                      </p>
                      <span className="mt-2 inline-block w-8 h-px bg-mauve/60 group-hover:w-12 group-hover:bg-mauve transition-all duration-500" />
                      <p className="text-plum text-[10px] md:text-[11px] mt-2 line-clamp-1 max-w-[8rem]">
                        {s.program}
                      </p>
                    </div>
                  </div>

                  {/* tooltip course name below */}
                  <p className="text-center text-deep/70 text-xs mt-3 max-w-[10rem] mx-auto leading-snug opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.course}
                  </p>
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
