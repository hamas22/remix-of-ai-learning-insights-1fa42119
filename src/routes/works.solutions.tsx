import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions } from "@/data/works";

export const Route = createFileRoute("/works/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "حلول تعليمية | الأعمال" },
      { name: "description", content: "ستة حلول تعليمية تطبيقية تجمع بين التقنية والمحتوى الدراسي." },
    ],
  }),
});

function SolutionsPage() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      <section className="px-6 md:px-14 pt-10 pb-12 relative">
        <Link to="/works" className="text-mauve text-sm hover:text-deep transition-colors">
          ← العودة إلى الأعمال
        </Link>
        <div className="grid md:grid-cols-12 gap-8 mt-6 items-end reveal">
          <div className="md:col-span-3 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
              ١
            </div>
            <span className="text-4xl">💡</span>
          </div>
          <div className="md:col-span-9">
            <h1 className="display-ar text-4xl md:text-6xl text-deep">حلول تعليمية</h1>
            <p className="text-plum/80 mt-3 leading-loose max-w-3xl">
              ستة حلول تعليمية تطبيقية تجمع بين التقنية والمحتوى الدراسي، مصمَّمة لمقررات الماجستير
              مع توضيح الهدف، الفئة المستهدفة، الوحدة، الدرس، والبرنامج المستخدم.
            </p>
            <div className="hairline mt-6 origin-right draw-line" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 pb-24">
        <div className="space-y-12">
          {solutions.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={i}
                className="editorial-card overflow-hidden reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid md:grid-cols-12">
                  <div className={`md:col-span-5 relative bg-white p-3 md:p-4 ${flip ? "md:order-2" : ""}`}>
                    <div className="relative h-full min-h-[280px] rounded-xl overflow-hidden border border-deep/15 ring-1 ring-deep/5 bg-[#fafaf7]">
                      <img
                        src={s.image}
                        alt={s.course}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 flex gap-2 z-10">
                        <span className="text-xs bg-white/90 text-deep px-3 py-1 rounded-full font-bold shadow-sm backdrop-blur">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs bg-deep text-cream px-3 py-1 rounded-full font-bold shadow-sm">
                          {s.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
                    <p className="text-mauve text-sm font-bold tracking-wide">{s.course}</p>
                    <h3 className="display-ar text-2xl md:text-3xl text-deep mt-2 leading-snug">
                      {s.lesson !== "—" ? s.lesson : s.unit !== "—" ? s.unit : s.course}
                    </h3>
                    <p className="text-plum mt-1">{s.doctor}</p>

                    <div className="hairline my-5" />

                    <p className="text-deep/80 leading-loose text-[15px]">{s.goal}</p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-sm">
                      <Detail label="الفئة المستهدفة" value={s.audience} />
                      <Detail label="الفصل الدراسي" value={s.semester} />
                      <Detail label="الوحدة / القسم" value={s.unit} />
                      <Detail label="موضوع الدرس" value={s.lesson} />
                      <Detail label="البرنامج" value={s.program} />
                      <Detail label="المنتج النهائي" value={s.product} />
                    </div>

                    {s.links.length > 0 && (
                      <div className="mt-7 pt-5 border-t border-deep/10">
                        <p className="text-mauve text-xs font-bold tracking-wide mb-3">روابط المنتج</p>
                        <div className="flex flex-wrap gap-2">
                          {s.links.map((l, k) => {
                            const external = l.href.startsWith("http");
                            return (
                              <a
                                key={k}
                                href={l.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                download={!external || undefined}
                                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep text-cream text-sm font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                              >
                                <span>{l.label}</span>
                                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-mauve text-xs font-bold tracking-wide mb-1">{label}</p>
      <p className="text-deep">{value}</p>
    </div>
  );
}
