import sol1 from "@/assets/sol-1-genetics.png";
import sol2 from "@/assets/sol-2-chemistry.png";
import sol3 from "@/assets/sol-3-science4.png";
import sol4 from "@/assets/sol-4-math.png";
import sol5 from "@/assets/sol-5-ai-training.jpg";
import sol6 from "@/assets/sol-6-vertebrates.png";

export type Solution = {
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

export const solutions: Solution[] = [
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
    product: "PowerPoint",
    links: [{ label: "تحميل العرض", href: "/files/augmented-world.pptx" }],
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
    product: "Google Drive",
    links: [
      { label: "فتح مجلد المشروع", href: "https://drive.google.com/drive/folders/1P234wFXT2PGwxXnzWQgEK-Vd0Gz_xXF4" },
    ],
  },
  {
    course: "تطوير الألعاب التعليمية الرقمية",
    doctor: "د. هناء مكي",
    goal: "مراجعة وحدة كاملة في مادة العلوم من خلال لعبة Monopoly تعليمية مصمَّمة يدوياً، تضمّنت مراحل متعددة وألعاباً تفاعلية داخلها — بهدف تحويل المراجعة إلى تجربة ممتعة تُعزز التذكر والاستيعاب بأسلوب تنافسي.",
    audience: "طلاب الصف الرابع الابتدائي",
    semester: "الفصل الدراسي الأول",
    unit: "مراجعة الفصل الثالث",
    lesson: "—",
    program: "Monopoly + Genially",
    tag: "لعبة تعليمية",
    image: sol3,
    product: "ملفات + لعبة تفاعلية",
    links: [
      { label: "مجلد المشروع", href: "https://drive.google.com/drive/folders/17_AFV5rQ-oiOSGU2wo7lomy78LLCLluN" },
      { label: "اللعبة على Genially", href: "https://view.genially.com/6923567869801ead9bac5108" },
      { label: "اللعبة العملية", href: "https://view.genially.com/69219f72e113e654ee309961" },
      { label: "لعبة إضافية", href: "https://view.genially.com/69276a3266860f187993dfb7" },
    ],
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
    product: "لعبة تفاعلية + PDF",
    links: [
      { label: "اللعبة على Genially", href: "https://view.genially.com/68e6a011cfda366ec470362c" },
      { label: "تحميل التكليف (PDF)", href: "/files/treasure-hunt.pdf" },
    ],
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
    product: "ملفات PDF",
    links: [
      { label: "ملف التأسيس", href: "/files/taasees.pdf" },
      { label: "تقرير معلم بلس", href: "/files/moalem-plus-report.pdf" },
      { label: "الإنفوجرافيك", href: "https://drive.google.com/file/d/15dqHMUmSf2DArJMpph2wt192UZBS241p/view" },
    ],
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
    product: "PDF + فيديو",
    links: [
      { label: "ملف كاهوت (PDF)", href: "/files/kahoot.pdf" },
      { label: "فيديو الشرح", href: "https://drive.google.com/file/d/1QdqB3ViGhhCn880W4V9Qqe5w7JFeY5iz/view" },
      { label: "تجربة الواقع الافتراضي VR", href: "https://drive.google.com/file/d/1TmhjHa_qkGkesSAz46r4ywGW8r7ymy2F/view" },
    ],
  },
];

export type Item = { title: string; subtitle: string; meta?: string; tag?: string };
export type Section = {
  slug: "designs" | "reports" | "presentations" | "workshops";
  title: string;
  index: string;
  emoji: string;
  description: string;
  items: Item[];
};

export const otherSections: Section[] = [
  {
    slug: "designs", index: "٢", emoji: "🎨", title: "التصاميم",
    description: "تصاميم بصرية وإنفوجرافيك تخدم المحتوى التعليمي وتُبسّط المفاهيم.",
    items: [
      { title: "تصور بيانات بـ Power BI", subtitle: "د. نجلاء العمري", meta: "اقتصاديات التعليم", tag: "بيانات" },
      { title: "إنفوجرافيك التعلم المقلوب", subtitle: "د. نجلاء العمري", meta: "صعوبات التعلم", tag: "كانفا" },
      { title: "إنفوجرافيك الذكاء الاصطناعي في التعليم", subtitle: "د. نجلاء العمري", tag: "كانفا" },
      { title: "المنظمات المتقدمة — أوزوبل", subtitle: "د. هناء المكي", meta: "جدول الضرب", tag: "جينيالي" },
      { title: "Raster vs Vector", subtitle: "د. أمجاد المجلد", tag: "فوتوبيا" },
    ],
  },
  {
    slug: "reports", index: "٣", emoji: "📑", title: "التقارير",
    description: "تقارير أكاديمية وبحثية تُحلّل النظريات والممارسات التعليمية الحديثة.",
    items: [
      { title: "تطبيق نظريات التعلم — Khan Academy Kids", subtitle: "د. رنا شاهيني", tag: "نظري" },
      { title: "الفصول المقلوبة والذكاء الاصطناعي", subtitle: "د. جميلة العمري", tag: "بحثي" },
      { title: "SCORM وصفحة ويب ديناميكية", subtitle: "د. نور الصبحي", meta: "كلاود + Netlify", tag: "ويب" },
    ],
  },
  {
    slug: "presentations", index: "٤", emoji: "🎤", title: "العروض",
    description: "عروض تقديمية احترافية لمختلف الموضوعات الأكاديمية والتطبيقية.",
    items: [
      { title: "البحث المقارن السببي", subtitle: "د. لينا الفراري", meta: "كتيب + تقرير + عرض", tag: "كمي" },
      { title: "الأنماط التعليمية والألعاب التربوية", subtitle: "د. هناء المكي", tag: "ألعاب" },
      { title: "التعلم المصغر والاعتمادات الرقمية", subtitle: "د. جميلة العمري", tag: "حديث" },
    ],
  },
  {
    slug: "workshops", index: "٥", emoji: "🛠️", title: "ورش العمل",
    description: "ورش تطبيقية تستكشف الأدوات والتقنيات الحديثة في التعليم الإلكتروني.",
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

export const categoryHub = [
  { slug: "solutions", index: "١", emoji: "💡", title: "حلول تعليمية", description: "ستة حلول تطبيقية لمقررات الماجستير.", count: solutions.length },
  ...otherSections.map((s) => ({
    slug: s.slug, index: s.index, emoji: s.emoji, title: s.title,
    description: s.description, count: s.items.length,
  })),
];
