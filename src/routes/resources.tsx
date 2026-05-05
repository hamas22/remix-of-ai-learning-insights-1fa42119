import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

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

const groups: { title: string; titleEn: string; index: string; items: Res[] }[] = [
  {
    index: "α",
    titleAr: "الذكاء الاصطناعي",
    titleEn: "Artificial Intelligence",
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
    index: "β",
    titleAr: "تحليلات التعلم",
    titleEn: "Learning Analytics",
    items: [
      { topic: "Learning Analytics Explained in 4 Minutes", type: "مقطع يوتيوب" },
      { topic: "تحليلات التعلم عبر Blackboard في تحسين الممارسات التعليمية", type: "ورقة علمية" },
      { topic: "تصميمان لرسائل الرجع القائمة على تحليلات التعلم في موودل", type: "ورقة علمية" },
      { topic: "تحليلات التعلم وإعداد التقارير في التعليم الإلكتروني", type: "إنفوجرافيك" },
    ],
  },
  {
    index: "γ",
    titleAr: "الملكية الفكرية",
    titleEn: "Intellectual Property",
    items: [
      { topic: "الملكية الفكرية", type: "فيديو يوتيوب" },
      { topic: "الملكية الفكرية", type: "وثيقة مؤسسية رسمية" },
      { topic: "الملكية الفكرية", type: "إنفوجرافيك" },
      { topic: "الملكية الفكرية", type: "كتاب" },
      { topic: "الملكية الفكرية", type: "موقع ديناميكي", note: "من إنجازي" },
    ],
  },
  {
    index: "δ",
    titleAr: "تقويم البرامج التعليمية",
    titleEn: "Program Evaluation",
    items: [
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "وثيقة مؤسسية موثوقة" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "فيديو يوتيوب" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "ورقة علمية" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "إنفوجرافيك", note: "من إنجازي" },
    ],
  },
].map((g) => ({ ...g, title: g.titleAr }));

function Resources() {
  return (
    <div className="min-h-screen paper">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-8 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="font-mono-en text-mauve mb-6">Volume III — Reading Archive</p>
            <h1 className="display-ar text-5xl md:text-7xl text-deep">
              المصادر
              <span className="font-serif-en italic font-light text-plum"> & </span>
              المراجع
            </h1>
            <div className="hairline w-32 my-8" />
            <p className="text-plum text-lg leading-loose max-w-2xl">
              أرشيف منتقى من المصادر العلمية والمؤسسية التي شكّلت معرفتي
              المهنية، مرتّبة في أربعة محاور تعكس مساري البحثي.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="border border-deep/20 rounded-2xl p-6">
              <p className="font-mono-en text-deep/60 mb-3">Sections</p>
              <ul className="space-y-3">
                {groups.map((g) => (
                  <li key={g.titleEn} className="flex items-baseline gap-3">
                    <span className="index-num text-2xl">{g.index}</span>
                    <div>
                      <p className="text-deep">{g.titleAr}</p>
                      <p className="font-serif-en italic text-plum/70 text-sm">
                        {g.titleEn}
                      </p>
                    </div>
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
          <section key={g.titleEn} className="px-6 md:px-14">
            <div className="grid md:grid-cols-12 gap-10 mb-8 items-end">
              <div className="md:col-span-3">
                <p className="font-mono-en text-deep/60">Section</p>
                <p className="font-serif-en italic text-7xl text-deep leading-none">
                  {g.index}
                </p>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-ar text-4xl md:text-5xl text-deep">
                  {g.titleAr}
                </h2>
                <p className="font-serif-en italic text-plum text-2xl mt-2">
                  {g.titleEn}
                </p>
                <div className="hairline mt-6" />
              </div>
            </div>

            <div className="border-t border-deep/15">
              {g.items.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-deep/15 hover:bg-deep/5 transition-colors px-2 group"
                >
                  <div className="col-span-2 md:col-span-1 flex items-start">
                    <span className="index-num text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-7">
                    <p className="text-deep text-base md:text-lg leading-snug">
                      {r.topic}
                    </p>
                  </div>
                  <div className="col-span-7 md:col-span-3 flex items-center">
                    <span className="font-mono-en text-deep/60">{r.type}</span>
                  </div>
                  <div className="col-span-5 md:col-span-1 flex items-center justify-end">
                    {r.note ? (
                      <span className="tag-soft" style={{ borderColor: "var(--brand-deep)", background: "var(--brand-deep)", color: "var(--brand-cream)" }}>
                        ★
                      </span>
                    ) : (
                      <span className="font-serif-en italic text-deep/40 group-hover:text-deep transition-colors">
                        →
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
