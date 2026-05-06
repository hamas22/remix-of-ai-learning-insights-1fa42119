import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import sol1 from "@/assets/sol-1-genetics.png";
import sol2 from "@/assets/sol-2-chemistry.png";
import sol3 from "@/assets/sol-3-science4.png";
import sol4 from "@/assets/sol-4-math.png";
import sol5 from "@/assets/sol-5-ai-training.jpg";
import sol6 from "@/assets/sol-6-vertebrates.png";

export const Route = createFileRoute("/works")({
  component: Works,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "أعمال ومشاريع تعليمية: حلول، تصاميم، تقارير، عروض وورش عمل." },
    ],
  }),
});

type Solution = {
  course: string;
  doctor: string;
  goal: string;
  audience: string;
  semester: string;
  unit: string;
  lesson: string;
  program: string;
  tag: string;
  image: string;
  product: string;
  links: { label: string; href: string }[];
};

const solutions: Solution[] = [
  {
    course: "المعلم الرقمي وبيئات التعلم",
    doctor: "د. جولين قطب",
    goal: "توظيف تقنية الواقع المعزز لتعزيز فهم طلاب العلوم للمحتوى البصري في الكتاب المدرسي، من خلال مسح الصور بالهاتف لعرض فيديوهات تعليمية ومجسّمات ثلاثية الأبعاد تفاعلية، بهدف تحويل الكتاب التقليدي إلى بيئة تعلّم غنية وجذابة.",
    audience: "طلاب الصف الثالث المتوسط",
    semester: "الفصل الدراسي الأول",
    unit: "الوراثة",
    lesson: "مادة الوراثة DNA",
    program: "BlippAR",
    tag: "واقع معزز",
    image: sol1,
    product: "PDF",
  },
  {
    course: "إنتاج برمجيات التعليم الإلكتروني",
    doctor: "د. جميلة العمري",
    goal: "تبسيط مفاهيم الجدول الدوري لطالبات الصف الثالث المتوسط في أول تجربة لهنّ مع مادة الكيمياء بأسلوب تفاعلي يُخفّف من صعوبة المادة.",
    audience: "طالبات الصف الثالث المتوسط",
    semester: "الفصل الدراسي الثاني",
    unit: "الجدول الدوري",
    lesson: "مقدمة في الجدول الدوري",
    program: "Articulate Storyline",
    tag: "ستوري لاين",
    image: sol2,
    product: "PowerPoint",
  },
  {
    course: "تطوير الألعاب التعليمية الرقمية",
    doctor: "د. هناء مكي",
    goal: "مراجعة وحدة كاملة في مادة العلوم من خلال لعبة Monopoly تعليمية مصمَّمة يدوياً، تضمّنت مراحل متعددة وألعاباً تفاعلية داخلها — بهدف تحويل المراجعة إلى تجربة ممتعة تُعزز التذكر والاستيعاب بأسلوب تنافسي.",
    audience: "طلاب الصف الرابع الابتدائي",
    semester: "الفصل الدراسي الأول",
    unit: "مراجعة الفصل الثالث",
    lesson: "—",
    program: "لعبة لوحية مصمَّمة يدوياً",
    tag: "لعبة تعليمية",
    image: sol3,
    product: "PDF",
  },
  {
    course: "تطوير الألعاب التعليمية الرقمية",
    doctor: "د. هناء مكي",
    goal: "تعزيز التعلم النشط والتفكير النقدي من خلال لعبة البحث عن الكنز، التي تنطلق من باب الفصل وتمتد عبر البيئة المحيطة. تعمل المجموعات بأجهزة ذكية لمسح رموز QR المدمجة بالواقع المعزز، حيث تُجيب على سؤال تعليمي للحصول على تلميح يقودها للمحطة التالية وصولاً إلى الكنز.",
    audience: "طلاب الصف الثالث الابتدائي",
    semester: "الفصل الدراسي الأول",
    unit: "الضرب",
    lesson: "الضرب في ٤",
    program: "Genially + QR + AR",
    tag: "تلعيب",
    image: sol4,
    product: "PDF",
  },
  {
    course: "مشروع تعليم إلكتروني عن بُعد",
    doctor: "د. لينا الفراري",
    goal: "تدريب المعلمات على توظيف الذكاء الاصطناعي في الاستراتيجيات التعليمية الحديثة، من خلال موقع تعليمي تفاعلي يُتيح لهن التعلم الذاتي وتطبيق المحتوى بشكل عملي ومباشر.",
    audience: "المعلمون والمعلمات",
    semester: "—",
    unit: "—",
    lesson: "—",
    program: "تخيل + Chat + Kapwing",
    tag: "تدريب رقمي",
    image: sol5,
    product: "PowerPoint",
  },
  {
    course: "الأصول النظرية للتعليم الإلكتروني",
    doctor: "د. رنا شاهيني",
    goal: "تقديم حل تعليمي مقترح لتسهيل تقديم المحتوى العلمي لموضوع (الفقاريات) لمادة العلوم، من خلال توظيف منصة Kahoot! بشكل متكامل في عرض المحتوى وتقديم الأنشطة التعليمية، إلى جانب تقنية الواقع المعزز لاستكشاف الهيكل العظمي بشكل مجسّم، بما يُيسّر استيعاب المعلومات ويرفع مستوى التفاعل لدى المتعلمين.",
    audience: "طلاب الصف الثاني الابتدائي",
    semester: "الفصل الدراسي الأول",
    unit: "النباتات والحيوانات",
    lesson: "مجموعات الحيوانات",
    program: "Kahoot! + الواقع المعزز",
    tag: "تكاملي",
    image: sol6,
    product: "PowerPoint",
  },
];

type Item = { title: string; subtitle: string; meta?: string; tag?: string };
type Section = { id: string; title: string; index: string; emoji: string; items: Item[] };

const otherSections: Section[] = [
  {
    id: "designs", index: "٢", emoji: "🎨", title: "التصاميم",
    items: [
      { title: "تصور بيانات بـ Power BI", subtitle: "د. نجلاء العمري", meta: "اقتصاديات التعليم", tag: "بيانات" },
      { title: "إنفوجرافيك التعلم المقلوب", subtitle: "د. نجلاء العمري", meta: "صعوبات التعلم", tag: "كانفا" },
      { title: "إنفوجرافيك الذكاء الاصطناعي في التعليم", subtitle: "د. نجلاء العمري", tag: "كانفا" },
      { title: "المنظمات المتقدمة — أوزوبل", subtitle: "د. هناء المكي", meta: "جدول الضرب", tag: "جينيالي" },
      { title: "Raster vs Vector", subtitle: "د. أمجاد المجلد", tag: "فوتوبيا" },
    ],
  },
  {
    id: "reports", index: "٣", emoji: "📑", title: "التقارير",
    items: [
      { title: "تطبيق نظريات التعلم — Khan Academy Kids", subtitle: "د. رنا شاهيني", tag: "نظري" },
      { title: "الفصول المقلوبة والذكاء الاصطناعي", subtitle: "د. جميلة العمري", tag: "بحثي" },
      { title: "SCORM وصفحة ويب ديناميكية", subtitle: "د. نور الصبحي", meta: "كلاود + Netlify", tag: "ويب" },
    ],
  },
  {
    id: "presentations", index: "٤", emoji: "🎤", title: "العروض",
    items: [
      { title: "البحث المقارن السببي", subtitle: "د. لينا الفراري", meta: "كتيب + تقرير + عرض", tag: "كمي" },
      { title: "الأنماط التعليمية والألعاب التربوية", subtitle: "د. هناء المكي", tag: "ألعاب" },
      { title: "التعلم المصغر والاعتمادات الرقمية", subtitle: "د. جميلة العمري", tag: "حديث" },
    ],
  },
  {
    id: "workshops", index: "٥", emoji: "🛠️", title: "ورش العمل",
    items: [
      { title: "Unreal Engine لبيئات الواقع الافتراضي", subtitle: "د. جولين قطب", meta: "نظارات VR", tag: "غامرة" },
      { title: "التعلم التكيفي ومنصة DreamBox", subtitle: "د. نجلاء العمري", tag: "تكيفي" },
      { title: "تصميم الفيديو عبر Canva", subtitle: "د. أمجاد المجلد", tag: "تطبيقي" },
      { title: "إدارة بيئات التعلم الإلكتروني", subtitle: "د. نور الصبحي", tag: "إدارة" },
      { title: "أنظمة تقويم التعليم الإلكتروني", subtitle: "د. هوازن الحربي", tag: "تقويم" },
      { title: "مصادر التعلم الرقمي", subtitle: "د. أمجاد المجلد", tag: "مصادر" },
    ],
  },
];

const indexLinks = [
  { id: "solutions", index: "١", title: "حلول تعليمية" },
  ...otherSections.map((s) => ({ id: s.id, index: s.index, title: s.title })),
];

function Works() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />

      {/* HEADER */}
      <section className="px-6 md:px-14 pt-10 pb-16 relative">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-mauve/15 blur-3xl animate-float-rev pointer-events-none" />
        <div className="grid md:grid-cols-12 gap-10 items-end relative">
          <div className="md:col-span-8 reveal">
            <span className="chip">المشاريع والأعمال</span>
            <h1 className="display-ar text-5xl md:text-7xl text-deep mt-6">
              <span className="shimmer-text">أعمالي</span>
            </h1>
            <div className="hairline w-32 mt-6 origin-right draw-line" />
            <p className="text-plum text-lg leading-loose mt-8 max-w-2xl">
              مجموعة من المشاريع الأكاديمية والتطبيقية موزّعة على خمسة محاور:
              الحلول التعليمية، التصاميم، التقارير، العروض، وورش العمل.
            </p>
          </div>
          <div className="md:col-span-4 reveal reveal-delay-2">
            <div className="editorial-card p-6">
              <p className="text-mauve font-bold mb-4">فهرس الأقسام</p>
              <ul className="space-y-3">
                {indexLinks.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-deep hover:text-mauve transition-colors duration-300 group"
                    >
                      <span className="w-8 h-8 rounded-full bg-deep/10 flex items-center justify-center font-display text-deep group-hover:bg-deep group-hover:text-cream transition-all duration-300">
                        {s.index}
                      </span>
                      <span className="flex-1">{s.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        ←
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS — detailed */}
      <section id="solutions" className="px-6 md:px-14 scroll-mt-24 pb-24">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-end reveal">
          <div className="md:col-span-3 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
              ١
            </div>
            <span className="text-4xl">💡</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-ar text-4xl md:text-5xl text-deep">حلول تعليمية</h2>
            <p className="text-plum/80 mt-3 leading-loose max-w-3xl">
              ستة حلول تعليمية تطبيقية تجمع بين التقنية والمحتوى الدراسي، مصمَّمة لمقررات الماجستير
              مع توضيح الهدف، الفئة المستهدفة، الوحدة، الدرس، والبرنامج المستخدم.
            </p>
            <div className="hairline mt-6 origin-right draw-line" />
          </div>
        </div>

        <div className="space-y-12">
          {solutions.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={i}
                className="editorial-card overflow-hidden reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid md:grid-cols-12">
                  {/* Image */}
                  <div
                    className={`md:col-span-5 relative frame-deep min-h-[280px] md:min-h-full overflow-hidden ${
                      flip ? "md:order-2" : ""
                    }`}
                  >
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cream/10 animate-float" />
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cream/5 animate-float-rev" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={s.image}
                        alt={s.course}
                        loading="lazy"
                        className="max-h-[320px] w-auto object-contain rounded-lg shadow-2xl shadow-black/40 transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-5 right-5 flex gap-2">
                      <span className="text-xs bg-cream/25 text-cream px-3 py-1 rounded-full backdrop-blur-sm">
                        رقم {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs bg-cream text-deep px-3 py-1 rounded-full font-bold">
                        {s.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <span className="text-xs bg-deep/40 text-cream px-3 py-1 rounded-full backdrop-blur-sm border border-cream/20">
                        المنتج: {s.product}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
                    <p className="text-mauve text-sm font-bold tracking-wide">
                      {s.course}
                    </p>
                    <h3 className="display-ar text-2xl md:text-3xl text-deep mt-2 leading-snug">
                      {s.lesson !== "—" ? s.lesson : s.unit !== "—" ? s.unit : s.course}
                    </h3>
                    <p className="text-plum mt-1">{s.doctor}</p>

                    <div className="hairline my-5" />

                    <p className="text-deep/80 leading-loose text-[15px]">
                      {s.goal}
                    </p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6 text-sm">
                      <Detail label="الفئة المستهدفة" value={s.audience} />
                      <Detail label="الفصل الدراسي" value={s.semester} />
                      <Detail label="الوحدة / القسم" value={s.unit} />
                      <Detail label="موضوع الدرس" value={s.lesson} />
                      <Detail label="البرنامج" value={s.program} />
                      <Detail label="المنتج النهائي" value={s.product} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTIONS */}
      <div className="space-y-28 pb-10">
        {otherSections.map((s) => (
          <section key={s.id} id={s.id} className="px-6 md:px-14 scroll-mt-24">
            <div className="grid md:grid-cols-12 gap-8 mb-10 items-end reveal">
              <div className="md:col-span-3 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full frame-deep flex items-center justify-center text-cream font-display text-3xl animate-float">
                  {s.index}
                </div>
                <span className="text-4xl">{s.emoji}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="display-ar text-4xl md:text-5xl text-deep">
                  {s.title}
                </h2>
                <div className="hairline mt-6 origin-right draw-line" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.items.map((it, i) => (
                <article
                  key={i}
                  className="editorial-card overflow-hidden flex flex-col reveal"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="relative aspect-[4/3] frame-deep overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cream/10 animate-float" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-cream/5 animate-float-rev" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-cream">
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-cream/20 px-3 py-1 rounded-full">
                          {s.index} · {String(i + 1).padStart(2, "0")}
                        </span>
                        {it.tag && (
                          <span className="text-sm bg-cream/15 px-3 py-1 rounded-full">
                            {it.tag}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-5xl mb-2">{s.emoji}</p>
                        <p className="font-display text-2xl opacity-90">
                          {s.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-deep text-lg leading-snug">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-mauve text-sm">{it.subtitle}</p>
                    {it.meta && (
                      <p className="mt-2 text-deep/60 text-sm">{it.meta}</p>
                    )}
                    <div className="hairline mt-5" />
                    <div className="mt-4 flex items-center justify-between text-deep/70 text-sm">
                      <span>مشروع رقم {String(i + 1).padStart(2, "0")}</span>
                      <span className="font-bold transition-transform duration-300 hover:-translate-x-1">
                        عرض ←
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-mauve text-xs font-bold tracking-wide mb-1">{label}</p>
      <p className="text-deep">{value}</p>
    </div>
  );
}
