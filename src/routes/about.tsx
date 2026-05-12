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
            ألاء <span className="font-display italic text-plum">هاشم</span> الزهراني
          </h1>

          <div className="hairline w-32 mt-6 mr-0 ml-auto" />

          <p className="text-plum leading-loose text-lg md:text-xl mt-7 max-w-3xl mr-0 ml-auto">
            متخصصة في تقنيات التعليم، مع خبرة في التصميم التعليمي والمحتوى التفاعلي
            وتحليل البيانات التعليمية وتطبيقات الذكاء الاصطناعي في التعليم. أعمل على
            تحويل البيانات إلى رؤى تخدم المتعلم، وتصميم تجارب تعليمية تنطلق من فهم
            حقيقي لاحتياجاته بدل التخمين.
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

      {/* STATS — صف واحد احترافي */}
      <section className="px-6 md:px-14 pb-24 relative">
        <div className="max-w-6xl mx-auto reveal">
          <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-l from-deep via-mauve to-plum shadow-2xl">
            <div className="rounded-[2rem] bg-cream/95 backdrop-blur px-4 md:px-8 py-8 md:py-10">
              <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-x-reverse divide-deep/15">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`reveal reveal-delay-${(i % 5) + 1} group flex flex-col items-center text-center px-2 md:px-4 py-4`}
                  >
                    <p className="font-display text-4xl md:text-6xl text-deep leading-none transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-plum">
                      {String(s.num).padStart(2, "0")}
                    </p>
                    <span className="block w-8 h-px bg-mauve/60 my-3" />
                    <p className="text-plum text-xs md:text-sm font-medium tracking-wide">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
