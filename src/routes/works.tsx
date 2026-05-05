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

type Item = { title: string; subtitle: string; meta?: string; tag?: string };
type Section = { id: string; titleAr: string; titleEn: string; index: string; items: Item[] };

const sections: Section[] = [
  {
    id: "solutions",
    index: "I",
    titleAr: "حلول تعليمية",
    titleEn: "Educational Solutions",
    items: [
      { title: "الواقع المعزز في الكتاب المدرسي", subtitle: "د. جولين قطب", meta: "الثالث متوسط — الوراثة (DNA)", tag: "BlippAR · AR" },
      { title: "الجدول الدوري التفاعلي", subtitle: "د. جميلة العمري", meta: "الثالث متوسط — كيمياء", tag: "Articulate Storyline" },
      { title: "Monopoly التعليمية لمراجعة العلوم", subtitle: "د. هناء مكي", meta: "الرابع الابتدائي", tag: "Physical Game" },
      { title: "البحث عن الكنز بـ QR + AR", subtitle: "د. هناء مكي", meta: "الثالث الابتدائي — الضرب", tag: "AR · Gamified" },
      { title: "موقع تدريب المعلمات على الذكاء الاصطناعي", subtitle: "د. لينا الفراري", meta: "تدريب مهني", tag: "Genially" },
      { title: "حل تكاملي: Kahoot + AR", subtitle: "د. رنا شاهيني", meta: "الثاني الابتدائي — الفقاريات", tag: "Hybrid" },
    ],
  },
  {
    id: "designs",
    index: "II",
    titleAr: "التصاميم",
    titleEn: "Visual Designs",
    items: [
      { title: "تصور بيانات بـ Power BI", subtitle: "د. نجلاء العمري", meta: "اقتصاديات التعليم", tag: "Data Viz" },
      { title: "إنفوجرافيك التعلم المقلوب", subtitle: "د. نجلاء العمري", meta: "صعوبات التعلم", tag: "Canva" },
      { title: "إنفوجرافيك الذكاء الاصطناعي في التعليم", subtitle: "د. نجلاء العمري", tag: "Canva" },
      { title: "المنظمات المتقدمة — أوزوبل", subtitle: "د. هناء المكي", meta: "جدول الضرب", tag: "Genially" },
      { title: "Raster vs Vector", subtitle: "د. أمجاد المجلد", tag: "Photopea · Heyzine" },
    ],
  },
  {
    id: "reports",
    index: "III",
    titleAr: "التقارير",
    titleEn: "Academic Reports",
    items: [
      { title: "تطبيق نظريات التعلم — Khan Academy Kids", subtitle: "د. رنا شاهيني", tag: "Theory" },
      { title: "Flipped Classrooms & AI", subtitle: "د. جميلة العمري", tag: "English" },
      { title: "SCORM وصفحة ويب ديناميكية", subtitle: "د. نور الصبحي", meta: "Cloud + Netlify Drop", tag: "Web" },
    ],
  },
  {
    id: "presentations",
    index: "IV",
    titleAr: "العروض",
    titleEn: "Presentations",
    items: [
      { title: "البحث المقارن السببي", subtitle: "د. لينا الفراري", meta: "كتيب + تقرير + عرض", tag: "Quantitative" },
      { title: "الأنماط التعليمية والألعاب التربوية", subtitle: "د. هناء المكي", tag: "Game-Based" },
      { title: "Microlearning & Digital Credentials", subtitle: "د. جميلة العمري", tag: "English" },
    ],
  },
  {
    id: "workshops",
    index: "V",
    titleAr: "ورش العمل",
    titleEn: "Workshops",
    items: [
      { title: "Unreal Engine لبيئات الواقع الافتراضي", subtitle: "د. جولين قطب", meta: "VR Headsets", tag: "Immersive" },
      { title: "التعلم التكيفي ومنصة DreamBox", subtitle: "د. نجلاء العمري", tag: "Adaptive" },
      { title: "تصميم الفيديو عبر Canva", subtitle: "د. أمجاد المجلد", tag: "Hands-on" },
      { title: "إدارة بيئات التعلم الإلكتروني", subtitle: "د. نور الصبحي", tag: "LMS" },
      { title: "أنظمة تقويم التعليم الإلكتروني", subtitle: "د. هوازن الحربي", tag: "Assessment" },
      { title: "مصادر التعلم الرقمي", subtitle: "د. أمجاد المجلد", tag: "Resources" },
    ],
  },
];

function Works() {
  return (
    <div className="min-h-screen paper">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-8 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="font-mono-en text-mauve mb-6">Volume II — Selected Works</p>
            <h1 className="display-ar text-5xl md:text-7xl text-deep">
              الأعمال
              <span className="font-serif-en italic font-light text-plum"> & </span>
              المشاريع
            </h1>
            <div className="hairline w-32 my-8" />
            <p className="text-plum text-lg leading-loose max-w-2xl">
              مختارات من مشاريع أكاديمية وتطبيقية عبر خمسة محاور: الحلول
              التعليمية، التصاميم، التقارير، العروض، وورش العمل.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="border border-deep/20 rounded-2xl p-6">
              <p className="font-mono-en text-deep/60 mb-3">Index</p>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id} className="flex items-baseline gap-3">
                    <span className="index-num text-lg">{s.index}.</span>
                    <a href={`#${s.id}`} className="text-deep hover:text-mauve transition-colors">
                      {s.titleAr}
                      <span className="font-serif-en italic text-plum/70 mr-2 text-sm">— {s.titleEn}</span>
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
          <section key={s.id} id={s.id} className="px-6 md:px-14">
            <div className="grid md:grid-cols-12 gap-10 mb-10 items-end">
              <div className="md:col-span-3">
                <p className="font-mono-en text-deep/60">Chapter</p>
                <p className="font-serif-en italic text-6xl text-deep">{s.index}.</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-ar text-4xl md:text-5xl text-deep">
                  {s.titleAr}
                </h2>
                <p className="font-serif-en italic text-plum text-2xl mt-2">{s.titleEn}</p>
                <div className="hairline mt-6" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.items.map((it, i) => (
                <article
                  key={i}
                  className="editorial-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/3] frame-deep grain overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-between p-5 text-cream">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-en opacity-80">
                          {s.index} · {String(i + 1).padStart(2, "0")}
                        </span>
                        {it.tag && (
                          <span className="font-mono-en bg-cream/15 px-3 py-1 rounded-full backdrop-blur-sm">
                            {it.tag}
                          </span>
                        )}
                      </div>
                      <p className="font-serif-en italic text-3xl leading-tight opacity-90">
                        {s.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-deep text-lg leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-mauve text-sm">{it.subtitle}</p>
                    {it.meta && (
                      <p className="mt-2 font-mono-en text-deep/50">{it.meta}</p>
                    )}
                    <div className="hairline mt-5" />
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono-en text-deep/50">
                        Project · 0{i + 1}
                      </span>
                      <span className="font-serif-en italic text-deep">View →</span>
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
