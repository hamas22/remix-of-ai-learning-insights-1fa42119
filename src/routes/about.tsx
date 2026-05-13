import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
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
    { num: solutions.length, label: "حلول تعليمية", hint: "واقع معزز · برمجيات · محتوى تفاعلي" },
    { num: getCount("designs"), label: "تصاميم", hint: "هوية بصرية ومواد تعليمية" },
    { num: getCount("workshops"), label: "ورش عمل", hint: "تدريب وتمكين معلمين ومتعلمين" },
    { num: getCount("presentations"), label: "عروض تقديمية", hint: "محتوى أكاديمي وتعريفي" },
    { num: getCount("reports"), label: "تقارير", hint: "تحليل وتقييم برامج تعليمية" },
    { num: 21, label: "شهادات", hint: "ذكاء اصطناعي · بيانات · تصميم تعليمي" },
  ];

  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* INTRO */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-mauve/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-soft/30 blur-3xl animate-float-rev pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-right reveal">
          <span className="tag-soft">من أنا</span>
          <h1 className="display-ar text-4xl md:text-6xl text-deep mt-5">
            ألاء هاشم الزهراني
          </h1>
          <p className="font-display text-plum text-lg md:text-xl mt-3">
            أخصائية تعليم الكتروني · ماجستير تعليم الكتروني
          </p>

          <div className="hairline w-32 mt-6 mr-0 ml-auto" />

          <p className="text-plum leading-loose text-lg md:text-xl mt-7 max-w-3xl mr-0 ml-auto">
            متخصصة في تقنيات التعليم، مع خبرة في التصميم التعليمي والمحتوى التفاعلي
            وتحليل البيانات التعليمية وتطبيقات الذكاء الاصطناعي في التعليم. أعمل على
            تحويل البيانات إلى رؤى تخدم المتعلم، وتصميم تجارب تعليمية تنطلق من فهم
            حقيقي لاحتياجاته.
          </p>

          {/* Education frames */}
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                degree: "بكالوريوس تعليم الاقتصاد المنزلي",
                uni: "جامعة أم القرى",
                gpa: "3.54 / 4.00",
                note: null as string | null,
              },
              {
                degree: "ماجستير تنفيذي في التعليم الإلكتروني",
                uni: "جامعة الملك عبدالعزيز",
                gpa: "4.98 / 5.00",
                note: "قيد الدراسة",
              },
            ].map((e) => (
              <div
                key={e.degree}
                className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-deep via-mauve to-plum shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-full rounded-3xl bg-cream p-7 md:p-8 overflow-hidden">
                  {/* corner ornaments */}
                  <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-deep/40 rounded-tr-xl" />
                  <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-deep/40 rounded-bl-xl" />
                  <div className="pointer-events-none absolute -top-16 -left-10 w-48 h-48 rounded-full bg-mauve/10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="font-display text-xl md:text-2xl text-deep leading-snug">
                    {e.degree}
                  </p>
                  <p className="text-plum mt-2">{e.uni}</p>
                  <div className="hairline w-16 my-4 mr-0 ml-auto" />
                  <div className="flex items-center justify-between gap-3">
                    <span dir="ltr" className="font-mono text-base md:text-lg text-deep tracking-wider">
                      GPA {e.gpa}
                    </span>
                    {e.note && (
                      <span className="tag-soft text-xs">{e.note}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — كل واحد ف بوكس */}
      <section className="px-6 md:px-14 pb-24 relative">
        <div className="max-w-6xl mx-auto reveal">
          <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative rounded-xl md:rounded-2xl p-[1.5px] bg-gradient-to-br from-deep/40 via-mauve/40 to-plum/40 hover:from-deep hover:via-mauve hover:to-plum shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5`}
              >
                <div className="relative h-24 sm:h-28 md:h-32 rounded-xl md:rounded-2xl bg-cream overflow-hidden">
                  <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-deep/40 rounded-tr-lg transition-colors duration-500 group-hover:border-plum" />
                  <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-deep/40 rounded-bl-lg transition-colors duration-500 group-hover:border-plum" />
                  <div className="pointer-events-none absolute -top-12 -left-10 w-40 h-40 rounded-full bg-mauve/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl text-deep leading-none">
                      {String(s.num).padStart(2, "0")}
                    </p>
                    <span className="block w-5 h-px bg-mauve/60 my-1.5" />
                    <p className="text-plum text-[10px] sm:text-[11px] md:text-xs font-medium tracking-wide">
                      {s.label}
                    </p>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <p className="font-display text-[11px] sm:text-xs md:text-sm text-deep leading-snug font-bold">
                      {s.label}
                    </p>
                    <span className="block w-5 h-px bg-mauve my-1" />
                    <p className="text-plum text-[9px] sm:text-[10px] leading-snug">
                      {s.hint}
                    </p>
                  </div>
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
