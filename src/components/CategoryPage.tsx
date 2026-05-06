import { Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import type { Section, Item } from "@/data/works";

export default function CategoryPage({ section }: { section: Section }) {
  useReveal();
  const isDesigns = section.slug === "designs";
  const isReports = section.slug === "reports";
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
        {isDesigns ? <DesignsGallery items={section.items} /> : isReports ? <ReportsGallery items={section.items} /> : <SimpleGrid section={section} />}
      </section>

      <SiteFooter />
    </div>
  );
}

function DesignsGallery({ items }: { items: Item[] }) {
  return (
    <div className="space-y-8">
      {items.map((it, i) => (
        <article
          key={i}
          className="reveal group relative rounded-3xl overflow-hidden bg-gradient-to-bl from-cream to-[#f0e8e0] border border-deep/10 hover:border-mauve/40 transition-all duration-500"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          {/* large index */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 font-display text-[140px] md:text-[200px] leading-none text-deep/5 select-none pointer-events-none">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div className="relative grid md:grid-cols-12 gap-0 p-7 md:p-12">
            {/* Logos column */}
            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-0">
              {(it.logos ?? []).map((logo, k) => (
                <div
                  key={k}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm ring-1 ring-deep/10 flex items-center justify-center p-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ transitionDelay: `${k * 80}ms` }}
                >
                  <img src={logo} alt={it.program} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
              {it.tag && (
                <span className="hidden md:inline-block mt-2 text-xs bg-deep text-cream px-3 py-1 rounded-full font-bold">
                  {it.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="md:col-span-9 md:pr-8">
              {it.course && (
                <p className="text-mauve text-xs md:text-sm font-bold tracking-widest uppercase">
                  {it.course}
                </p>
              )}
              <h3 className="display-ar text-2xl md:text-4xl text-deep mt-2 leading-snug">
                {it.title}
              </h3>
              <p className="text-plum mt-2">{it.subtitle}</p>

              <div className="hairline my-5" />

              {it.goal && (
                <p className="text-deep/80 leading-loose text-[15px] max-w-3xl">{it.goal}</p>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-6 text-sm">
                {it.audience && <Detail label="الفئة المستهدفة" value={it.audience} />}
                {it.program && <Detail label="البرنامج" value={it.program} />}
                {it.tag && <Detail label="النوع" value={it.tag} />}
              </div>

              {it.links && it.links.length > 0 && (
                <div className="mt-7 pt-5 border-t border-deep/10 flex flex-wrap gap-2">
                  {it.links.map((l, k) => (
                    <a
                      key={k}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep text-cream text-sm font-bold hover:bg-mauve transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      <span>{l.label}</span>
                      <span className="transition-transform duration-300 group-hover/link:-translate-x-1">←</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* decorative corner */}
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-mauve/15 blur-3xl pointer-events-none" />
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
          className="reveal group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-deep via-[#2a1d33] to-plum text-cream border border-cream/10 hover:border-cream/25 transition-all duration-700 shadow-xl hover:shadow-2xl"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-32 -right-24 w-96 h-96 rounded-full bg-mauve/30 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-cream/10 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

          <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-14">
            {/* Index + tag */}
            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-5">
              <div className="font-display text-[110px] md:text-[140px] leading-none text-cream/15 group-hover:text-cream/25 transition-colors duration-700">
                {String(i + 1).padStart(2, "0")}
              </div>
              {it.tag && (
                <span className="inline-flex items-center gap-2 text-xs bg-cream/10 backdrop-blur-sm text-cream px-4 py-2 rounded-full border border-cream/20 font-bold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse" />
                  {it.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="md:col-span-9">
              {it.course && (
                <p className="text-cream/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
                  {it.course}
                </p>
              )}
              <h3 className="display-ar text-2xl md:text-4xl text-cream leading-snug">
                {it.title}
              </h3>
              <p className="text-cream/70 mt-3 text-base">{it.subtitle}</p>

              <div className="h-px bg-gradient-to-r from-cream/30 via-cream/10 to-transparent my-6" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                {it.program && (
                  <div>
                    <p className="text-cream/50 text-xs font-bold tracking-wider mb-1">المنصة</p>
                    <p className="text-cream">{it.program}</p>
                  </div>
                )}
                {it.subtitle && (
                  <div>
                    <p className="text-cream/50 text-xs font-bold tracking-wider mb-1">المُشرف</p>
                    <p className="text-cream">{it.subtitle}</p>
                  </div>
                )}
                {it.course && (
                  <div>
                    <p className="text-cream/50 text-xs font-bold tracking-wider mb-1">المقرر</p>
                    <p className="text-cream">{it.course}</p>
                  </div>
                )}
              </div>

              {it.links && it.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {it.links.map((l, k) => (
                    <a
                      key={k}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-deep text-sm font-bold hover:bg-mauve hover:text-cream transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
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

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-mauve text-xs font-bold tracking-wide mb-1">{label}</p>
      <p className="text-deep">{value}</p>
    </div>
  );
}
