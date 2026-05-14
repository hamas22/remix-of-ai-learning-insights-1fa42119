import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

import avatar from "@/assets/avatar.jpg";
import { useReveal } from "@/hooks/useReveal";
import LeafDecor from "@/components/LeafDecor";

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
import logoHailuo from "@/assets/logo-hailuo.png";
import logoPowerPoint from "@/assets/logo-powerpoint.png";
import logoWord from "@/assets/logo-word.png";
import logoExcel from "@/assets/logo-excel.png";
import logoGenially from "@/assets/logo-genially.png";
import logoBlippar from "@/assets/logo-blippar.png";
import logoWordPress from "@/assets/logo-wordpress.png";

const tools = [
  { name: "PowerPoint", logo: logoPowerPoint },
  { name: "Articulate 360", logo: logoStoryline },
  { name: "Heyzine", logo: logoHeyzine },
  { name: "Photopea", logo: logoPhotopea },
  { name: "Kahoot!", logo: logoKahoot },
  { name: "Power BI", logo: logoPowerBI },
  { name: "Excel", logo: logoExcel },
  { name: "Word", logo: logoWord },
  { name: "CapCut", logo: logoCapcut },
  { name: "Hailuo AI", logo: logoHailuo },
  { name: "HeyGen", logo: logoHeygen },
  { name: "Canva", logo: logoCanva },
  { name: "Genially", logo: logoGenially },
  { name: "BlippAR", logo: logoBlippar },
  { name: "WordPress", logo: logoWordPress },
];

function Home() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HERO — editorial card */}
      <section className="px-6 md:px-14 pt-10 pb-24 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

        {/* Top leaves — elegant editorial framing */}
        <LeafDecor variant="watercolor" className="-top-12 -right-10 w-56 md:w-80" opacity={0.22} rotate={-18} />
        <LeafDecor variant="outline" className="top-4 right-1/3 w-32 md:w-44" opacity={0.16} rotate={28} flip />
        <LeafDecor variant="watercolor" className="-top-6 left-8 w-44 md:w-60" opacity={0.18} rotate={32} flip />
        <LeafDecor variant="outline" className="top-16 -left-6 w-36 md:w-48" opacity={0.14} rotate={-12} />
        <div className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-cream border border-deep/10 shadow-xl overflow-hidden px-6 md:px-14 py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-10 items-center relative">
            {/* Text */}
            <div
              className="md:col-span-7 order-2 md:order-1 relative"
              style={{ animation: "fade-up 1s cubic-bezier(.2,.8,.2,1) both" }}
            >
              {/* Vertical accent bar */}
              <span className="absolute -right-2 md:-right-4 top-1 bottom-1 w-1.5 rounded-full bg-gradient-to-b from-deep via-plum to-mauve" />

              <h1 className="font-calligraphy text-plum text-5xl md:text-7xl lg:text-8xl leading-[1.1] drop-shadow-sm">
                ألاء هاشم الزهراني
              </h1>

              <p className="font-display text-deep text-xl md:text-2xl mt-4">
                أخصائية تعليم الكتروني
              </p>

              <div className="hairline w-48 mt-6 origin-right draw-line" />

              <div className="mt-7 flex flex-wrap gap-2">
                {["تصميم تعليمي", "تحليلات بيانات التعلم", "ذكاء اصطناعي"].map((tag) => (
                  <span key={tag} className="tag-soft">{tag}</span>
                ))}
              </div>
            </div>

            {/* Avatar */}
            <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
              <div
                className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]"
                style={{ animation: "scale-in 1.1s cubic-bezier(.2,.8,.2,1) both" }}
              >
                {/* outer soft glow */}
                <div className="absolute -inset-6 rounded-full bg-mauve/20 blur-2xl" />
                {/* gradient ring frame */}
                <div
                  className="absolute -inset-2 rounded-full p-[6px] shadow-[0_20px_50px_-15px_rgba(90,36,68,0.45)]"
                  style={{
                    background:
                      "conic-gradient(from 140deg, var(--brand-deep), var(--brand-mauve), var(--brand-soft), var(--brand-plum), var(--brand-deep))",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-cream p-[4px]">
                    <img
                      src={avatar}
                      alt="ألاء الزهراني"
                      className="w-full h-full rounded-full object-cover animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-14 pt-6 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-soft/20 blur-3xl pointer-events-none" />

        {/* Watercolor leaves backdrop */}
        <LeafDecor variant="watercolor" className="-top-10 -right-10 w-72 md:w-96" opacity={0.22} />
        <LeafDecor variant="watercolor" className="-bottom-16 -left-10 w-72 md:w-96" opacity={0.18} rotate={180} />

        <div className="text-center mb-16 reveal relative">
          <span className="chip">الرسالة والرؤية</span>
          <div className="hairline w-32 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto relative">
          {[
            {
              num: "١",
              label: "الرسالة",
              text: "أحلّل البيانات وأستثمر الذكاء الاصطناعي لفهم احتياجات المتعلم الحقيقية، وتحويل التجربة التعليمية من تخمين إلى تصميم مدروس.",
              icon: "✦",
            },
            {
              num: "٢",
              label: "الرؤية",
              text: "أن يصبح التعليم في كل مكان مبنياً على فهم حقيقي للمتعلم — لا على افتراضات — من خلال تحليل دقيق للبيانات وتوظيف ذكي للذكاء الاصطناعي في خدمة المتعلم.",
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

      {/* TOOLBOX — marquee */}
      <section className="py-10 border-y border-deep/15 overflow-hidden bg-cream/60">
        <div className="text-center mb-8">
          <span className="chip">أدوات مسيرتي</span>
          <div className="hairline w-24 mx-auto mt-4" />
        </div>
        <div className="marquee items-center">
          {[...Array(2)].map((_, k) => (
            <div className="flex gap-12 items-center" key={k}>
              {tools.map((t) => (
                <div
                  key={`${k}-${t.name}`}
                  className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-soft shadow-md ring-1 ring-deep/10 flex items-center justify-center p-3"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    loading="lazy"
                    className={`max-w-full max-h-full object-contain ${t.name === "Power BI" ? "scale-125" : ""} ${t.name === "Genially" ? "scale-75" : ""}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

