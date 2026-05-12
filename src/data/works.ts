import sol1 from "@/assets/sol-1-genetics.png";
import sol2 from "@/assets/sol-2-chemistry.png";
import sol3 from "@/assets/sol-3-science4.png";
import sol4 from "@/assets/sol-4-math.png";
import sol5 from "@/assets/sol-5-ai-training.jpg";
import sol6 from "@/assets/sol-6-vertebrates.png";
import logoBlippar from "@/assets/logo-blippar.png";
import logoStoryline from "@/assets/logo-storyline.png";
import logoGeniallyMain from "@/assets/logo-genially.png";
import logoTakhayal from "@/assets/logo-takhayal.png";
import logoChatGPT from "@/assets/logo-chatgpt.png";
import logoCapCut from "@/assets/logo-capcut.png";
import logoWordPress from "@/assets/logo-wordpress.png";
import logoKahoot from "@/assets/logo-kahoot.png";

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
  programLogos?: string[];
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
    programLogos: [logoBlippar],
    links: [{ label: "فتح العرض", href: "/files/augmented-world.pptx" }],
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
    programLogos: [logoStoryline],
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
    programLogos: [logoGeniallyMain],
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
    programLogos: [logoTakhayal, logoChatGPT, logoCapCut],
    links: [
      { label: "اللعبة على Genially", href: "https://view.genially.com/68e6a011cfda366ec470362c" },
      { label: "فتح التكليف (PDF)", href: "/files/treasure-hunt.pdf" },
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
    programLogos: [logoWordPress],
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
    programLogos: [logoKahoot],
    links: [
      { label: "ملف كاهوت (PDF)", href: "/files/kahoot.pdf" },
      { label: "فيديو الشرح", href: "https://drive.google.com/file/d/1QdqB3ViGhhCn880W4V9Qqe5w7JFeY5iz/view" },
      { label: "تجربة الواقع الافتراضي VR", href: "https://drive.google.com/file/d/1TmhjHa_qkGkesSAz46r4ywGW8r7ymy2F/view" },
    ],
  },
];

export type Item = {
  title: string;
  subtitle: string;
  meta?: string;
  tag?: string;
  course?: string;
  goal?: string;
  audience?: string;
  program?: string;
  logos?: string[];
  image?: string;
  links?: { label: string; href: string }[];
};
export type Section = {
  slug: "designs" | "reports" | "presentations" | "workshops";
  title: string;
  index: string;
  emoji: string;
  description: string;
  items: Item[];
};

import logoPowerBI from "@/assets/logo-powerbi.png";
import logoCanva from "@/assets/logo-canva.png";
import logoGenially from "@/assets/logo-genially.png";
import logoPhotopea from "@/assets/logo-photopea.png";
import logoHeyzine from "@/assets/logo-heyzine.png";
import pres1 from "@/assets/pres-1-research.jpg";
import pres2 from "@/assets/pres-2-games.jpg";
import pres3 from "@/assets/pres-3-microlearning.jpg";

export const otherSections: Section[] = [
  {
    slug: "designs", index: "٢", emoji: "🎨", title: "التصاميم",
    description: "تصاميم بصرية وإنفوجرافيك تخدم المحتوى التعليمي وتُبسّط المفاهيم.",
    items: [
      {
        title: "تصور بيانات تفاعلي بـ Power BI",
        subtitle: "د. نجلاء العمري",
        course: "اقتصاديات التعليم الإلكتروني",
        goal: "تحويل بيانات خام إلى تصورات بصرية تفاعلية باستخدام Power BI، لتسهيل قراءة البيانات وتحليلها باستخدام مخططات بيانية متنوعة.",
        audience: "—",
        program: "Power BI",
        tag: "بيانات",
        logos: [logoPowerBI],
        links: [{ label: "مشاهدة الفيديو", href: "https://drive.google.com/file/d/1AjDpqb3PuQObq7HdztYDRR2lqzgWI0eF/view" }],
      },
      {
        title: "إنفوجرافيك التعلم المقلوب لذوي صعوبات التعلم",
        subtitle: "د. نجلاء العمري",
        course: "قضايا معاصرة",
        goal: "توعية المعلمين والمتخصصين التربويين بكيفية توظيف استراتيجية التعلم المقلوب لدعم طلاب صعوبات التعلم، من خلال تقديم المعلومات بصورة مرئية مبسطة وجذابة.",
        audience: "المعلمون والمتخصصون التربويون",
        program: "Canva",
        tag: "إنفوجرافيك",
        logos: [logoCanva],
        links: [{ label: "فتح التصميم", href: "https://drive.google.com/file/d/1LPWNegtEbY35Lfm-5DGSRFvEcGIqJCu2/view" }],
      },
      {
        title: "إنفوجرافيك الذكاء الاصطناعي في التعليم",
        subtitle: "د. نجلاء العمري",
        course: "قضايا معاصرة",
        goal: "تقديم نظرة شاملة ومبسطة حول مفهوم الذكاء الاصطناعي وتطبيقاته في المجال التعليمي.",
        audience: "المعلمون والمتخصصون التربويون",
        program: "Canva",
        tag: "ذكاء اصطناعي",
        logos: [logoCanva],
        links: [{ label: "فتح التصميم", href: "https://drive.google.com/file/d/1npIhjJwg5tlP3d1-CMKSmi6aPyrJAJGL/view" }],
      },
      {
        title: "المنظمات المتقدمة — نظرية أوزوبل",
        subtitle: "د. هناء المكي",
        course: "تطوير الألعاب التعليمية الرقمية",
        goal: "تطبيق نمط المنظمات المتقدمة وفق نظرية أوزوبل في مادة الرياضيات، من خلال تهيئة المتعلم ذهنياً قبل تعلم جدول الضرب بربط المعلومة الجديدة بمعرفته السابقة في الجمع المتكرر، بأسلوب بصري جذاب يناسب المرحلة الابتدائية.",
        audience: "طالبات الماجستير",
        program: "Genially",
        tag: "منظم متقدم",
        logos: [logoGenially],
        links: [{ label: "فتح التصميم (عملي فردي)", href: "https://drive.google.com/file/d/1npIhjJwg5tlP3d1-CMKSmi6aPyrJAJGL/view" }],
      },
      {
        title: "Raster vs Vector",
        subtitle: "د. أمجاد المجلد",
        course: "مصادر التعلم الرقمية",
        goal: "تعريف المتعلم بالفرق بين نوعي الصور الأساسيين (Raster & Vector) المستخدمة في برامج التصميم الإلكتروني، بأسلوب بصري مبسط يسهل الفهم والتمييز بينهما.",
        audience: "طالبات الماجستير",
        program: "Photopea + Heyzine Flipbook",
        tag: "تصميم رقمي",
        logos: [logoPhotopea, logoHeyzine],
        links: [
          { label: "ملف التصميم", href: "https://drive.google.com/file/d/1it6q1xRgjL8yMkvPBg6SMIFev6E4VXob/view" },
          { label: "الكتاب التفاعلي (Heyzine)", href: "https://heyzine.com/flip-book/af760ae142.html#page/1" },
          { label: "صورة التفاحة", href: "https://drive.google.com/file/d/1tvx8PybV_imWGDqWedi0E5K5OgXoilTe/view" },
        ],
      },
    ],
  },
  {
    slug: "reports", index: "٣", emoji: "📑", title: "التقارير",
    description: "تقارير أكاديمية وبحثية تُحلّل النظريات والممارسات التعليمية الحديثة بأسلوب علمي رصين.",
    items: [
      {
        title: "تطبيق نظريات التعلم الإلكتروني على Khan Academy Kids",
        subtitle: "د. رنا شاهيني",
        course: "الأصول النظرية للتعليم الإلكتروني",
        tag: "تقرير نظري",
        program: "PDF",
        links: [{ label: "فتح التقرير", href: "https://drive.google.com/file/d/1ubjMQcnU3IP18VSsuirI_MQfoexBef53/view" }],
      },
      {
        title: "Flipped Classrooms & AI",
        subtitle: "د. جميلة العمري",
        course: "قراءات باللغة الإنجليزية",
        tag: "تقرير بحثي",
        program: "Presentation",
        links: [
          { label: "فتح العرض", href: "https://docs.google.com/presentation/d/1wzJVPYUEPQi9NTVoLZDdhnsqAT0EnKFe/edit" },
        ],
      },
      {
        title: "SCORM وصفحة ويب ديناميكية",
        subtitle: "د. نور الصبحي",
        course: "إدارة بيئات التعلم الإلكتروني",
        tag: "ويب تفاعلي",
        program: "Cloud + Netlify Drop",
        links: [
          { label: "تحميل التقرير", href: "https://drive.google.com/file/d/1Zi4F9-8OH_W8-pGGyIJi8Wr75slm3-B9/view" },
          { label: "الصفحة الديناميكية", href: "https://fancy-tulumba-0c5b40.netlify.app/" },
        ],
      },
    ],
  },
  {
    slug: "presentations", index: "٤", emoji: "🎤", title: "العروض",
    description: "عروض تقديمية احترافية لمختلف الموضوعات الأكاديمية والتطبيقية.",
    items: [
      {
        title: "البحث المقارن السببي",
        subtitle: "د. لينا الفراري",
        course: "أساليب البحث الكمي",
        goal: "تعريف طالبات الدراسات العليا بالمفاهيم الأساسية للبحث المقارن السببي وتوضيح مفاتيحه.",
        audience: "طالبات الماجستير",
        program: "كتيب + تقرير + عرض",
        tag: "بحث كمي",
        image: pres1,
        links: [{ label: "فتح المجلد", href: "https://drive.google.com/drive/folders/1N0okW0_5_7RUghsOgXRpinx_L-pQ7hau" }],
      },
      {
        title: "الأنماط التعليمية والألعاب التربوية",
        subtitle: "د. هناء المكي",
        course: "تطوير الألعاب التعليمية الرقمية",
        goal: "تعريف طلاب ماجستير التعليم الإلكتروني بالأنماط التعليمية والألعاب التربوية وأبرز مفاهيمها النظرية.",
        audience: "طالبات الماجستير",
        program: "PowerPoint",
        tag: "ألعاب تربوية",
        image: pres2,
        links: [{ label: "فتح العرض", href: "https://docs.google.com/presentation/d/1Rp1m3PaF7gSbZOXHA8ir_sk0hwaI8s6x/edit" }],
      },
      {
        title: "التعلم المصغر والاعتمادات الرقمية",
        subtitle: "د. جميلة العمري",
        course: "قراءات باللغة الإنجليزية",
        goal: "تعريف المتلقين بمفهومي التعلم المصغر (Microlearning) والاعتمادات الرقمية (Digital Credentials)، وإبراز دورهما في تطوير العملية التعليمية الإلكترونية.",
        audience: "طالبات الماجستير",
        program: "PowerPoint + Genially",
        tag: "تعلم حديث",
        image: pres3,
        links: [
          { label: "فتح العرض", href: "https://docs.google.com/presentation/d/10skcSMl92kaRhcnE1gaVj201kyOWi2zf/edit" },
          { label: "النسخة التفاعلية (Genially)", href: "https://view.genially.com/69075e75588c92468bfd1a0d" },
        ],
      },
    ],
  },
  {
    slug: "workshops", index: "٥", emoji: "🛠️", title: "ورش العمل",
    description: "ورش تطبيقية تستكشف الأدوات والتقنيات الحديثة في التعليم الإلكتروني.",
    items: [
      {
        title: "Unreal Engine لبيئات الواقع الافتراضي",
        subtitle: "د. جولين قطب",
        course: "المعلم الرقمي وبيئات التعلم",
        goal: "تعريف المشاركين ببرنامج Unreal Engine وإمكانياته في بناء البيئات الافتراضية التعليمية، وتمكينهم من تجربة بيئة افتراضية تخيلية باستخدام نظارات الواقع الافتراضي.",
        audience: "طالبات الماجستير",
        program: "Unreal Engine + VR",
        tag: "واقع افتراضي",
        links: [
          { label: "العرض الرئيسي", href: "https://docs.google.com/presentation/d/1KxO8OZMR61fGCz0hWmDA8Pjifw26cdVA/edit" },
          { label: "جزئية التخيل", href: "https://docs.google.com/presentation/d/1r8ikUH802be50Ge4lkOIh6kIlhcQk_HX/edit" },
          { label: "نظارات VR", href: "https://docs.google.com/presentation/d/1r8ikUH802be50Ge4lkOIh6kIlhcQk_HX/edit?slide=id.p1#slide=id.p1" },
        ],
      },
      {
        title: "التعلم التكيفي ومنصة DreamBox",
        subtitle: "د. نجلاء العمري",
        course: "قضايا معاصرة",
        goal: "تعريف المشاركين بمفهوم التعلم التكيفي في العصر الرقمي، وتمكينهم من استكشاف أبرز تقنياته وأساليبه الحديثة من خلال التعرف على منصات تكيفية فعلية كـ Dreambox وكيفية توظيفها في العملية التعليمية.",
        audience: "طالبات الماجستير",
        program: "DreamBox",
        tag: "تعلم تكيفي",
        links: [
          { label: "العرض التقديمي", href: "https://docs.google.com/presentation/d/18fiaUPkHPeY_DC_BY_HYJVKZLXTOTIbG/edit?slide=id.p1#slide=id.p1" },
          { label: "ملف إضافي", href: "https://drive.google.com/file/d/11qTZGlqs23v0e35NKPJ5Ir4L6CIn81H5/view" },
        ],
      },
      {
        title: "تصميم الفيديو عبر Canva",
        subtitle: "د. أمجاد المجلد",
        course: "مصادر التعليم الرقمية",
        goal: "تعريف المشاركين بمنصة Canva وتنمية مهاراتهم في تصميم الفيديو من خلال الشرح التطبيقي لأدواتها وإمكانياتها.",
        audience: "طالبات الماجستير",
        program: "Canva",
        tag: "تصميم فيديو",
        links: [
          { label: "العرض والفيديوهات", href: "https://drive.google.com/drive/folders/18lA5SbBEqGhCUeQ7MSZoVWYlKgTHeypm" },
        ],
      },
      {
        title: "إدارة بيئات التعلم الإلكتروني",
        subtitle: "د. نور الصبحي",
        course: "إدارة بيئات التعلم الإلكتروني",
        audience: "طالبات الماجستير",
        tag: "إدارة",
      },
      {
        title: "أنظمة تقويم التعليم الإلكتروني",
        subtitle: "د. هوازن الحربي",
        course: "أنظمة تقويم التعليم الإلكتروني",
        audience: "طالبات الماجستير",
        tag: "تقويم",
      },
      {
        title: "مصادر التعلم الرقمي",
        subtitle: "د. أمجاد المجلد",
        course: "مصادر التعلم الرقمي",
        audience: "طالبات الماجستير",
        tag: "مصادر",
      },
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
