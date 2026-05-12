import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import {
  resourceGroups,
  getResourceGroup,
  getResourceIcon,
  type Res,
  type ResourceGroup,
} from "@/data/resources";

export const Route = createFileRoute("/resources/$id")({
  component: ResourceDetail,
  loader: ({ params }) => {
    const group = getResourceGroup(params.id);
    if (!group) throw notFound();
    return { group };
  },
  notFoundComponent: () => (
    <div className="min-h-screen paper flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="display-ar text-4xl text-deep">المحور غير موجود</h1>
      <Link to="/resources" className="chip">العودة للمصادر</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen paper flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-plum">{error.message}</p>
      <Link to="/resources" className="chip">العودة للمصادر</Link>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.group.title} | المصادر` },
          { name: "description", content: loaderData.group.blurb },
        ]
      : [],
  }),
});

function ResourceDetail() {
  useReveal();
  const { group } = Route.useLoaderData() as { group: ResourceGroup };
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  // Close video on escape
  useEffect(() => {
    if (!openVideo) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openVideo]);

  const collected = group.items.filter((r) => r.note !== "من إنجازي");
  const mine = group.items.filter((r) => r.note === "من إنجازي");

  const idx = resourceGroups.findIndex((g) => g.id === group.id);
  const prev = resourceGroups[(idx - 1 + resourceGroups.length) % resourceGroups.length];
  const next = resourceGroups[(idx + 1) % resourceGroups.length];

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* Breadcrumb */}
      <section className="px-6 md:px-14 pt-8 pb-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-plum">
          <Link to="/resources" className="hover:text-deep transition">المصادر</Link>
          <span className="opacity-50">/</span>
          <span className="text-deep font-bold">{group.title}</span>
        </div>
      </section>

      {/* TOP — category circles like reference */}
      <section className="px-6 md:px-14 pt-2 pb-12">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-5 reveal">
          <CategoryCircle label={group.title} primary emoji={group.emoji} index={group.index} />
          <span className="hidden md:block w-10 h-px bg-deep/20" />
          <CategoryPill label="مصادر" />
        </div>

        <p className="text-plum text-center max-w-2xl mx-auto mt-7 leading-loose reveal reveal-delay-1">
          {group.blurb}
        </p>
      </section>

      {/* SECTION — اطلعت عليها */}
      {collected.length > 0 && (
        <section className="px-6 md:px-14 pb-12 relative">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 reveal">
              <SubsectionCircle label="اطلعت عليها" count={collected.length} />
            </div>
            <ul className="space-y-4">
              {collected.map((r, i) => (
                <li key={i} className={`reveal reveal-delay-${(i % 5) + 1}`}>
                  <ResourceRow
                    item={r}
                    isOpen={openVideo === `${group.id}-c-${i}`}
                    onToggle={() =>
                      setOpenVideo(openVideo === `${group.id}-c-${i}` ? null : `${group.id}-c-${i}`)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* SECTION — صممتها */}
      {mine.length > 0 && (
        <section className="px-6 md:px-14 pb-16 relative">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8 reveal">
              <SubsectionCircle label="صممتها" count={mine.length} accent />
            </div>
            <ul className="space-y-4">
              {mine.map((r, i) => (
                <li key={i} className={`reveal reveal-delay-${(i % 5) + 1}`}>
                  <ResourceRow
                    item={r}
                    isOpen={openVideo === `${group.id}-m-${i}`}
                    onToggle={() =>
                      setOpenVideo(openVideo === `${group.id}-m-${i}` ? null : `${group.id}-m-${i}`)
                    }
                    starred
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      <section className="px-6 md:px-14 pb-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <Link
            to="/resources/$id"
            params={{ id: prev.id }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all hover:-translate-x-1"
          >
            <span>→</span>
            <span className="hidden sm:inline">{prev.title}</span>
            <span className="sm:hidden">السابق</span>
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all"
          >
            كل المحاور
          </Link>
          <Link
            to="/resources/$id"
            params={{ id: next.id }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream border border-deep/15 hover:border-mauve text-deep text-sm font-bold transition-all hover:translate-x-1"
          >
            <span className="hidden sm:inline">{next.title}</span>
            <span className="sm:hidden">التالي</span>
            <span>←</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ========== Pieces ========== */

function CategoryCircle({
  label,
  emoji,
  index,
  primary = false,
}: {
  label: string;
  emoji?: string;
  index?: string;
  primary?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center text-center px-4 shadow-lg ${
          primary
            ? "frame-deep text-cream"
            : "bg-cream border border-deep/15 text-deep"
        }`}
      >
        {index && (
          <span
            className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-display ${
              primary ? "bg-cream/20 text-cream" : "bg-deep/8 text-deep"
            }`}
          >
            {index}
          </span>
        )}
        {emoji && <span className="text-2xl mb-1 opacity-90">{emoji}</span>}
        <p className="font-display text-sm md:text-base leading-snug">{label}</p>
      </div>
    </div>
  );
}

function CategoryPill({ label }: { label: string }) {
  return (
    <div className="px-7 py-4 rounded-full bg-cream border border-deep/15 shadow-md text-deep font-display text-base md:text-lg">
      {label}
    </div>
  );
}

function SubsectionCircle({
  label,
  count,
  accent = false,
}: {
  label: string;
  count: number;
  accent?: boolean;
}) {
  return (
    <div className="relative">
      <span
        className="pointer-events-none absolute -inset-2 rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, var(--brand-mauve) 25%, transparent 50%, var(--brand-soft) 75%, transparent 100%)",
          WebkitMask:
            "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
          mask:
            "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
          animation: "spin 18s linear infinite",
        }}
      />
      <div
        className={`relative w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-md ${
          accent
            ? "bg-deep text-cream border border-deep"
            : "bg-cream border border-deep/15 text-deep"
        }`}
      >
        <p className="font-display text-sm leading-snug">{label}</p>
        <p className={`text-[10px] mt-1 ${accent ? "text-cream/70" : "text-mauve"}`}>
          {String(count).padStart(2, "0")} مصدر
        </p>
      </div>
    </div>
  );
}

function ResourceRow({
  item,
  isOpen,
  onToggle,
  starred = false,
}: {
  item: Res;
  isOpen: boolean;
  onToggle: () => void;
  starred?: boolean;
}) {
  const isYT = !!item.youtube;
  const externalHref = item.pdf || item.image || item.link;
  const isExternal = !!externalHref && !isYT;
  const shouldDownload = !!externalHref?.startsWith("/");
  const icon = getResourceIcon(item.type);

  const inner = (
    <>
      <span className="w-9 h-9 rounded-full bg-deep/8 group-hover:bg-deep group-hover:text-cream text-deep flex items-center justify-center text-sm flex-shrink-0 transition-colors">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-deep text-sm md:text-[15px] font-medium leading-snug">
          {item.topic}
        </p>
        <p className="text-mauve text-[11px] mt-0.5">{item.type}</p>
      </div>
      {starred && (
        <span className="text-[10px] bg-deep text-cream px-2.5 py-1 rounded-full font-bold flex-shrink-0">
          ★ من إنجازي
        </span>
      )}
      <span
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-deep/8 group-hover:bg-mauve group-hover:text-cream text-deep text-xs font-bold flex-shrink-0 transition-all ${
          isYT && isOpen ? "rotate-45 bg-deep text-cream" : ""
        }`}
        aria-hidden
      >
        {isYT ? "+" : "↗"}
      </span>
    </>
  );

  const baseClass =
    "group relative w-full flex items-center gap-4 px-5 md:px-6 py-4 rounded-full bg-cream border border-deep/15 shadow-sm hover:shadow-md hover:border-mauve/50 transition-all duration-300 cursor-pointer";

  return (
    <div>
      {isExternal ? (
        <a
          href={externalHref}
          target={shouldDownload ? undefined : "_blank"}
          rel={shouldDownload ? undefined : "noopener noreferrer"}
          download={shouldDownload || undefined}
          className={baseClass}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onToggle} className={`${baseClass} text-right`}>
          {inner}
        </button>
      )}

      {isYT && (
        <div
          className={`grid transition-all duration-500 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-3xl overflow-hidden border border-deep/15 bg-white shadow-inner">
              <div className="flex items-center justify-between px-4 py-2 bg-deep/5 border-b border-deep/10">
                <span className="text-[11px] font-bold text-deep/70 tracking-wide">
                  مشاهدة الفيديو
                </span>
                <a
                  href={`https://youtu.be/${item.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-mauve hover:underline"
                >
                  فتح في يوتيوب ↗
                </a>
              </div>
              {isOpen && (
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtube}`}
                    title={item.topic}
                    className="absolute inset-0 w-full h-full bg-black"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
