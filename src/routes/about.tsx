import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import avatar from "@/assets/avatar.jpg";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "من أنا | ألاء الزهراني" },
      { name: "description", content: "نبذة عن ألاء الزهراني — مصممة تعليمية وماجستير تقنيات التعليم." },
    ],
  }),
});

function About() {
  useReveal();

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      <section className="px-6 md:px-14 pt-10 pb-24 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-12 items-center relative max-w-6xl mx-auto">
          <div className="md:col-span-5 flex justify-center order-1">
            <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]">
              <div className="absolute inset-0 rounded-full border-2 border-mauve/40 animate-pulse-ring" />
              <img
                src={avatar}
                alt="ألاء الزهراني"
                className="w-full h-full rounded-full object-cover relative"
              />
            </div>
          </div>

          <div className="md:col-span-7 order-2 reveal">
            <span className="chip">من أنا</span>
            <h1 className="display-ar text-4xl md:text-6xl text-deep mt-6">
              ألاء <span className="font-display italic text-plum">هاشم</span> الزهراني
            </h1>
            <div className="hairline w-32 mt-6" />
            <p className="text-plum leading-loose text-lg mt-8">
              مصممة تعليمية وطالبة ماجستير في تقنيات التعليم — مسار التعليم الإلكتروني التنفيذي.
              أجد في تقاطع البيانات والذكاء الاصطناعي مساحة لفهم المتعلم، وتحويل التعليم من
              تخمين إلى تصميم مدروس.
            </p>
            <p className="text-plum leading-loose text-lg mt-5">
              أعمل على تصميم تجارب تعليمية تستند إلى تحليلات التعلم وأدوات الذكاء الاصطناعي،
              بهدف بناء حلول أكثر إنسانية وذكاءً تخدم المتعلم أولًا.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["تصميم تعليمي", "تحليلات التعلم", "ذكاء اصطناعي", "ماجستير تقنيات التعليم"].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
