import { Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import type { Section, Item } from "@/data/works";

export default function CategoryPage({ section }: { section: Section }) {
  useReveal();
  const isDesigns = section.slug === "designs";
  const isReports = section.slug === "reports";
  const isPresentations = section.slug === "presentations";
  const isWorkshops = section.slug === "workshops";
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      <section className="px-6 md:px-14 pt-10 pb-12 relative">
        <Link to="/works" className="text-mauve text-sm hover:text-deep transition-colors">
          ← العودة إلى الأعمال
        </Link>
        <div className="grid md:grid-cols-12 gap-8 mt-6 items-end reveal">
          <div className="md:col-span-3 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
              {section.index}
            </div>
            <span className="text-4xl">{section.emoji}</span>
          </div>
          <div className="md:col-span-9">
            <h1 className="display-ar text-4xl md:text-6xl text-deep">{section.title}</h1>
            <p className="text-plum/80 mt-3 leading-loose max-w-3xl">{section.description}</p>
            <div className="hairline mt-6 origin-right draw-line" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 pb-24">
        {isDesigns ? <DesignsGallery items={section.items} /> : isReports ? <ReportsGallery items={section.items} /> : isPresentations ? <PresentationsGallery items={section.items} /> : isWorkshops ? <WorkshopsGallery items={section.items} /> : <SimpleGrid section={section} />}
      </section>

      <SiteFooter />
    </div>
  );
}

function DesignsGallery({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-20 mt-12">
      {items.map((it, i) => (
        <article
          key={i}
          className="reveal group relative rounded-[2rem] bg-cream border-2 border-deep/15 hover:border-mauve/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-md"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          {/* circular logo on top center */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10">
            <div className="relative w-24 h-24 rounded-full bg-cream border-2 border-deep/15 group-hover:border-mauve/60 shadow-xl flex items-center justify-center p-3 transition-all duration-500 group-hover:-translate-y-1">
              <div className="absolute inset-1 rounded-full ring-1 ring-deep/5 pointer-events-none" />
              {(it.logos ?? []).slice(0, 2).map((logo, k) => {
                const multi = (it.logos ?? []).length > 1;
                return (
                  <img
                    key={k}
                    src={logo}
                    alt={it.program}
                    className="absolute object-contain"
                    style={{
                      maxWidth: "60%",
                      maxHeight: "60%",
                      transform: multi ? (k === 0 ? "translateX(10px)" : "translateX(-10px)") : "none",
                      opacity: multi && k === 1 ? 0.85 : 1,
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className="pt-16 pb-9 px-7 md:px-9">
            {it.tag && (
              <div className="flex justify-center mb-4">
                <span className="inline-block text-[10px] bg-deep text-cream px-3 py-1 rounded-full font-bold tracking-[0.2em] uppercase">
                  {it.tag}
                </span>
              </div>
            )}
            {it.course && (
              <p className="text-mauve text-[11px] font-bold tracking-[0.25em] uppercase text-center mb-2">
                {it.course}
              </p>
            )}
            <h3 className="display-ar text-2xl md:text-3xl text-deep text-center leading-snug">
              {it.title}
            </h3>
            <p className="text-plum mt-2 text-sm text-center">{it.subtitle}</p>

            <div className="hairline my-6" />

            {it.goal && (
              <p className="text-deep/80 leading-loose text-[14px] text-center">{it.goal}</p>
            )}

            <div className="grid grid-cols-2 gap-3 mt-6">
              {it.audience && (
                <div className="rounded-xl bg-deep/5 px-3 py-2.5 text-center">
                  <p className="text-[10px] text-mauve font-bold tracking-wider mb-1">الفئة</p>
                  <p className="text-deep text-xs font-semibold">{it.audience}</p>
                </div>
              )}
              {it.program && (
                <div className="rounded-xl bg-deep/5 px-3 py-2.5 text-center">
                  <p className="text-[10px] text-mauve font-bold tracking-wider mb-1">الأداة</p>
                  <p className="text-deep text-xs font-semibold">{it.program}</p>
                </div>
              )}
            </div>

            {it.links && it.links.length > 0 && (
              <div className="mt-6 pt-5 border-t border-deep/10 flex flex-wrap justify-center gap-2">
                {it.links.map((l, k) => (
                  <a
                    key={k}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep text-cream text-xs font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>{l.label}</span>
                    <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function ReportsGallery({ items }: { items: Item[] }) {
  return (
    <div className="space-y-6">
      {items.map((it, i) => (
        <article
          key={i}
          className="reveal group relative overflow-hidden rounded-[1.75rem] bg-cream border border-deep/15 hover:border-mauve/50 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl shadow-sm"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-gradient-to-b from-deep via-mauve to-plum" />

          <div className="relative grid md:grid-cols-12 gap-6 p-7 md:p-10">
            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
              <div className="w-16 h-16 rounded-2xl frame-deep flex items-center justify-center text-cream font-display text-xl shadow-md">
                {String(i + 1).padStart(2, "0")}
              </div>
              {it.tag && (
                <span className="text-[10px] bg-deep/5 text-deep px-3 py-1.5 rounded-full font-bold tracking-[0.2em] uppercase border border-deep/10">
                  {it.tag}
                </span>
              )}
            </div>

            <div className="md:col-span-9">
              {it.course && (
                <p className="text-mauve text-[11px] font-bold tracking-[0.25em] uppercase mb-2">
                  {it.course}
                </p>
              )}
              <h3 className="display-ar text-xl md:text-2xl text-deep leading-snug">
                {it.title}
              </h3>
              <p className="text-plum mt-1.5 text-sm">{it.subtitle}</p>

              <div className="hairline my-5" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                {it.program && (
                  <div>
                    <p className="text-mauve text-[10px] font-bold tracking-wider mb-0.5">المنصة</p>
                    <p className="text-deep text-sm">{it.program}</p>
                  </div>
                )}
                {it.subtitle && (
                  <div>
                    <p className="text-mauve text-[10px] font-bold tracking-wider mb-0.5">المُشرفة</p>
                    <p className="text-deep text-sm">{it.subtitle}</p>
                  </div>
                )}
                {it.course && (
                  <div>
                    <p className="text-mauve text-[10px] font-bold tracking-wider mb-0.5">المقرر</p>
                    <p className="text-deep text-sm">{it.course}</p>
                  </div>
                )}
              </div>

              {it.links && it.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {it.links.map((l, k) => (
                    <a
                      key={k}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep text-cream text-xs font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>{l.label}</span>
                      <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function PresentationsGallery({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <article
          key={i}
          className="reveal group relative rounded-[1.75rem] overflow-hidden bg-cream border border-deep/15 hover:border-mauve/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="relative h-40 bg-deep overflow-hidden flex-shrink-0">
            {it.image ? (
              <img src={it.image} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/30 to-transparent" />
            <span className="absolute bottom-3 left-5 font-display text-cream text-5xl leading-none drop-shadow-lg">{String(i + 1).padStart(2, "0")}</span>
            {it.tag && (
              <span className="absolute bottom-4 right-4 text-[9px] bg-cream/20 backdrop-blur text-cream px-2.5 py-1 rounded-full border border-cream/30 font-bold tracking-[0.15em] uppercase">
                {it.tag}
              </span>
            )}
          </div>

          <div className="p-6 flex-1 flex flex-col">
            {it.course && (
              <p className="text-mauve text-[10px] font-bold tracking-[0.2em] uppercase mb-2 break-words">{it.course}</p>
            )}
            <h3 className="display-ar text-xl text-deep leading-snug">{it.title}</h3>
            <p className="text-plum mt-1.5 text-xs">{it.subtitle}</p>

            <div className="hairline my-4" />

            {it.goal && <p className="text-deep/75 leading-loose text-[13px]">{it.goal}</p>}

            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {it.audience && (
                <div className="rounded-lg bg-deep/5 px-2.5 py-2">
                  <p className="text-mauve text-[9px] font-bold tracking-wider mb-0.5">الفئة</p>
                  <p className="text-deep text-[11px] font-semibold">{it.audience}</p>
                </div>
              )}
              {it.program && (
                <div className="rounded-lg bg-deep/5 px-2.5 py-2">
                  <p className="text-mauve text-[9px] font-bold tracking-wider mb-0.5">المنصة</p>
                  <p className="text-deep text-[11px] font-semibold">{it.program}</p>
                </div>
              )}
            </div>

            {it.links && it.links.length > 0 && (
              <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                {it.links.map((l, k) => (
                  <a
                    key={k}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deep text-cream text-[11px] font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>{l.label}</span>
                    <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function SimpleGrid({ section }: { section: Section }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.items.map((it, i) => (
        <article
          key={i}
          className="editorial-card overflow-hidden flex flex-col reveal"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          <div className="relative aspect-[4/3] frame-deep overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cream/10 animate-float" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-cream/5 animate-float-rev" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-cream">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-cream/20 px-3 py-1 rounded-full">
                  {section.index} · {String(i + 1).padStart(2, "0")}
                </span>
                {it.tag && (
                  <span className="text-sm bg-cream/15 px-3 py-1 rounded-full">{it.tag}</span>
                )}
              </div>
              <div>
                <p className="text-5xl mb-2">{section.emoji}</p>
                <p className="font-display text-2xl opacity-90">{section.title}</p>
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-bold text-deep text-lg leading-snug">{it.title}</h3>
            <p className="mt-3 text-mauve text-sm">{it.subtitle}</p>
            {it.meta && <p className="mt-2 text-deep/60 text-sm">{it.meta}</p>}
            <div className="hairline mt-5" />
            <div className="mt-4 flex items-center justify-between text-deep/70 text-sm">
              <span>مشروع رقم {String(i + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function WorkshopsGallery({ items }: { items: Item[] }) {
  const featured = items.find((it) => it.featured);
  const rich = items.filter((it) => it.goal && !it.featured);
  const compact = items.filter((it) => !it.goal && !it.featured);
  return (
    <div className="space-y-10">
      {/* Featured workshop — hero card */}
      {featured && (
        <article className="reveal relative overflow-hidden rounded-[2rem] border-2 border-mauve/50 shadow-2xl bg-gradient-to-br from-deep via-plum to-deep text-cream">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-mauve/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />
          <div className="relative p-8 md:p-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mauve text-white text-[11px] font-bold tracking-[0.2em] uppercase shadow-lg">
                  <span>★</span> ورشة مميّزة
                </span>
                {featured.tag && (
                  <span className="text-[10px] bg-cream/15 text-cream px-3 py-1.5 rounded-full font-bold tracking-[0.15em] uppercase border border-cream/20">
                    {featured.tag}
                  </span>
                )}
              </div>
              {featured.course && (
                <p className="text-mauve-foreground text-cream/70 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{featured.course}</p>
              )}
              <h3 className="display-ar text-3xl md:text-4xl text-cream leading-tight">{featured.title}</h3>
              <p className="text-cream/80 mt-2">{featured.subtitle}</p>
              <div className="hairline my-5 opacity-40" />
              {featured.goal && (
                <p className="text-cream/90 leading-loose text-sm md:text-base">{featured.goal}</p>
              )}
              {featured.links && featured.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.links.map((l, k) => (
                    <a
                      key={k}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream text-deep text-xs font-bold hover:bg-mauve hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                    >
                      <span>{l.label}</span>
                      <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 md:border-r md:border-cream/20 md:pr-8">
              {featured.audience && (
                <div className="rounded-xl bg-cream/10 backdrop-blur-sm px-4 py-3 border border-cream/15">
                  <p className="text-[10px] text-cream/70 font-bold tracking-wider mb-1">الفئة المستهدفة</p>
                  <p className="text-cream font-semibold">{featured.audience}</p>
                </div>
              )}
              {featured.program && (
                <div className="rounded-xl bg-cream/10 backdrop-blur-sm px-4 py-3 border border-cream/15">
                  <p className="text-[10px] text-cream/70 font-bold tracking-wider mb-1">الأداة</p>
                  <p className="text-cream font-semibold">{featured.program}</p>
                </div>
              )}
            </div>
          </div>
        </article>
      )}

      {/* Rich workshops — 3 col */}
      {rich.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {rich.map((it, i) => (
            <article
              key={i}
              className="reveal group relative overflow-hidden rounded-[1.75rem] bg-cream border border-deep/15 hover:border-mauve/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-gradient-to-b from-deep via-mauve to-plum" />
              <div className="relative p-6 md:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl frame-deep flex items-center justify-center text-cream font-display text-lg shadow-md">
                    {String(i + 2).padStart(2, "0")}
                  </div>
                  {it.tag && (
                    <span className="text-[10px] bg-deep/5 text-deep px-3 py-1 rounded-full font-bold tracking-[0.15em] uppercase border border-deep/10">
                      {it.tag}
                    </span>
                  )}
                </div>
                {it.course && (
                  <p className="text-mauve text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{it.course}</p>
                )}
                <h3 className="display-ar text-xl text-deep leading-snug">{it.title}</h3>
                <p className="text-plum mt-1.5 text-xs">{it.subtitle}</p>
                <div className="hairline my-4" />
                {it.goal && <p className="text-deep/75 leading-loose text-[13px]">{it.goal}</p>}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {it.audience && (
                    <div className="rounded-lg bg-deep/5 px-2.5 py-2">
                      <p className="text-[9px] text-mauve font-bold tracking-wider mb-0.5">الفئة</p>
                      <p className="text-deep text-[11px] font-semibold">{it.audience}</p>
                    </div>
                  )}
                  {it.program && (
                    <div className="rounded-lg bg-deep/5 px-2.5 py-2">
                      <p className="text-[9px] text-mauve font-bold tracking-wider mb-0.5">الأداة</p>
                      <p className="text-deep text-[11px] font-semibold">{it.program}</p>
                    </div>
                  )}
                </div>
                {it.links && it.links.length > 0 && (
                  <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                    {it.links.map((l, k) => (
                      <a
                        key={k}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deep text-cream text-[11px] font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>{l.label}</span>
                        <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Compact workshops — 3 col, dense pill design */}
      {compact.length > 0 && (
        <div className="grid md:grid-cols-3 gap-5">
          {compact.map((it, i) => (
            <article
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl bg-cream border border-deep/15 hover:border-mauve/50 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl flex items-center gap-4 p-5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-deep via-mauve to-plum" />
              <div className="relative w-14 h-14 rounded-xl frame-deep flex items-center justify-center text-cream font-display text-lg flex-shrink-0 shadow-md">
                {String(rich.length + i + 2).padStart(2, "0")}
              </div>
              <div className="relative flex-1 min-w-0">
                {it.tag && (
                  <p className="text-mauve text-[9px] font-bold tracking-[0.2em] uppercase mb-1">{it.tag}</p>
                )}
                <h3 className="display-ar text-base text-deep leading-snug">{it.title}</h3>
                <p className="text-plum text-xs mt-1">{it.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-mauve text-xs font-bold tracking-wide mb-1">{label}</p>
      <p className="text-deep">{value}</p>
    </div>
  );
}
