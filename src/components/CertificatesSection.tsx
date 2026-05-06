import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import cert1 from "@/assets/certs/cert1.jpg";
import cert2 from "@/assets/certs/cert2.jpg";
import cert3 from "@/assets/certs/cert3.jpg";
import cert4 from "@/assets/certs/cert4.jpg";
import cert5 from "@/assets/certs/cert5.jpg";
import cert6 from "@/assets/certs/cert6.jpg";
import cert7 from "@/assets/certs/cert7.jpg";
import cert8 from "@/assets/certs/cert8.jpg";
import cert9 from "@/assets/certs/cert9.jpg";
import cert10 from "@/assets/certs/cert10.jpg";
import cert11 from "@/assets/certs/cert11.jpg";
import cert12 from "@/assets/certs/cert12.jpg";
import cert13 from "@/assets/certs/cert13.jpg";
import cert14 from "@/assets/certs/cert14.jpg";
import certSatr from "@/assets/certs/cert_satr.jpg";
import cert15 from "@/assets/certs/cert15.jpg";
import cert16 from "@/assets/certs/cert16.jpg";
import cert17 from "@/assets/certs/cert17.jpg";
import cert18 from "@/assets/certs/cert18.jpg";
import cert19 from "@/assets/certs/cert19.jpg";
import cert20 from "@/assets/certs/cert20.jpg";

const certificates = [
  {
    src: cert1,
    title: "اختبار الضغط لحوكمة البيانات بالذكاء الاصطناعي",
    issuer: "جامعة الملك عبدالعزيز — الإدارة العامة لشؤون المكتبات",
    date: "يناير 2026",
  },
  {
    src: cert15,
    title: "دورة مختبر الابتكار الجامعي",
    issuer: "جامعة الملك عبدالعزيز — الإدارة العامة لشؤون المكتبات",
    date: "يناير 2026",
  },
  {
    src: cert16,
    title: "محاضرة: أسس حوكمة البيانات وأهم الأنظمة المتعلقة بها",
    issuer: "ملتقى المعلوماتية الثامن عشر — KAU",
    date: "يناير 2026",
  },
  {
    src: cert17,
    title: "محاضرة: حوكمة البيانات كتمكين استراتيجي في القطاع التعليمي",
    issuer: "ملتقى المعلوماتية الثامن عشر — KAU",
    date: "يناير 2026",
  },
  {
    src: cert18,
    title: "محاضرة: حوكمة وجودة البيانات في مشاريع الذكاء الاصطناعي — من المخاطر إلى القيمة",
    issuer: "ملتقى المعلوماتية الثامن عشر — KAU",
    date: "يناير 2026",
  },
  {
    src: cert19,
    title: "محاضرة: لماذا تتعثر مشاريع الذكاء الاصطناعي؟ البيانات كأصل استراتيجي مفقود",
    issuer: "ملتقى المعلوماتية الثامن عشر — KAU",
    date: "يناير 2026",
  },
  {
    src: cert20,
    title: "مشاريع ريادة الأعمال الرقمية",
    issuer: "كلية التربية — جامعة الملك عبدالعزيز",
    date: "نوفمبر 2025",
  },
  {
    src: cert2,
    title: "تجربة المستخدم — User Experience",
    issuer: "معهد الإدارة العامة (إثرائي)",
    date: "أبريل 2026",
  },
  {
    src: certSatr,
    title: "UX/UI — تصميم تجربة وواجهة المستخدم",
    issuer: "أكاديمية طويق — منصة سطر للتعليم الإلكتروني",
    date: "مايو 2026",
  },
  {
    src: cert11,
    title: "الإتيكيت الرقمي الأكاديمي في عصر الذكاء الاصطناعي",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "أبريل 2026",
  },
  {
    src: cert10,
    title: "التحليل الإحصائي التطبيقي للبيانات البحثية باستخدام JASP",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "أبريل 2026",
  },
  {
    src: cert6,
    title: "التدريس والإشراف القائم على المشاريع البحثية",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "أبريل 2026",
  },
  {
    src: cert9,
    title: "من الأدوات الذكية إلى وكلاء الذكاء الاصطناعي: رحلة نحو الأتمتة والابتكار",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "نوفمبر 2025",
  },
  {
    src: cert8,
    title: "التعلم الآلي: الفرص والتحديات والاتجاهات المستقبلية",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "نوفمبر 2025",
  },
  {
    src: cert5,
    title: "من الصراع إلى التعاون: مسار نحو السلام في بيئة العمل",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "نوفمبر 2025",
  },
  {
    src: cert13,
    title: "أخلاقيات استخدام الذكاء الاصطناعي في التعليم",
    issuer: "منصة أعناب لتدريب المعلمين",
    date: "أكتوبر 2025",
  },
  {
    src: cert3,
    title: "رحلة البيانات: تحليل فعّال باستخدام Mega Stat",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "أكتوبر 2025",
  },
  {
    src: cert4,
    title: "بناء وإدارة ملفات الترشيح لجوائز التميز العالمية",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "أكتوبر 2025",
  },
  {
    src: cert7,
    title: "من البيانات إلى النتائج: إدارة البيانات والتحليل الإحصائي",
    issuer: "مركز تطوير التعليم الجامعي — KAU",
    date: "سبتمبر 2025",
  },
  {
    src: cert14,
    title: "الذكاء الاصطناعي في التعلم الإلكتروني",
    issuer: "الجمعية العلمية السعودية للتعليم عن بُعد",
    date: "أغسطس 2025",
  },
  {
    src: cert12,
    title: "تصميم الأنشطة التعليمية التفاعلية باستخدام Educandy Play",
    issuer: "كلية التربية — جامعة الملك عبدالعزيز",
    date: "فبراير 2024",
  },
];

export default function CertificatesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-14 py-28 relative">
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />

      <div className="text-center mb-14 reveal relative">
        <span className="chip">الشهادات</span>
        <h2 className="display-ar text-4xl md:text-6xl text-deep mt-6">
          شهادات <span className="shimmer-text">واعتمادات</span>
        </h2>
        <div className="hairline w-32 mx-auto mt-6" />
        <p className="text-plum mt-6 max-w-xl mx-auto leading-loose">
          مجموعة من الدورات والبرامج التدريبية التي أكملتها — اضغطي على أي شهادة لعرضها بحجم أكبر.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto relative">
        {certificates.map((c, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className={`reveal reveal-delay-${(i % 4) + 1} group relative text-right rounded-[1.5rem] p-2.5 bg-gradient-to-br from-mauve/30 via-deep/15 to-plum/25 shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-1`}
          >
            <div className="relative rounded-[1.15rem] overflow-hidden bg-cream ring-1 ring-deep/15 group-hover:ring-mauve/40 transition-all duration-500">
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-deep via-mauve to-plum z-10" />

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <img
                src={c.src}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* zoom badge */}
              <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-cream/95 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-deep">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 11L14 14M7 5V9M5 7H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div className="p-5">
              <p className="text-mauve text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                {c.date}
              </p>
              <h3 className="font-display text-lg text-deep leading-snug mb-2 line-clamp-2 group-hover:text-plum transition-colors">
                {c.title}
              </h3>
              <p className="text-plum/80 text-sm leading-relaxed line-clamp-1">{c.issuer}</p>
            </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-cream border-deep/20 overflow-hidden">
          {openIndex !== null && (
            <div className="flex flex-col">
              <img
                src={certificates[openIndex].src}
                alt={certificates[openIndex].title}
                className="w-full h-auto object-contain bg-white"
              />
              <div className="p-5 border-t border-deep/10 text-right">
                <p className="text-mauve text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                  {certificates[openIndex].date}
                </p>
                <h3 className="font-display text-xl text-deep">
                  {certificates[openIndex].title}
                </h3>
                <p className="text-plum/80 text-sm mt-1">{certificates[openIndex].issuer}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
