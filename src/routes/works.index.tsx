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
      { name: "description", content: "حلول تعليمية تطبيقية لمقررات الماجستير، مع روابط للأقسام الفرعية: تصاميم، تقارير، عروض، ورش." },
    ],
  }),
});

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
            القسم الرئيسي هنا هو <span className="text-deep font-bold">الحلول التعليمية</span>،
            وباقي الأقسام (التصاميم، التقارير، العروض، ورش العمل) ستجدينها كصفحات مستقلة من القائمة العلوية.
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {otherSections.map((s) => (
              <Link
                key={s.slug}
                to={`/works/${s.slug}` as string}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep/5 hover:bg-deep hover:text-cream text-deep text-sm font-bold transition-all duration-300 border border-deep/10"
              >
                <span>{s.emoji}</span>
                <span>{s.title}</span>
                <span className="text-xs opacity-70">({s.items.length})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS — main content */}
      <section className="px-6 md:px-14 pb-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-end reveal">
          <div className="md:col-span-3 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
              ١
            </div>
            <span className="text-4xl">💡</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-ar text-4xl md:text-5xl text-deep">حلول تعليمية</h2>
            <p className="text-plum/80 mt-3 leading-loose max-w-3xl">
              ستة حلول تعليمية تطبيقية تجمع بين التقنية والمحتوى الدراسي، مصمَّمة لمقررات الماجستير
              مع توضيح الهدف، الفئة المستهدفة، الوحدة، الدرس، والبرنامج المستخدم.
            </p>
            <div className="hairline mt-6 origin-right draw-line" />
          </div>
        </div>

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
                  <div className={`md:col-span-5 relative p-4 md:p-5 ${flip ? "md:order-2" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: s.image, alt: s.course })}
                      className="group/img relative block w-full h-full rounded-2xl overflow-hidden border border-deep/15 ring-1 ring-deep/5 bg-gradient-to-br from-[#fafaf7] to-[#f0e8e0] shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                      aria-label="عرض الصورة بحجم أكبر"
                    >
                      <div className="aspect-[4/3] md:aspect-[4/5] flex items-center justify-center p-4">
                        <img
                          src={s.image}
                          alt={s.course}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.03]"
                        />
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2 z-10">
                        <span className="text-xs bg-white/90 text-deep px-3 py-1 rounded-full font-bold shadow-sm backdrop-blur">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs bg-deep text-cream px-3 py-1 rounded-full font-bold shadow-sm">
                          {s.tag}
                        </span>
                      </div>
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-[10px] bg-deep/80 text-cream px-3 py-1.5 rounded-full font-bold backdrop-blur opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                        تكبير
                      </span>
                    </button>
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
