import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
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

            <p
              className="text-plum text-lg md:text-xl leading-loose max-w-xl mt-8"
              style={{ animation: "fade-up 1s .3s cubic-bezier(.2,.8,.2,1) both" }}
            >
              طالبة ماجستير في تقنيات التعليم — التعليم الإلكتروني التنفيذي.
              مصممة تعليمية تجد في تقاطع البيانات والذكاء الاصطناعي مساحة لفهم
              المتعلم، وتحويل التعليم من تخمين إلى تصميم مدروس.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3"
              style={{ animation: "fade-up 1s .55s cubic-bezier(.2,.8,.2,1) both" }}
            >
              <span className="tag-soft">تصميم تعليمي</span>
              <span className="tag-soft">تحليلات التعلم</span>
              <span className="tag-soft">ذكاء اصطناعي</span>
            </div>
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

      {/* MARQUEE */}
      <section className="py-6 border-y border-deep/15 overflow-hidden bg-cream/60">
        <div className="marquee text-deep/80 font-display text-xl md:text-2xl whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div className="flex gap-12 items-center" key={k}>
              <span>تصميم تعليمي</span>
              <span className="text-mauve">✦</span>
              <span>تحليلات التعلم</span>
              <span className="text-mauve">✦</span>
              <span>الذكاء الاصطناعي في التعليم</span>
              <span className="text-mauve">✦</span>
              <span>الواقع المعزز</span>
              <span className="text-mauve">✦</span>
              <span>التعلم التكيفي</span>
              <span className="text-mauve">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-14 py-24">
        <div className="text-center mb-14 reveal">
          <span className="chip">الرسالة والرؤية</span>
          <h2 className="display-ar text-4xl md:text-5xl text-deep mt-6">
            ما يقودني في عملي
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="editorial-card p-10 reveal reveal-delay-1 relative">
            <div className="absolute -top-5 right-8 w-10 h-10 rounded-full bg-deep flex items-center justify-center text-cream font-display animate-float">
              ١
            </div>
            <p className="text-mauve mb-3 font-bold">الرسالة</p>
            <p className="text-plum text-lg leading-loose">
              لأن التعليم الجيد يُبنى على فهم لا تخمين، أحلّل البيانات
              وأستثمر الذكاء الاصطناعي لفهم احتياجات المتعلم وتحسين التجربة
              التعليمية.
            </p>
          </div>
          <div className="editorial-card p-10 reveal reveal-delay-2 relative">
            <div
              className="absolute -top-5 right-8 w-10 h-10 rounded-full bg-mauve flex items-center justify-center text-cream font-display animate-float-rev"
            >
              ٢
            </div>
            <p className="text-mauve mb-3 font-bold">الرؤية</p>
            <p className="text-plum text-lg leading-loose">
              أن أكون حلقة وصل بين البيانات والذكاء الاصطناعي من جهة،
              واحتياجات المتعلم الحقيقية من جهة أخرى.
            </p>
          </div>
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
              key={t}
              className="editorial-card p-6 text-center reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-deep/10 mx-auto mb-3 flex items-center justify-center text-deep font-display">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-deep font-bold">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
