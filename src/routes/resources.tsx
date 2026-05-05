import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/resources")({
  component: Resources,
  head: () => ({
    meta: [
      { title: "المصادر | ألاء الزهراني" },
      { name: "description", content: "مصادر تعليمية موثوقة في الذكاء الاصطناعي وتحليلات التعلم وتقويم البرامج التعليمية." },
    ],
  }),
});

type Res = { topic: string; type: string; note?: string };

const groups: { title: string; emoji: string; items: Res[] }[] = [
  {
    title: "الذكاء الاصطناعي",
    emoji: "🤖",
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
    title: "تحليلات التعلم",
    emoji: "📊",
    items: [
      { topic: "Learning Analytics Explained in 4 Minutes", type: "مقطع يوتيوب" },
      { topic: "تحليلات التعلم عبر Blackboard في تحسين الممارسات التعليمية", type: "ورقة علمية" },
      { topic: "تصميمان لرسائل الرجع القائمة على تحليلات التعلم في موودل", type: "ورقة علمية" },
      { topic: "تحليلات التعلم وإعداد التقارير في التعليم الإلكتروني", type: "إنفوجرافيك" },
    ],
  },
  {
    title: "الملكية الفكرية",
    emoji: "©️",
    items: [
      { topic: "الملكية الفكرية", type: "فيديو يوتيوب" },
      { topic: "الملكية الفكرية", type: "وثيقة مؤسسية رسمية" },
      { topic: "الملكية الفكرية", type: "إنفوجرافيك" },
      { topic: "الملكية الفكرية", type: "كتاب" },
      { topic: "الملكية الفكرية", type: "موقع ديناميكي", note: "من إنجازي" },
    ],
  },
  {
    title: "تقويم البرامج التعليمية",
    emoji: "✅",
    items: [
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "وثيقة مؤسسية موثوقة" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "فيديو يوتيوب" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "ورقة علمية" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "إنفوجرافيك", note: "من إنجازي" },
    ],
  },
];

function Resources() {
  return (
    <div className="min-h-screen leaf-bg">
      <SiteNav />

      <header className="text-center py-12 px-6">
        <span className="section-chip">المصادر</span>
        <h1 className="mt-6 text-4xl md:text-5xl font-black text-deep">
          مصادر اطّلعت عليها
        </h1>
        <p className="mt-4 text-plum max-w-2xl mx-auto leading-loose">
          مجموعة مختارة من المصادر العلمية والمؤسسية التي شكّلت معرفتي في
          الذكاء الاصطناعي وتحليلات التعلم وتقويم البرامج التعليمية.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-14 pb-10">
        {groups.map((g) => (
          <section key={g.title}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{g.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-black text-deep">
                {g.title}
              </h2>
              <div className="flex-1 h-[2px] bg-soft/60 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {g.items.map((r, i) => (
                <div
                  key={i}
                  className="card-soft p-5 flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-black"
                    style={{
                      background: "var(--brand-deep)",
                      color: "var(--brand-cream)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-deep leading-snug">
                      {r.topic}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          background: "var(--brand-soft)",
                          color: "var(--brand-deep)",
                        }}
                      >
                        {r.type}
                      </span>
                      {r.note && (
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            background: "var(--brand-mauve)",
                            color: "var(--brand-cream)",
                          }}
                        >
                          {r.note}
                        </span>
                      )}
                    </div>
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
