import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/resources")({
  component: Resources,
  head: () => ({
    meta: [
      { title: "المصادر | ألاء الزهراني" },
      { name: "description", content: "أرشيف مصادر تعليمية: ذكاء اصطناعي، تحليلات تعلم، ملكية فكرية، وتقويم برامج." },
    ],
  }),
});

type Res = { topic: string; type: string; note?: string };

const groups: { title: string; index: string; emoji: string; items: Res[] }[] = [
  {
    index: "١", emoji: "🤖", title: "الذكاء الاصطناعي",
    items: [
      { topic: "كفايات استخدام الذكاء الاصطناعي في التعليم الرقمي", type: "وثيقة مؤسسية رسمية" },
      { topic: "المبادئ التوجيهية للمصنفات المولدة عبر الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية" },
      { topic: "دليل إرشادات الذكاء الاصطناعي التوليدي للتعليم العام", type: "وثيقة مؤسسية" },
      { topic: "تمكين البحث العلمي بالذكاء الاصطناعي", type: "ورقة علمية" },
      { topic: "مبادئ أخلاقيات الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية" },
      { topic: "كيف نتلافى الأخلاقيات السلبية للذكاء الاصطناعي في التعليم", type: "مجلة" },
      { topic: "أخلاقيات الذكاء الاصطناعي", type: "كتاب" },
      { topic: "استراتيجيات التعلم الرقمي بأدوات الذكاء الاصطناعي", type: "كتاب" },
      { topic: "فعالية ساعة الذكاء الاصطناعي في التعليم", type: "دورة (يوتيوب)" },
      { topic: "أدوات الذكاء الاصطناعي للمعلمين والإداريين وذوي الاحتياجات", type: "كورس (يوتيوب)" },
    ],
  },
  {
    index: "٢", emoji: "📊", title: "تحليلات التعلم",
    items: [
      { topic: "شرح تحليلات التعلم في أربع دقائق", type: "مقطع يوتيوب" },
      { topic: "تحليلات التعلم عبر Blackboard في تحسين الممارسات التعليمية", type: "ورقة علمية" },
      { topic: "تصميمان لرسائل الرجع القائمة على تحليلات التعلم في موودل", type: "ورقة علمية" },
      { topic: "تحليلات التعلم وإعداد التقارير في التعليم الإلكتروني", type: "إنفوجرافيك" },
    ],
  },
  {
    index: "٣", emoji: "©️", title: "الملكية الفكرية",
    items: [
      { topic: "الملكية الفكرية", type: "فيديو يوتيوب" },
      { topic: "الملكية الفكرية", type: "وثيقة مؤسسية رسمية" },
      { topic: "الملكية الفكرية", type: "إنفوجرافيك" },
      { topic: "الملكية الفكرية", type: "كتاب" },
      { topic: "الملكية الفكرية", type: "موقع ديناميكي", note: "من إنجازي" },
    ],
  },
  {
    index: "٤", emoji: "✅", title: "تقويم البرامج التعليمية",
    items: [
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "وثيقة مؤسسية موثوقة" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "فيديو يوتيوب" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "ورقة علمية" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "إنفوجرافيك", note: "من إنجازي" },
    ],
  },
];

function Resources() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-soft/25 blur-3xl animate-float pointer-events-none" />
        <div className="grid md:grid-cols-12 gap-10 items-end relative">
          <div className="md:col-span-8 reveal">
            <span className="chip">المصادر والمراجع</span>
            <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6">
              <span className="shimmer-text">أرشيف القراءات</span>
            </h1>
            <div className="hairline w-32 mt-6 origin-right draw-line" />
            <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
              مختارات من المصادر العلمية والمؤسسية التي شكّلت معرفتي المهنية،
              مرتّبة في أربعة محاور تعكس مساري البحثي.
            </p>
          </div>
          <div className="md:col-span-4 reveal reveal-delay-2">
            <div className="editorial-card p-6">
              <p className="text-mauve font-bold mb-4">المحاور</p>
              <ul className="space-y-3">
                {groups.map((g) => (
                  <li key={g.title} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-deep/10 flex items-center justify-center font-display text-deep">
                      {g.index}
                    </span>
                    <span className="text-deep flex-1">{g.title}</span>
                    <span className="text-2xl">{g.emoji}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <div className="space-y-24 pb-10">
        {groups.map((g) => (
          <section key={g.title} className="px-6 md:px-14">
            <div className="grid md:grid-cols-12 gap-8 mb-8 items-end reveal">
              <div className="md:col-span-3 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
                  {g.index}
                </div>
                <span className="text-4xl">{g.emoji}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-ar text-4xl md:text-5xl text-deep">
                  {g.title}
                </h2>
                <div className="hairline mt-6 origin-right draw-line" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              {g.items.map((r, i) => (
                <div
                  key={i}
                  className="reveal grid grid-cols-12 gap-4 py-5 border-b border-deep/15 px-2 group hover:bg-deep/5 transition-all duration-500 rounded-lg"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="col-span-2 md:col-span-1 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-deep/10 flex items-center justify-center text-deep font-display group-hover:bg-deep group-hover:text-cream transition-all duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-7 flex items-center">
                    <p className="text-deep text-base md:text-lg leading-snug">
                      {r.topic}
                    </p>
                  </div>
                  <div className="col-span-7 md:col-span-3 flex items-center">
                    <span className="tag-soft">{r.type}</span>
                  </div>
                  <div className="col-span-5 md:col-span-1 flex items-center justify-end">
                    {r.note ? (
                      <span
                        className="text-xs px-3 py-1 rounded-full font-bold"
                        style={{
                          background: "var(--brand-deep)",
                          color: "var(--brand-cream)",
                        }}
                      >
                        ★ {r.note}
                      </span>
                    ) : (
                      <span className="text-deep/40 group-hover:text-deep group-hover:-translate-x-1 transition-all duration-500">
                        ←
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
