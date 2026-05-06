import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

type Res = { topic: string; type: string; note?: string; pdf?: string; youtube?: string };

const groups: { id: string; title: string; index: string; emoji: string; items: Res[] }[] = [
  {
    id: "ai", index: "١", emoji: "🤖", title: "الذكاء الاصطناعي",
    items: [
      { topic: "كفايات استخدام الذكاء الاصطناعي في التعليم الرقمي", type: "وثيقة مؤسسية رسمية", pdf: "/pdfs/ai-1.pdf" },
      { topic: "المبادئ التوجيهية للمصنفات المولدة عبر الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية", pdf: "/pdfs/ai-2.pdf" },
      { topic: "دليل إرشادات الذكاء الاصطناعي التوليدي للتعليم العام", type: "وثيقة مؤسسية", pdf: "/pdfs/ai-3.pdf" },
      { topic: "تمكين البحث العلمي بالذكاء الاصطناعي", type: "ورقة علمية", pdf: "/pdfs/ai-4.pdf" },
      { topic: "مبادئ أخلاقيات الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية", pdf: "/pdfs/ai-5.pdf" },
      { topic: "كيف نتلافى الأخلاقيات السلبية للذكاء الاصطناعي في التعليم", type: "مجلة", pdf: "/pdfs/ai-6.pdf" },
      { topic: "أخلاقيات الذكاء الاصطناعي", type: "كتاب", pdf: "/pdfs/ai-7.pdf" },
      { topic: "استراتيجيات التعلم الرقمي بأدوات الذكاء الاصطناعي", type: "كتاب", pdf: "/pdfs/ai-8.pdf" },
      { topic: "فعالية ساعة الذكاء الاصطناعي في التعليم", type: "دورة (يوتيوب)", youtube: "qOyZIOMbLV4" },
      { topic: "أدوات الذكاء الاصطناعي للمعلمين والإداريين وذوي الاحتياجات", type: "كورس (يوتيوب)", youtube: "pszZFJ7_lF0" },
    ],
  },
  {
    id: "analytics", index: "٢", emoji: "📊", title: "تحليلات التعلم",
    items: [
      { topic: "شرح تحليلات التعلم في أربع دقائق", type: "مقطع يوتيوب" },
      { topic: "تحليلات التعلم عبر Blackboard في تحسين الممارسات التعليمية", type: "ورقة علمية" },
      { topic: "تصميمان لرسائل الرجع القائمة على تحليلات التعلم في موودل", type: "ورقة علمية" },
      { topic: "تحليلات التعلم وإعداد التقارير في التعليم الإلكتروني", type: "إنفوجرافيك" },
    ],
  },
  {
    id: "ip", index: "٣", emoji: "©️", title: "الملكية الفكرية",
    items: [
      { topic: "الملكية الفكرية", type: "فيديو يوتيوب" },
      { topic: "الملكية الفكرية", type: "وثيقة مؤسسية رسمية" },
      { topic: "الملكية الفكرية", type: "إنفوجرافيك" },
      { topic: "الملكية الفكرية", type: "كتاب" },
      { topic: "الملكية الفكرية", type: "موقع ديناميكي", note: "من إنجازي" },
    ],
  },
  {
    id: "eval", index: "٤", emoji: "✅", title: "تقويم البرامج التعليمية",
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
  const [active, setActive] = useState(groups[0].id);
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  useEffect(() => {
    const sections = groups.map((g) => document.getElementById(g.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const totalCount = groups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl reveal">
          <span className="chip">المصادر والمراجع</span>
          <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6 leading-tight">
            أرشيف <span className="shimmer-text">القراءات</span>
          </h1>
          <div className="hairline w-32 mt-6 origin-right draw-line" />
          <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
            مختارات من المصادر العلمية والمؤسسية التي شكّلت معرفتي المهنية،
            مرتّبة في أربعة محاور تعكس مساري البحثي.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-7 text-deep/70 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep" />
              {groups.length} محاور
            </span>
            <span className="w-px h-4 bg-deep/20" />
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mauve" />
              {totalCount} مصدر
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT WITH STICKY NAV */}
      <div className="px-6 md:px-14 pb-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sticky side index */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-3xl bg-cream border border-deep/15 shadow-md p-6">
                <p className="text-mauve text-[10px] font-bold tracking-[0.3em] uppercase mb-5">المحاور</p>
                <nav className="space-y-1">
                  {groups.map((g) => {
                    const isActive = active === g.id;
                    return (
                      <a
                        key={g.id}
                        href={`#${g.id}`}
                        className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 relative ${
                          isActive ? "bg-deep text-cream shadow-md" : "hover:bg-deep/5 text-deep"
                        }`}
                      >
                        <span
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-base flex-shrink-0 transition-colors duration-300 ${
                            isActive ? "bg-cream/20 text-cream" : "bg-deep/10 text-deep"
                          }`}
                        >
                          {g.index}
                        </span>
                        <span className="flex-1 text-sm font-bold">{g.title}</span>
                        <span className={`text-xs font-bold ${isActive ? "text-cream/70" : "text-deep/40"}`}>
                          {String(g.items.length).padStart(2, "0")}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-9 order-1 lg:order-2 space-y-20">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-32">
                <div className="reveal mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-12 h-12 rounded-full frame-deep flex items-center justify-center text-cream font-display text-xl shadow-md">
                      {g.index}
                    </span>
                    <span className="text-3xl">{g.emoji}</span>
                    <span className="text-mauve text-[10px] font-bold tracking-[0.3em] uppercase">المحور {g.index}</span>
                  </div>
                  <h2 className="display-ar text-3xl md:text-5xl text-deep leading-tight">
                    {g.title}
                  </h2>
                  <div className="hairline mt-5" />
                </div>

                <div className="rounded-3xl bg-cream border border-deep/15 shadow-md overflow-hidden">
                  {g.items.map((r, i) => {
                    const isOpen = r.pdf && openPdf === r.pdf;
                    const clickable = !!r.pdf;
                    return (
                      <div key={i} className="reveal border-b last:border-b-0 border-deep/10" style={{ transitionDelay: `${i * 30}ms` }}>
                        <div
                          role={clickable ? "button" : undefined}
                          tabIndex={clickable ? 0 : undefined}
                          onClick={() => clickable && setOpenPdf(isOpen ? null : r.pdf!)}
                          onKeyDown={(e) => {
                            if (clickable && (e.key === "Enter" || e.key === " ")) {
                              e.preventDefault();
                              setOpenPdf(isOpen ? null : r.pdf!);
                            }
                          }}
                          className={`group relative flex items-center gap-4 px-5 md:px-7 py-5 transition-colors duration-300 ${
                            clickable ? "cursor-pointer hover:bg-deep/5" : ""
                          } ${isOpen ? "bg-deep/5" : ""}`}
                        >
                          <span className={`absolute top-0 right-0 bottom-0 w-0.5 bg-mauve origin-center transition-transform duration-500 ${isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`} />
                          <span className="font-display text-deep/30 text-2xl md:text-3xl w-10 md:w-12 flex-shrink-0 group-hover:text-mauve transition-colors duration-300">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-deep flex-1 text-sm md:text-base leading-snug font-medium">
                            {r.topic}
                          </p>
                          <span className="hidden md:inline-flex items-center text-[11px] bg-deep/5 text-deep/80 px-3 py-1.5 rounded-full font-bold tracking-wide border border-deep/10 flex-shrink-0">
                            {r.type}
                          </span>
                          {r.note && (
                            <span className="text-[10px] bg-deep text-cream px-2.5 py-1 rounded-full font-bold flex-shrink-0">
                              ★ {r.note}
                            </span>
                          )}
                          {clickable && (
                            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-deep/10 text-deep text-xs font-bold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 bg-deep text-cream" : ""}`} aria-label={isOpen ? "إغلاق" : "فتح"}>
                              +
                            </span>
                          )}
                        </div>
                        {clickable && (
                          <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                              <div className="px-3 md:px-5 pb-5">
                                <div className="rounded-2xl overflow-hidden border border-deep/15 bg-white shadow-inner">
                                  <div className="flex items-center justify-between px-4 py-2 bg-deep/5 border-b border-deep/10">
                                    <span className="text-[11px] font-bold text-deep/70 tracking-wide">معاينة المستند</span>
                                    <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-mauve hover:underline">
                                      فتح في نافذة جديدة ↗
                                    </a>
                                  </div>
                                  {isOpen && (
                                    <iframe
                                      src={`${r.pdf}#view=FitH`}
                                      title={r.topic}
                                      className="w-full h-[70vh] bg-white"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
