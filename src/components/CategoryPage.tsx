import { Link } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import type { Section } from "@/data/works";

export default function CategoryPage({ section }: { section: Section }) {
  useReveal();
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
      </section>

      <SiteFooter />
    </div>
  );
}
