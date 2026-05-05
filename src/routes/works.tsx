import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/works")({
  component: Works,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "أعمال ومشاريع تعليمية: حلول، تصاميم، تقارير، عروض وورش عمل." },
    ],
  }),
});

type Item = { title: string; subtitle: string; meta?: string; tag?: string };
type Section = { id: string; title: string; index: string; emoji: string; items: Item[] };

const sections: Section[] = [
  {
    id: "solutions", index: "١", emoji: "💡", title: "حلول تعليمية",
    items: [
      { title: "الواقع المعزز في الكتاب المدرسي", subtitle: "د. جولين قطب", meta: "الثالث متوسط — الوراثة (DNA)", tag: "واقع معزز" },
      { title: "الجدول الدوري التفاعلي", subtitle: "د. جميلة العمري", meta: "الثالث متوسط — كيمياء", tag: "ستوري لاين" },
      { title: "Monopoly التعليمية لمراجعة العلوم", subtitle: "د. هناء مكي", meta: "الرابع الابتدائي", tag: "لعبة" },
      { title: "البحث عن الكنز بـ QR + AR", subtitle: "د. هناء مكي", meta: "الثالث الابتدائي — الضرب", tag: "تلعيب" },
      { title: "موقع تدريب المعلمات على الذكاء الاصطناعي", subtitle: "د. لينا الفراري", meta: "تدريب مهني", tag: "جينيالي" },
      { title: "حل تكاملي: Kahoot + الواقع المعزز", subtitle: "د. رنا شاهيني", meta: "الثاني الابتدائي — الفقاريات", tag: "تكاملي" },
    ],
  },
  {
    id: "designs", index: "٢", emoji: "🎨", title: "التصاميم",
    items: [
      { title: "تصور بيانات بـ Power BI", subtitle: "د. نجلاء العمري", meta: "اقتصاديات التعليم", tag: "بيانات" },
      { title: "إنفوجرافيك التعلم المقلوب", subtitle: "د. نجلاء العمري", meta: "صعوبات التعلم", tag: "كانفا" },
      { title: "إنفوجرافيك الذكاء الاصطناعي في التعليم", subtitle: "د. نجلاء العمري", tag: "كانفا" },
      { title: "المنظمات المتقدمة — أوزوبل", subtitle: "د. هناء المكي", meta: "جدول الضرب", tag: "جينيالي" },
      { title: "Raster vs Vector", subtitle: "د. أمجاد المجلد", tag: "فوتوبيا" },
    ],
  },
  {
    id: "reports", index: "٣", emoji: "📑", title: "التقارير",
    items: [
      { title: "تطبيق نظريات التعلم — Khan Academy Kids", subtitle: "د. رنا شاهيني", tag: "نظري" },
      { title: "الفصول المقلوبة والذكاء الاصطناعي", subtitle: "د. جميلة العمري", tag: "بحثي" },
      { title: "SCORM وصفحة ويب ديناميكية", subtitle: "د. نور الصبحي", meta: "كلاود + Netlify", tag: "ويب" },
    ],
  },
  {
    id: "presentations", index: "٤", emoji: "🎤", title: "العروض",
    items: [
      { title: "البحث المقارن السببي", subtitle: "د. لينا الفراري", meta: "كتيب + تقرير + عرض", tag: "كمي" },
      { title: "الأنماط التعليمية والألعاب التربوية", subtitle: "د. هناء المكي", tag: "ألعاب" },
      { title: "التعلم المصغر والاعتمادات الرقمية", subtitle: "د. جميلة العمري", tag: "حديث" },
    ],
  },
  {
    id: "workshops", index: "٥", emoji: "🛠️", title: "ورش العمل",
    items: [
      { title: "Unreal Engine لبيئات الواقع الافتراضي", subtitle: "د. جولين قطب", meta: "نظارات VR", tag: "غامرة" },
      { title: "التعلم التكيفي ومنصة DreamBox", subtitle: "د. نجلاء العمري", tag: "تكيفي" },
      { title: "تصميم الفيديو عبر Canva", subtitle: "د. أمجاد المجلد", tag: "تطبيقي" },
      { title: "إدارة بيئات التعلم الإلكتروني", subtitle: "د. نور الصبحي", tag: "إدارة" },
      { title: "أنظمة تقويم التعليم الإلكتروني", subtitle: "د. هوازن الحربي", tag: "تقويم" },
      { title: "مصادر التعلم الرقمي", subtitle: "د. أمجاد المجلد", tag: "مصادر" },
    ],
  },
];

function Works() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-mauve/15 blur-3xl animate-float-rev pointer-events-none" />
        <div className="grid md:grid-cols-12 gap-10 items-end relative">
          <div className="md:col-span-8 reveal">
            <span className="chip">المشاريع والأعمال</span>
            <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6">
              <span className="shimmer-text">أعمالي</span>
            </h1>
            <div className="hairline w-32 mt-6 origin-right draw-line" />
            <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
              مجموعة من المشاريع الأكاديمية والتطبيقية موزّعة على خمسة محاور:
              الحلول التعليمية، التصاميم، التقارير، العروض، وورش العمل.
            </p>
          </div>
          <div className="md:col-span-4 reveal reveal-delay-2">
            <div className="editorial-card p-6">
              <p className="text-mauve font-bold mb-4">فهرس الأقسام</p>
              <ul className="space-y-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-deep hover:text-mauve transition-colors duration-300 group"
                    >
                      <span className="w-8 h-8 rounded-full bg-deep/10 flex items-center justify-center font-display text-deep group-hover:bg-deep group-hover:text-cream transition-all duration-300">
                        {s.index}
                      </span>
                      <span className="flex-1">{s.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        ←
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="space-y-28 pb-10">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="px-6 md:px-14 scroll-mt-24">
            <div className="grid md:grid-cols-12 gap-8 mb-10 items-end reveal">
              <div className="md:col-span-3 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
                  {s.index}
                </div>
                <span className="text-4xl">{s.emoji}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-ar text-4xl md:text-5xl text-deep">
                  {s.title}
                </h2>
                <div className="hairline mt-6 origin-right draw-line" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.items.map((it, i) => (
                <article
                  key={i}
                  className="editorial-card overflow-hidden flex flex-col reveal"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="relative aspect-[4/3] frame-deep overflow-hidden">
                    {/* decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cream/10 animate-float" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-cream/5 animate-float-rev" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-cream">
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-cream/20 px-3 py-1 rounded-full">
                          {s.index} · {String(i + 1).padStart(2, "0")}
                        </span>
                        {it.tag && (
                          <span className="text-sm bg-cream/15 px-3 py-1 rounded-full">
                            {it.tag}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-5xl mb-2">{s.emoji}</p>
                        <p className="font-display text-2xl opacity-90">
                          {s.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-deep text-lg leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-mauve text-sm">{it.subtitle}</p>
                    {it.meta && (
                      <p className="mt-2 text-deep/60 text-sm">{it.meta}</p>
                    )}
                    <div className="hairline mt-5" />
                    <div className="mt-4 flex items-center justify-between text-deep/70 text-sm">
                      <span>مشروع رقم {String(i + 1).padStart(2, "0")}</span>
                      <span className="font-bold transition-transform duration-300 hover:-translate-x-1">
                        عرض ←
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
