import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ألاء الزهراني | الملف الشخصي" },
      { name: "description", content: "مصممة تعليمية وطالبة ماجستير في تقنيات التعليم — شغوفة بتحليل البيانات والذكاء الاصطناعي في التعليم." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen leaf-bg">
      <SiteNav />

      {/* Hero */}
      <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="order-2 md:order-1 text-center md:text-right">
          <span className="section-chip mb-6">هذه أنا</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black text-deep leading-tight">
            ألاء هاشم الزهراني
          </h1>
          <p className="mt-6 text-lg md:text-xl text-plum leading-loose">
            طالبة ماجستير في تقنيات التعليم — التعليم الإلكتروني (تنفيذي) ·
            مصممة تعليمية · شغوفة بتحليل بيانات التعلم وتوظيف الذكاء الاصطناعي
            في التعليم.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={avatar}
            alt="ألاء الزهراني"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
            style={{ boxShadow: "0 20px 60px -20px rgba(90,36,68,0.6)" }}
          />
        </div>
      </section>

      {/* Message & Vision */}
      <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="card-soft p-8">
          <span className="section-chip mb-4">الرسالة</span>
          <p className="mt-5 text-plum text-lg leading-loose">
            لأن التعليم الجيد يُبنى على فهم لا تخمين، أحلّل البيانات وأستثمر
            الذكاء الاصطناعي لفهم احتياجات المتعلم وتحسين التجربة التعليمية.
          </p>
        </div>
        <div className="card-soft p-8">
          <span className="section-chip mb-4">الرؤية</span>
          <p className="mt-5 text-plum text-lg leading-loose">
            أن أكون حلقة وصل بين البيانات والذكاء الاصطناعي من جهة، واحتياجات
            المتعلم الحقيقية من جهة أخرى.
          </p>
        </div>
      </section>

      {/* Skills/Tools */}
      <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-chip">المهارات والأدوات</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Power BI", "Articulate 360", "Canva", "Photopea",
            "Kahoot!", "HeyGen", "CapCut", "Heyzine",
            "Genially", "BlippAR", "Hailuo AI", "Storyline",
          ].map((t) => (
            <div
              key={t}
              className="card-soft p-5 text-center font-bold text-deep"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
