import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import avatar from "@/assets/avatar.jpg";
import { useReveal } from "@/hooks/useReveal";
import { solutions, otherSections } from "@/data/works";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "من أنا | ألاء الزهراني" },
      { name: "description", content: "نبذة عن ألاء الزهراني — مصممة تعليمية وماجستير تقنيات التعليم." },
    ],
  }),
});

function getCount(slug: string) {
  return otherSections.find((s) => s.slug === slug)?.items.length ?? 0;
}

function About() {
  useReveal();

  const stats = [
    { num: solutions.length, label: "حلول تعليمية", icon: "💡" },
    { num: getCount("designs"), label: "تصاميم", icon: "🎨" },
    { num: getCount("workshops"), label: "ورش عمل", icon: "🛠️" },
    { num: getCount("presentations"), label: "عروض تقديمية", icon: "🎤" },
    { num: getCount("reports"), label: "تقارير", icon: "📑" },
    { num: 21, label: "شهادات", icon: "🎓" },
  ];

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* INTRO */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-12 items-center relative max-w-6xl mx-auto">
          {/* Portrait */}
          <div className="md:col-span-5 flex justify-center order-1">
            <div
              className="relative w-60 h-60 md:w-[20rem] md:h-[20rem]"
              style={{ animation: "scale-in 1.1s cubic-bezier(.2,.8,.2,1) both" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-mauve/40 animate-pulse-ring" />
              <div
                className="absolute inset-0 rounded-full border border-mauve/30 animate-pulse-ring"
                style={{ animationDelay: "1.2s" }}
              />
              <img
                src={avatar}
                alt="ألاء الزهراني"
                className="relative w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7 order-2 reveal">
            <span className="tag-soft">من أنا</span>
            <h1 className="display-ar text-4xl md:text-6xl text-deep mt-5">
              ألاء <span className="font-display italic text-plum">هاشم</span> الزهراني
            </h1>

            {/* Specializations — elegant inline */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mauve shrink-0" />
                <p className="text-deep leading-relaxed">
                  <span className="font-bold">بكالوريوس تعليم الاقتصاد المنزلي</span>
                  <span className="text-plum"> — جامعة أم القرى · </span>
                  <span dir="ltr" className="font-mono text-sm text-deep">GPA 3.54 / 4.00</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mauve shrink-0" />
                <p className="text-deep leading-relaxed">
                  <span className="font-bold">ماجستير تنفيذي في التعليم الإلكتروني</span>
                  <span className="text-plum"> — جامعة الملك عبدالعزيز · </span>
                  <span dir="ltr" className="font-mono text-sm text-deep">GPA 4.98 / 5.00</span>
                  <span className="text-plum"> (قيد الدراسة)</span>
                </p>
              </div>
            </div>

            <div className="hairline w-32 mt-7" />

            <p className="text-plum leading-loose text-lg mt-7">
              متخصصة في تقنيات التعليم، مع خبرة في التصميم التعليمي والمحتوى التفاعلي
              وتحليل البيانات التعليمية وتطبيقات الذكاء الاصطناعي في التعليم. أعمل على
              تحويل البيانات إلى رؤى تخدم المتعلم، وتصميم تجارب تعليمية تنطلق من فهم
              حقيقي لاحتياجاته بدل التخمين.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["تصميم تعليمي", "تحليلات بيانات التعلم", "ذكاء اصطناعي", "ADDIE"].map((tag) => (
                <span key={tag} className="tag-soft">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS — لمسة فخمة */}
      <section className="px-6 md:px-14 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 reveal">
            <span className="tag-soft">حصيلة العمل</span>
            <h2 className="display-ar text-3xl md:text-4xl text-deep mt-5">
              أرقام تختصر <span className="font-display italic text-plum">المسيرة</span>
            </h2>
            <div className="hairline w-32 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative rounded-3xl bg-cream border border-deep/15 hover:border-mauve/50 p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-deep via-mauve to-plum" />
                <div className="pointer-events-none absolute -top-20 -left-16 w-56 h-56 rounded-full bg-mauve/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col items-center text-center">
                  <span className="text-3xl md:text-4xl mb-3 opacity-80 group-hover:opacity-100 transition">
                    {s.icon}
                  </span>
                  <p className="font-display text-5xl md:text-6xl text-deep leading-none">
                    {String(s.num).padStart(2, "0")}
                  </p>
                  <div className="hairline w-12 my-4" />
                  <p className="text-plum text-sm md:text-base font-medium tracking-wide">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
