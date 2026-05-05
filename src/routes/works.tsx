import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/works")({
  component: Works,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "أعمال ومشاريع تعليمية: حلول، تصاميم، تقارير، عروض وورش عمل." },
    ],
  }),
});

type Item = { title: string; subtitle: string; meta?: string };

const sections: { id: string; title: string; emoji: string; items: Item[] }[] = [
  {
    id: "solutions",
    title: "حلول تعليمية",
    emoji: "💡",
    items: [
      { title: "الواقع المعزز في الكتاب المدرسي", subtitle: "د. جولين قطب · BlippAR", meta: "الصف الثالث متوسط — الوراثة (DNA)" },
      { title: "الجدول الدوري التفاعلي", subtitle: "د. جميلة العمري · Articulate Storyline", meta: "الصف الثالث متوسط — كيمياء" },
      { title: "Monopoly التعليمية لمراجعة العلوم", subtitle: "د. هناء مكي · لعبة فيزيائية", meta: "الصف الرابع الابتدائي" },
      { title: "البحث عن الكنز بـ QR + AR", subtitle: "د. هناء مكي", meta: "الضرب — الصف الثالث الابتدائي" },
      { title: "موقع تدريبي للمعلمات على الذكاء الاصطناعي", subtitle: "د. لينا الفراري · Genially", meta: "تدريب مهني" },
      { title: "حل تكاملي: Kahoot + AR", subtitle: "د. رنا شاهيني", meta: "الصف الثاني الابتدائي — الفقاريات" },
    ],
  },
  {
    id: "designs",
    title: "التصاميم",
    emoji: "🎨",
    items: [
      { title: "تصور بيانات بـ Power BI", subtitle: "د. نجلاء العمري", meta: "اقتصاديات التعليم الإلكتروني" },
      { title: "إنفوجرافيك التعلم المقلوب", subtitle: "د. نجلاء العمري · Canva", meta: "صعوبات التعلم" },
      { title: "إنفوجرافيك الذكاء الاصطناعي في التعليم", subtitle: "د. نجلاء العمري · Canva" },
      { title: "المنظمات المتقدمة - أوزوبل", subtitle: "د. هناء المكي · Genially", meta: "جدول الضرب" },
      { title: "Raster vs Vector", subtitle: "د. أمجاد المجلد · Photopea + Heyzine" },
    ],
  },
  {
    id: "reports",
    title: "التقارير",
    emoji: "📑",
    items: [
      { title: "تطبيق نظريات التعلم — Khan Academy Kids", subtitle: "د. رنا شاهيني" },
      { title: "Flipped Classrooms & AI", subtitle: "د. جميلة العمري" },
      { title: "SCORM وصفحة ويب ديناميكية", subtitle: "د. نور الصبحي · Cloud + Netlify" },
    ],
  },
  {
    id: "presentations",
    title: "العروض",
    emoji: "🎤",
    items: [
      { title: "البحث المقارن السببي", subtitle: "د. لينا الفراري", meta: "كتيب + تقرير + عرض" },
      { title: "الأنماط التعليمية والألعاب التربوية", subtitle: "د. هناء المكي" },
      { title: "Microlearning & Digital Credentials", subtitle: "د. جميلة العمري" },
    ],
  },
  {
    id: "workshops",
    title: "ورش العمل",
    emoji: "🛠️",
    items: [
      { title: "Unreal Engine لبيئات الواقع الافتراضي", subtitle: "د. جولين قطب", meta: "VR في التعليم" },
      { title: "التعلم التكيفي ومنصة DreamBox", subtitle: "د. نجلاء العمري" },
      { title: "تصميم الفيديو عبر Canva", subtitle: "د. أمجاد المجلد" },
      { title: "إدارة بيئات التعلم الإلكتروني", subtitle: "د. نور الصبحي" },
      { title: "أنظمة تقويم التعليم الإلكتروني", subtitle: "د. هوازن الحربي" },
      { title: "مصادر التعلم الرقمي", subtitle: "د. أمجاد المجلد" },
    ],
  },
];

function Works() {
  return (
    <div className="min-h-screen leaf-bg">
      <SiteNav />

      <header className="text-center py-12 px-6">
        <span className="section-chip">المشاريع والأعمال</span>
        <h1 className="mt-6 text-4xl md:text-5xl font-black text-deep">
          أعمالي
        </h1>
        <p className="mt-4 text-plum max-w-2xl mx-auto leading-loose">
          مجموعة من المشاريع التعليمية في تصميم الحلول، الإنفوجرافيك، التقارير
          الأكاديمية، العروض وورش العمل.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-16 pb-10">
        {sections.map((s) => (
          <section key={s.id} id={s.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{s.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-black text-deep">
                {s.title}
              </h2>
              <div className="flex-1 h-[2px] bg-soft/60 rounded-full" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {s.items.map((it, i) => (
                <article key={i} className="card-soft overflow-hidden">
                  <div
                    className="h-32 flex items-center justify-center text-5xl"
                    style={{
                      background: `linear-gradient(135deg, var(--brand-deep), var(--brand-mauve))`,
                      color: "var(--brand-cream)",
                    }}
                  >
                    {s.emoji}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-deep text-lg leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-mauve text-sm">{it.subtitle}</p>
                    {it.meta && (
                      <p className="mt-2 text-xs text-plum/70">{it.meta}</p>
                    )}
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
