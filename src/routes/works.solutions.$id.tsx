import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { solutions, type Solution } from "@/data/works";

export const Route = createFileRoute("/works/solutions/$id")({
  component: SolutionDetail,
  loader: ({ params }) => {
    const idx = parseInt(params.id, 10) - 1;
    const item = solutions[idx];
    if (!item) throw notFound();
    return { item, idx };
  },
  notFoundComponent: () => (
    <div className="min-h-screen paper flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="display-ar text-4xl text-deep">الحل غير موجود</h1>
      <Link to="/works/solutions" className="chip">العودة للحلول</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen paper flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-plum">{error.message}</p>
      <Link to="/works/solutions" className="chip">العودة للحلول</Link>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.tag} | حلول تعليمية` },
          { name: "description", content: loaderData.item.goal.slice(0, 155) },
        ]
      : [],
  }),
});

function SolutionDetail() {
  useReveal();
  const { item, idx } = Route.useLoaderData() as { item: Solution; idx: number };


  const allFields: { label: string; value: string; side: "right" | "left" }[] = [
    { label: "اسم المقرر", value: item.course, side: "right" },
    { label: "الدكتورة", value: item.doctor, side: "left" },
    { label: "الهدف", value: item.goal, side: "right" },
    { label: "الفئة المستهدفة", value: item.audience, side: "left" },
    { label: "الفصل الدراسي", value: item.semester, side: "right" },
    { label: "الوحدة", value: item.unit, side: "left" },
    { label: "الموضوع", value: item.lesson, side: "right" },
    { label: "البرنامج", value: item.program, side: "left" },
    { label: "المنتج النهائي", value: item.product, side: "right" },
  ];
  const fields = allFields
    .filter((f) => f.value && f.value.trim() !== "" && f.value.trim() !== "—")
    .map((f, i) => ({ ...f, side: (i % 2 === 0 ? "right" : "left") as "right" | "left" }));

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-8 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-plum">
            <Link to="/works" className="hover:text-deep transition">الأعمال</Link>
            <span className="opacity-50">/</span>
            <Link to="/works/solutions" className="hover:text-deep transition">حلول تعليمية</Link>
            <span className="opacity-50">/</span>
            <span className="text-deep font-bold">{item.tag}</span>
          </div>
        </div>
      </section>

      {/* TOP — two pills like the reference */}
      <section className="px-6 md:px-14 pt-2 pb-10">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6 reveal">
          <span className="px-7 py-4 rounded-full bg-cream border border-deep/15 shadow-md text-deep font-display text-lg md:text-xl">
            حلول تعليمية
          </span>
          <span className="hidden md:block w-10 h-px bg-deep/20" />
          <span className="px-7 py-4 rounded-full frame-deep text-cream font-display text-lg md:text-xl shadow-lg">
            {item.tag}
          </span>
        </div>
      </section>

      {/* FIELDS — modern alternating pills with hover effect */}
      <section className="px-6 md:px-14 pb-12">
        <div className="max-w-4xl mx-auto relative">
          {/* center spine line on md+ */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-deep/15 to-transparent" />

          <ul className="space-y-5 md:space-y-7 relative">
            {fields.map((f, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${(i % 5) + 1} flex md:items-stretch ${
                  f.side === "right" ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div
                  className={`group relative w-full md:w-[58%] rounded-2xl md:rounded-[1.75rem] bg-cream border border-deep/15 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-mauve/60`}
                >
                  {/* gradient sheen on hover */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mauve/0 via-soft/0 to-mauve/0 group-hover:from-mauve/10 group-hover:via-soft/5 group-hover:to-mauve/10 transition-all duration-500" />

                  {/* side accent bar */}
                  <span
                    className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-mauve to-deep scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ${
                      f.side === "right" ? "right-0" : "left-0"
                    }`}
                  />

                  {/* center connector dot on md+ */}
                  <span
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-mauve ring-4 ring-cream transition-all duration-500 group-hover:scale-150 group-hover:bg-deep ${
                      f.side === "right" ? "-left-[8px]" : "-right-[8px]"
                    }`}
                  />

                  <div className="relative px-6 md:px-7 py-4 md:py-5 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="text-mauve text-[11px] font-bold tracking-[0.3em] uppercase whitespace-nowrap shrink-0 transition-colors group-hover:text-deep">
                      {f.label}
                    </span>
                    <span className="hidden md:block w-px h-4 bg-deep/15 self-center transition-all group-hover:h-6 group-hover:bg-mauve" />
                    <div className="flex items-center gap-3 flex-wrap">
                      {f.label === "البرنامج" ? (
                        item.programLogos && item.programLogos.length > 0 ? (
                          <div className="flex items-center gap-2">
                            {item.programLogos.map((src, li) => (
                              <span
                                key={li}
                                title={item.program}
                                className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-deep/10 shadow-sm overflow-hidden p-2 transition-transform duration-300 group-hover:-translate-y-0.5"
                              >
                                <img src={src} alt={item.program} loading="lazy" className="max-w-full max-h-full object-contain" />
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-deep leading-relaxed text-[15px]">{f.value}</p>
                        )
                      ) : (
                        <p className="text-deep leading-relaxed text-[15px]">
                          {f.value && f.value !== "—" ? f.value : "—"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LINKS */}
      {item.links.length > 0 && (
        <section className="px-6 md:px-14 pb-20">
          <div className="max-w-4xl mx-auto reveal">
            <div className="text-center mb-6">
              <span className="tag-soft">روابط المنتج</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {item.links.map((l, k) => {
                const isOffice = /\.(pptx?|docx?|xlsx?)$/i.test(l.href);
                let href = l.href;
                if (isOffice && typeof window !== "undefined") {
                  const abs = l.href.startsWith("http") ? l.href : `${window.location.origin}${l.href}`;
                  href = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(abs)}`;
                }
                return (
                  <a
                    key={k}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-deep text-cream text-sm font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
                  >
                    <span>{l.label}</span>
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      <section className="px-6 md:px-14 pb-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <Link
            to="/works/solutions/$id"
            params={{ id: String(((idx - 1 + solutions.length) % solutions.length) + 1) }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all hover:-translate-x-1"
          >
            <span>→</span>
            <span>السابق</span>
          </Link>
          <Link
            to="/works/solutions"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all"
          >
            كل الحلول
          </Link>
          <Link
            to="/works/solutions/$id"
            params={{ id: String(((idx + 1) % solutions.length) + 1) }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all hover:translate-x-1"
          >
            <span>التالي</span>
            <span>←</span>
          </Link>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
