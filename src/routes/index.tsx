import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CertificatesSection from "@/components/CertificatesSection";
import avatar from "@/assets/avatar.jpg";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ألاء الزهراني | الملف الشخصي" },
      { name: "description", content: "بورتفوليو ألاء الزهراني — مصممة تعليمية، ماجستير تقنيات التعليم، شغوفة بتحليل البيانات والذكاء الاصطناعي." },
    ],
  }),
});

import logoPowerBI from "@/assets/logo-powerbi.png";
import logoStoryline from "@/assets/logo-storyline.png";
import logoCanva from "@/assets/logo-canva.png";
import logoPhotopea from "@/assets/logo-photopea.png";
import logoKahoot from "@/assets/logo-kahoot.png";
import logoHeygen from "@/assets/logo-heygen.png";
import logoCapcut from "@/assets/logo-capcut.png";
import logoHeyzine from "@/assets/logo-heyzine.png";
import logoGenially from "@/assets/logo-genially.png";
import logoBlippar from "@/assets/logo-blippar.png";
import logoHailuo from "@/assets/logo-hailuo.png";

const tools = [
  { name: "Power BI", logo: logoPowerBI },
  { name: "Articulate Storyline", logo: logoStoryline },
  { name: "Canva", logo: logoCanva },
  { name: "Photopea", logo: logoPhotopea },
  { name: "Kahoot!", logo: logoKahoot },
  { name: "HeyGen", logo: logoHeygen },
  { name: "CapCut", logo: logoCapcut },
  { name: "Heyzine", logo: logoHeyzine },
  { name: "Genially", logo: logoGenially },
  { name: "BlippAR", logo: logoBlippar },
  { name: "Hailuo AI", logo: logoHailuo },
  { name: "Storyline", logo: logoStoryline },
];

function Home() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="px-6 md:px-14 pt-10 pb-24 relative">
        {/* floating background orbs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-12 items-center relative">
          {/* Text */}
          <div
            className="md:col-span-7 order-2 md:order-1 reveal"
            style={{ animation: "fade-up 1s cubic-bezier(.2,.8,.2,1) both" }}
          >
            <span className="chip">هذه أنا</span>
            <h1 className="display-ar text-5xl md:text-7xl text-deep mt-8">
              <span className="block">
                ألاء <span className="font-display italic text-plum">هاشم</span>
              </span>
              <span className="block shimmer-text">الزهراني</span>
            </h1>

            <div className="hairline w-32 mt-6 origin-right draw-line" />

          </div>

          {/* Circular portrait — no frame, just glow + rings */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
            <div
              className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]"
              style={{ animation: "scale-in 1.1s cubic-bezier(.2,.8,.2,1) both" }}
            >
              {/* pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-mauve/40 animate-pulse-ring" />
              <div
                className="absolute inset-0 rounded-full border border-mauve/30 animate-pulse-ring"
                style={{ animationDelay: "1.2s" }}
              />
              {/* slow rotating dotted ring */}
              <div
                className="absolute -inset-6 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, var(--brand-mauve) 25%, transparent 50%, var(--brand-soft) 75%, transparent 100%)",
                  WebkitMask:
                    "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                  mask:
                    "radial-gradient(circle, transparent 64%, #000 65%, #000 67%, transparent 68%)",
                }}
              />
              {/* float wrapper */}
              <div className="absolute inset-0 animate-float">
                <img
                  src={avatar}
                  alt="ألاء الزهراني"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-14 py-28 relative">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-soft/20 blur-3xl pointer-events-none" />

        <div className="text-center mb-16 reveal relative">
          <span className="chip">الرسالة والرؤية</span>
          <h2 className="display-ar text-4xl md:text-6xl text-deep mt-6">
            ما <span className="shimmer-text">يقودني</span> في عملي
          </h2>
          <div className="hairline w-32 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto relative">
          {[
            {
              num: "١",
              label: "الرسالة",
              text: "لأن التعليم الجيد يُبنى على فهم لا تخمين، أحلّل البيانات وأستثمر الذكاء الاصطناعي لفهم احتياجات المتعلم وتحويل التجربة التعليمية من تخمين إلى تصميم مدروس.",
              icon: "✦",
            },
            {
              num: "٢",
              label: "الرؤية",
              text: "أن أكون حلقة وصل بين البيانات والذكاء الاصطناعي من جهة، واحتياجات المتعلم الحقيقية من جهة أخرى — نحو تعليم أكثر إنسانية وذكاءً.",
              icon: "❖",
            },
          ].map((m, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative rounded-[2rem] overflow-hidden bg-cream border border-deep/15 hover:border-mauve/50 p-10 md:p-12 shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-deep via-mauve to-plum" />
              <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full bg-mauve/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="pointer-events-none absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-soft/20 blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full frame-deep flex items-center justify-center font-display text-2xl text-cream shadow-md">
                      {m.num}
                    </div>
                    <div>
                      <p className="text-mauve text-[10px] font-bold tracking-[0.4em] uppercase">{i === 0 ? "Mission" : "Vision"}</p>
                      <p className="font-display text-2xl text-deep mt-0.5">{m.label}</p>
                    </div>
                  </div>
                  <span className="text-5xl text-mauve/30 group-hover:text-mauve/60 transition-colors">{m.icon}</span>
                </div>
                <div className="hairline mb-7" />
                <p className="text-plum leading-loose text-lg">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLBOX */}
      <section className="px-6 md:px-14 py-20">
        <div className="text-center mb-14 reveal">
          <span className="chip">المهارات والأدوات</span>
          <h2 className="display-ar text-4xl md:text-5xl text-deep mt-6">
            الأدوات التي أعمل بها
          </h2>
          <p className="text-plum mt-4 max-w-xl mx-auto">
            مجموعة من البرامج والمنصات التي أستخدمها يومياً لتحويل المحتوى
            التعليمي إلى تجربة بصرية تفاعلية مدروسة.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tools.map((t, i) => (
            <div
              key={t.name}
              className="editorial-card p-5 text-center reveal group hover:-translate-y-1 transition-transform duration-500"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="aspect-square w-full max-w-[120px] mx-auto mb-3 rounded-2xl bg-white shadow-sm ring-1 ring-deep/10 flex items-center justify-center p-4 group-hover:shadow-lg group-hover:ring-mauve/30 transition-all duration-500">
                <img
                  src={t.logo}
                  alt={t.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-deep font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <CertificatesSection />

      <SiteFooter />
    </div>
  );
}
