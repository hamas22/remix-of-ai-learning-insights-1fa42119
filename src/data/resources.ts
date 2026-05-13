export type Res = {
  topic: string;
  type: string;
  note?: string;
  pdf?: string;
  image?: string;
  youtube?: string;
  link?: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  index: string;
  emoji: string;
  blurb: string;
  items: Res[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "etrack",
    index: "١",
    emoji: "📊",
    title: "أنظمة تقويم التعليم الإلكتروني",
    blurb: "مصادر حول تحليلات التعلم وأنظمة التقويم الإلكتروني وقياس أثر التعلّم.",
    items: [
      { topic: "Learning Analytics Explained in 4 Minutes", type: "مقطع يوتيوب", youtube: "ypplDa2B-QA" },
      { topic: "استخدام تحليلات التعلم عبر نظام إدارة التعلم الإلكتروني (Blackboard) في تحسين ممارسات العملية التعليمية بمؤسسات التعليم الجامعي", type: "ورقة علمية", pdf: "https://drive.google.com/file/d/1FIsoVjwC5DhgNF63aovsAu-PCNljEcH-/view?usp=drivesdk" },
      { topic: "تصميمان لرسائل الرجع القائمة على تحليلات التعلم في نظام إدارة التعلم الإلكتروني \"موودل\" وأثرهما على التحصيل ومهارات إدارة الذات والدافعية للتعلم لدى الطالبات المعلمات وتفضيلاتهن ومقترحاتهن", type: "ورقة علمية", pdf: "https://tesr.journals.ekb.eg/article_252024_2f4fdabb92c4f9e6450e022ef012d863.pdf" },
      { topic: "تحليلات التعلم وإعداد التقارير في التعليم الإلكتروني", type: "إنفوجرافيك", pdf: "https://drive.google.com/file/d/1I8YrCCsYXNcRBzP4yGvgNyrDVofvkU75/view?usp=drivesdk" },
      { topic: "تقويم الشبكات الاجتماعية", type: "تقرير", note: "من إنجازي", pdf: "https://drive.google.com/file/d/11r0R_NgLMXUHxigy4T21qx1LbkYT11r1/view?usp=drive_link" },
    ],
  },
  {
    id: "ai",
    index: "٢",
    emoji: "🤖",
    title: "الذكاء الاصطناعي",
    blurb: "كتب وأوراق ووثائق رسمية حول الذكاء الاصطناعي وأخلاقياته في التعليم.",
    items: [
      { topic: "كفايات استخدام الذكاء الاصطناعي في التعليم الرقمي", type: "وثيقة مؤسسية رسمية", pdf: "https://drive.google.com/file/d/1AO7Be25e1PTU7rLMprfZOO_eAqN72Spx/view" },
      { topic: "المبادئ التوجيهية للمصنفات المولدة عبر الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية", pdf: "https://drive.google.com/file/d/1I28LwYHaHHrfRReOmIjV7mQUobgt25jE/view" },
      { topic: "دليل إرشادات الذكاء الاصطناعي التوليدي للتعليم العام", type: "وثيقة مؤسسية", pdf: "https://drive.google.com/file/d/14OOx1aDYheGewtM9vaU5r-ePyMnxDkMW/view" },
      { topic: "تمكين البحث العلمي بالذكاء الاصطناعي", type: "ورقة علمية", pdf: "https://drive.google.com/file/d/1U1QugqGCNa6zVFO5mvsvwfVy1jVyECi2/view" },
      { topic: "مبادئ أخلاقيات الذكاء الاصطناعي", type: "وثيقة مؤسسية رسمية", pdf: "https://drive.google.com/file/d/1w-UJpqUAb84pASbRazo3MtNwGtIuCgB3/view" },
      { topic: "كيف نتلافى الأخلاقيات السلبية للذكاء الاصطناعي في التعليم", type: "مجلة", pdf: "https://drive.google.com/file/d/12TqY8wI5Ixef_pXBoOHHYw5mvtFUu0Wf/view" },
      { topic: "أخلاقيات الذكاء الاصطناعي", type: "كتاب", pdf: "https://drive.google.com/file/d/1X3pTiPS_UvgNJhElfay-tI7MtcDz8NmZ/view" },
      { topic: "استراتيجيات التعلم الرقمي بأدوات الذكاء الاصطناعي", type: "كتاب", pdf: "https://drive.google.com/file/d/19CPDvk2C_a0xS9jztN4yqMwZh-ac5MrH/view" },
      { topic: "فعالية ساعة الذكاء الاصطناعي في التعليم", type: "دورة (يوتيوب)", youtube: "qOyZIOMbLV4" },
      { topic: "أدوات الذكاء الاصطناعي للمعلمين والإداريين وذوي الاحتياجات", type: "كورس (يوتيوب)", youtube: "pszZFJ7_lF0" },
    ],
  },
  {
    id: "ip",
    index: "٣",
    emoji: "©",
    title: "الملكية الفكرية",
    blurb: "وثائق ومراجع حول حقوق الملكية الفكرية في البيئة التعليمية الرقمية.",
    items: [
      { topic: "الملكية الفكرية", type: "فيديو يوتيوب", youtube: "pDiOsUxORlo" },
      { topic: "المذكرة التوضيحية لنظام الملكية الفكرية", type: "وثيقة مؤسسية رسمية", pdf: "https://istitlaa.ncc.gov.sa/ar/trade/saip/iplaw/Documents/%D8%A7%D9%84%D9%85%D8%B0%D9%83%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%B6%D9%8A%D8%AD%D9%8A%D8%A9%20%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9%20%D8%A7%D9%84%D9%81%D9%83%D8%B1%D9%8A%D8%A9.pdf" },
      { topic: "الملكية الفكرية", type: "إنفوجرافيك", pdf: "https://drive.google.com/file/d/1AiasLralT8CsotFPvIbUSjZ-gXlKvSrt/view" },
      { topic: "الملكية الفكرية", type: "كتاب", pdf: "https://drive.google.com/file/d/1aDw2p1hHq09p-BkfCt51UbrY0ub285Ht/view" },
      { topic: "الملكية الفكرية", type: "ورقة علمية", pdf: "https://drive.google.com/file/d/1IMtL6Hmn_haOfK3Bz0xrCKc8oCc00GMd/view" },
      { topic: "الملكية الفكرية", type: "موقع ديناميكي", note: "من إنجازي", link: "https://silver-babka-cc2201.netlify.app/" },
    ],
  },
  {
    id: "eval",
    index: "٤",
    emoji: "✅",
    title: "تقويم البرامج التعليمية",
    blurb: "معايير ومقاييس تقويم جودة البرامج والمحتوى التعليمي الإلكتروني.",
    items: [
      { topic: "معايير التميّز للتعليم الإلكتروني — هيئة تقويم التعليم", type: "وثيقة مؤسسية موثوقة", link: "https://nelc.gov.sa/regulations-and-standards/elearning-excellence-standards" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "فيديو يوتيوب", youtube: "sJSoAqnEKFc" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "ورقة علمية", pdf: "https://drive.google.com/file/d/1Aw7Mr7w9bmLi6zSRV7dq3jegM4SgNjLQ/view" },
      { topic: "تقويم البرامج التعليمية الإلكترونية", type: "إنفوجرافيك", note: "من إنجازي", pdf: "https://drive.google.com/file/d/1dK5G8vaUHRq3JxKuGHNbWBMsatpwcFu-/view" },
    ],
  },
];

export const getResourceGroup = (id: string) =>
  resourceGroups.find((g) => g.id === id);

export const getResourceIcon = (type: string): string => {
  if (type.includes("يوتيوب") || type.includes("فيديو") || type.includes("دورة") || type.includes("كورس")) return "▶";
  if (type.includes("كتاب")) return "📕";
  if (type.includes("ورقة")) return "📄";
  if (type.includes("إنفوجرافيك")) return "🎨";
  if (type.includes("وثيقة")) return "📜";
  if (type.includes("مجلة")) return "📰";
  if (type.includes("موقع")) return "🌐";
  return "•";
};
