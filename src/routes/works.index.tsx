import { createFileRoute, Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { categoryHub } from "@/data/works";

export const Route = createFileRoute("/works/")({
  component: WorksHub,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "فهرس أقسام الأعمال: حلول تعليمية، تصاميم، تقارير، عروض، ورش عمل." },
    ],
  }),
});

function WorksHub() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-mauve/15 blur-3xl animate-float-rev pointer-events-none" />
        <div className="reveal max-w-3xl relative">
          <span className="chip">المشاريع والأعمال</span>
          <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6">
            <span className="shimmer-text">أعمالي</span>
          </h1>
          <div className="hairline w-32 mt-6 origin-right draw-line" />
          <p className="text-plum text-lg leading-loose mt-8">
            خمسة محاور تجمع مشاريعي الأكاديمية والتطبيقية. اختاري القسم لتفتح في صفحته الخاصة.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-14 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryHub.map((c, i) => (
            <Link
              key={c.slug}
              to={`/works/${c.slug}` as string}
              className="reveal editorial-card overflow-hidden group block"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/3] frame-deep overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cream/10 animate-float" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-cream/5 animate-float-rev" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-cream">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center font-display text-lg">
                      {c.index}
                    </span>
                    <span className="text-sm bg-cream/15 px-3 py-1 rounded-full">
                      {c.count} مشروع
                    </span>
                  </div>
                  <div>
                    <p className="text-5xl mb-2">{c.emoji}</p>
                    <p className="font-display text-2xl">{c.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-deep/80 leading-loose text-sm">{c.description}</p>
                <div className="hairline mt-5" />
                <div className="mt-4 flex items-center justify-between text-deep">
                  <span className="text-mauve text-sm font-bold">استعراض القسم</span>
                  <span className="font-bold transition-transform duration-300 group-hover:-translate-x-2">←</span>
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
