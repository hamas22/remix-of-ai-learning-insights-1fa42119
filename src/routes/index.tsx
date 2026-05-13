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

      {/* HERO — editorial card */}
      <section className="px-6 md:px-14 pt-10 pb-24 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

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

        {/* Soft leaves backdrop behind mission/vision */}
        <LeafCluster className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-[0.07] pointer-events-none" />
        <LeafCluster className="absolute top-10 right-0 w-72 h-72 opacity-[0.05] pointer-events-none -scale-x-100" />
        <LeafCluster className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.05] pointer-events-none rotate-180" />

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
        <div className="marquee items-center">
          {[...Array(2)].map((_, k) => (
            <div className="flex gap-12 items-center" key={k}>
              {tools.map((t) => (
                <div
                  key={`${k}-${t.name}`}
                  className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-white shadow-sm ring-1 ring-deep/10 flex items-center justify-center p-3"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
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

function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
      fill="currentColor"
      style={{ color: "var(--brand-mauve)" }}
      aria-hidden="true"
    >
      {/* central stem */}
      <path
        d="M30 170 C 70 130, 110 90, 170 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      {/* leaves along the stem */}
      <g opacity="0.95">
        <ellipse cx="60" cy="140" rx="22" ry="9" transform="rotate(-30 60 140)" />
        <ellipse cx="85" cy="115" rx="26" ry="10" transform="rotate(-35 85 115)" />
        <ellipse cx="115" cy="85" rx="28" ry="11" transform="rotate(-40 115 85)" />
        <ellipse cx="145" cy="55" rx="24" ry="10" transform="rotate(-45 145 55)" />
        {/* opposite side smaller leaves */}
        <ellipse cx="50" cy="158" rx="14" ry="6" transform="rotate(40 50 158)" opacity="0.7" />
        <ellipse cx="78" cy="130" rx="16" ry="7" transform="rotate(45 78 130)" opacity="0.7" />
        <ellipse cx="108" cy="100" rx="18" ry="7" transform="rotate(50 108 100)" opacity="0.7" />
        <ellipse cx="138" cy="70" rx="16" ry="7" transform="rotate(55 138 70)" opacity="0.7" />
      </g>
    </svg>
  );
}
