import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ألاء الزهراني | بورتفوليو" },
      { name: "description", content: "بورتفوليو ألاء الزهراني — مصممة تعليمية، ماجستير تقنيات التعليم، شغوفة بتحليل البيانات والذكاء الاصطناعي." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen paper">
      <SiteNav />

      {/* HERO — editorial split */}
      <section className="px-6 md:px-14 pt-8 pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono-en text-deep/60">N° 01</span>
              <span className="hairline flex-1" />
              <span className="font-mono-en text-deep/60">Portrait</span>
            </div>

            <p className="font-mono-en text-mauve mb-6">A Quiet Introduction</p>

            <h1 className="display-ar text-5xl md:text-7xl text-deep">
              ألاء
              <span className="font-serif-en italic font-light text-plum"> Alaa </span>
              الزهراني
            </h1>

            <div className="hairline w-24 my-8" />

            <p className="text-plum text-lg md:text-xl leading-loose max-w-xl">
              طالبة ماجستير في تقنيات التعليم — التعليم الإلكتروني التنفيذي.
              مصممة تعليمية تجد في تقاطع البيانات والذكاء الاصطناعي مساحة لفهم
              المتعلم، وتحويل التعليم من تخمين إلى تصميم مدروس.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="tag-soft">Instructional Design</span>
              <span className="tag-soft">Learning Analytics</span>
              <span className="tag-soft">AI in Education</span>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 frame-deep rounded-[2rem] opacity-90" />
              <img
                src={avatar}
                alt="Alaa Alzahrani portrait"
                className="relative rounded-[1.75rem] w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-cream px-5 py-3 rounded-full border border-deep/20">
                <span className="font-mono-en text-deep/70">Est. 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — two columns editorial */}
      <section className="px-6 md:px-14 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="font-mono-en text-deep/60">N° 02 — Manifesto</span>
          </div>

          <div className="md:col-span-9 space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-mono-en text-mauve mb-3">The Mission</p>
                <h2 className="font-serif-en italic text-4xl text-deep mb-5">Mission.</h2>
                <p className="text-plum text-lg leading-loose">
                  لأن التعليم الجيد يُبنى على فهم لا تخمين، أحلّل البيانات
                  وأستثمر الذكاء الاصطناعي لفهم احتياجات المتعلم وتحسين التجربة
                  التعليمية.
                </p>
              </div>
              <div>
                <p className="font-mono-en text-mauve mb-3">The Vision</p>
                <h2 className="font-serif-en italic text-4xl text-deep mb-5">Vision.</h2>
                <p className="text-plum text-lg leading-loose">
                  أن أكون حلقة وصل بين البيانات والذكاء الاصطناعي من جهة،
                  واحتياجات المتعلم الحقيقية من جهة أخرى.
                </p>
              </div>
            </div>
            <div className="hairline" />
          </div>
        </div>
      </section>

      {/* TOOLBOX */}
      <section className="px-6 md:px-14 py-20">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-3">
            <span className="font-mono-en text-deep/60">N° 03 — Toolbox</span>
          </div>
          <div className="md:col-span-9 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-serif-en italic text-5xl text-deep">
              The Instruments.
            </h2>
            <p className="text-plum max-w-sm">
              أدوات أعمل بها يومياً لتحويل المحتوى التعليمي إلى تجربة بصرية
              تفاعلية مدروسة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-deep/15">
          {[
            "Power BI", "Articulate 360", "Canva", "Photopea",
            "Kahoot!", "HeyGen", "CapCut", "Heyzine",
            "Genially", "BlippAR", "Hailuo AI", "Storyline",
          ].map((t, i) => (
            <div
              key={t}
              className="border-b border-l border-deep/15 px-5 py-8 group hover:bg-deep hover:text-cream transition-colors duration-500"
            >
              <span className="index-num text-2xl block mb-3 group-hover:text-cream/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif-en text-2xl">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
