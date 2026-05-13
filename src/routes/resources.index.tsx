import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LeafDecor from "@/components/LeafDecor";
import { useReveal } from "@/hooks/useReveal";
import { resourceGroups, getResourceIcon, type Res } from "@/data/resources";

type View = "collected" | "produced";

export const Route = createFileRoute("/resources/")({
  component: ResourcesHub,
  validateSearch: (search: Record<string, unknown>): { view?: View } => {
    const v = search.view;
    return v === "collected" || v === "produced" ? { view: v } : {};
  },
  head: () => ({
    meta: [
      { title: "المصادر | ألاء الزهراني" },
      { name: "description", content: "أرشيف مصادر تعليمية: مصادر اطلعت عليها، ومحتوى أنتجته بنفسي." },
    ],
  }),
});

function ResourcesHub() {
  const { view } = Route.useSearch();
  useReveal(view);

  // For collected view: keep grouped circles
  // For produced view: flatten all "من إنجازي" items grouped by category, on one page
  const producedGroups = resourceGroups
    .map((g) => ({ ...g, items: g.items.filter((i) => i.note === "من إنجازي") }))
    .filter((g) => g.items.length > 0);


  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-8 relative">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
        <LeafDecor variant="watercolor" className="-top-6 left-0 w-56 md:w-72" opacity={0.18} flip />

        <div className="relative max-w-3xl reveal">
          <span className="tag-soft">المصادر والمراجع</span>
          <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6 leading-tight">
            أرشيف <span className="shimmer-text">القراءات</span>
          </h1>
          <div className="hairline w-32 mt-6 origin-right draw-line" />
          {!view ? (
            <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
              اختاري طريقة الاستعراض: مصادر علمية اطّلعت عليها، أو محتوى أنتجته بنفسي.
            </p>
          ) : (
            <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
              {view === "produced"
                ? "محاور تحوي محتوى من إنتاجي ضمن مسيرتي المهنية."
                : "اختاري المحور لاستعراض المصادر العلمية والمؤسسية."}
            </p>
          )}
          {view && (
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 mt-5 text-mauve hover:text-deep text-sm font-bold transition"
            >
              ← رجوع للاختيار
            </Link>
          )}
        </div>
      </section>

      {/* TWO-TILE ENTRY */}
      {!view && (
        <section className="px-6 md:px-14 pb-24 relative">
          <LeafDecor variant="outline" className="top-10 right-0 w-64 md:w-80" opacity={0.15} />
          <LeafDecor variant="watercolor" className="bottom-0 left-0 w-72 md:w-96" opacity={0.18} rotate={180} />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 relative">
            <EntryTile
              to="collected"
              title="مصادر اطّلعت عليها"
              subtitle="قراءات ووثائق وفيديوهات شكّلت معرفتي"
              count={resourceGroups.reduce(
                (sum, g) => sum + g.items.filter((i) => i.note !== "من إنجازي").length,
                0
              )}
              icon="📚"
            />
            <EntryTile
              to="produced"
              title="تم إنتاجها من قِبلي"
              subtitle="إنفوجرافيك ومواقع ومحتوى من تصميمي"
              count={resourceGroups.reduce(
                (sum, g) => sum + g.items.filter((i) => i.note === "من إنجازي").length,
                0
              )}
              icon="✦"
              accent
            />
          </div>
        </section>
      )}

      {/* CIRCLES — filtered list */}
      {view && (
        <section className="px-6 md:px-14 pb-24 relative">
          <LeafDecor variant="watercolor" className="top-10 left-0 w-64 md:w-80" opacity={0.14} />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-8">
              {filteredGroups.map((g, i) => {
                const producedCount = g.items.filter((it) => it.note === "من إنجازي").length;
                const shownCount = view === "produced" ? producedCount : g.items.length - producedCount;
                return (
                  <div
                    key={g.id}
                    className={`flex justify-center reveal reveal-delay-${(i % 4) + 1} ${
                      i % 2 === 1 ? "md:translate-y-12" : ""
                    }`}
                  >
                    <Link
                      to="/resources/$id"
                      params={{ id: g.id }}
                      search={{ view }}
                      className="group relative block"
                      aria-label={g.title}
                    >
                      <span
                        className="pointer-events-none absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "conic-gradient(from 0deg, transparent 0%, var(--brand-mauve) 25%, transparent 50%, var(--brand-soft) 75%, transparent 100%)",
                          WebkitMask:
                            "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                          mask:
                            "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                          animation: "spin 14s linear infinite",
                        }}
                      />
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-cream border border-deep/15 shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-mauve/60 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-soft/25 via-transparent to-mauve/15 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                          <p className="font-display text-deep text-base md:text-lg leading-snug">
                            {g.title}
                          </p>
                          <span className="mt-2 inline-block w-8 h-px bg-mauve/60 group-hover:w-12 group-hover:bg-mauve transition-all duration-500" />
                          <p className="text-plum text-[11px] mt-1.5">
                            {String(shownCount).padStart(2, "0")} {view === "produced" ? "من إنجازي" : "مصدر"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function EntryTile({
  to,
  title,
  subtitle,
  count,
  icon,
  accent = false,
}: {
  to: View;
  title: string;
  subtitle: string;
  count: number;
  icon: string;
  accent?: boolean;
}) {
  return (
    <Link
      to="/resources"
      search={{ view: to }}
      className={`reveal group relative rounded-[2rem] overflow-hidden p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border ${
        accent
          ? "frame-deep text-cream border-deep"
          : "bg-cream border-deep/15 hover:border-mauve/60 text-deep"
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-20 -left-16 w-64 h-64 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 ${
          accent ? "bg-mauve/30" : "bg-mauve/15"
        }`}
      />
      <div
        className={`pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-700 ${
          accent ? "bg-soft/30" : "bg-soft/25"
        }`}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-5xl ${accent ? "text-cream/80" : "text-mauve/60 group-hover:text-mauve"} transition-colors`}
          >
            {icon}
          </span>
          <span
            className={`text-[10px] font-bold tracking-[0.4em] uppercase ${
              accent ? "text-cream/70" : "text-mauve"
            }`}
          >
            {to === "produced" ? "From me" : "Collected"}
          </span>
        </div>
        <h2 className={`font-display text-3xl md:text-4xl leading-snug ${accent ? "text-cream" : "text-deep"}`}>
          {title}
        </h2>
        <div className={`hairline w-20 mt-4 ${accent ? "opacity-60" : ""}`} />
        <p className={`mt-4 leading-loose ${accent ? "text-cream/85" : "text-plum"}`}>
          {subtitle}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span
            className={`inline-flex items-baseline gap-2 ${
              accent ? "text-cream" : "text-deep"
            }`}
          >
            <span className="font-display text-4xl">{String(count).padStart(2, "0")}</span>
            <span className="text-xs opacity-70">عنصر</span>
          </span>
          <span
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg transition-transform duration-500 group-hover:-translate-x-1 ${
              accent ? "bg-cream text-deep" : "bg-deep text-cream"
            }`}
          >
            ←
          </span>
        </div>
      </div>
    </Link>
  );
}
