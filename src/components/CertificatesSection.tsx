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

type Cert = { src: string; title: string };

const groups: { title: string; items: Cert[] }[] = [
  {
    title: "الذكاء الاصطناعي",
    items: [
      { src: cert9, title: "من الأدوات الذكية إلى وكلاء الذكاء الاصطناعي" },
      { src: cert8, title: "التعلم الآلي: الفرص والتحديات" },
      { src: cert13, title: "أخلاقيات استخدام الذكاء الاصطناعي في التعليم" },
      { src: cert14, title: "الذكاء الاصطناعي في التعلم الإلكتروني" },
    ],
  },
  {
    title: "تحليل البيانات و الإحصاء",
    items: [
      { src: cert10, title: "التحليل الإحصائي التطبيقي باستخدام JASP" },
      { src: cert3, title: "رحلة البيانات: تحليل فعّال باستخدام Mega Stat" },
      { src: cert7, title: "من البيانات إلى النتائج: إدارة البيانات والتحليل الإحصائي" },
    ],
  },
  {
    title: "حوكمة البيانات",
    items: [
      { src: cert1, title: "اختبار الضغط لحوكمة البيانات بالذكاء الاصطناعي" },
      { src: cert16, title: "أسس حوكمة البيانات وأهم الأنظمة المتعلقة بها" },
      { src: cert17, title: "حوكمة البيانات كتمكين استراتيجي في القطاع التعليمي" },
      { src: cert18, title: "حوكمة وجودة البيانات في مشاريع الذكاء الاصطناعي" },
      { src: cert19, title: "لماذا تتعثر مشاريع الذكاء الاصطناعي؟" },
    ],
  },
  {
    title: "تقنيات التعلم و التصميم",
    items: [
      { src: cert2, title: "تجربة المستخدم — User Experience" },
      { src: certSatr, title: "UX/UI — تصميم تجربة وواجهة المستخدم" },
      { src: cert12, title: "تصميم الأنشطة التعليمية باستخدام Educandy Play" },
    ],
  },
  {
    title: "التطوير المهني",
    items: [
      { src: cert15, title: "دورة مختبر الابتكار الجامعي" },
      { src: cert20, title: "مشاريع ريادة الأعمال الرقمية" },
      { src: cert11, title: "الإتيكيت الرقمي الأكاديمي في عصر الذكاء الاصطناعي" },
      { src: cert6, title: "التدريس والإشراف القائم على المشاريع البحثية" },
      { src: cert5, title: "من الصراع إلى التعاون: مسار نحو السلام في بيئة العمل" },
      { src: cert4, title: "بناء وإدارة ملفات الترشيح لجوائز التميز العالمية" },
    ],
  },
];

const allCerts: Cert[] = groups.flatMap((g) => g.items);

export default function CertificatesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-14 py-28 relative">
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-mauve/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-soft/20 blur-3xl pointer-events-none" />

      <div className="text-center mb-16 reveal relative">
        <span className="chip">الشهادات</span>
        <h2 className="display-ar text-4xl md:text-6xl text-deep mt-6">
          شهادات <span className="shimmer-text">واعتمادات</span>
        </h2>
        <div className="hairline w-32 mx-auto mt-6" />
        <p className="text-plum mt-6 max-w-xl mx-auto leading-loose">
          مصنّفة حسب المجال — اضغطي على أي شهادة لعرضها بحجم أكبر.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-14 relative">
        {groups.map((g, gi) => (
          <div
            key={gi}
            className="reveal flex flex-col md:flex-row-reverse md:items-start gap-6 md:gap-10"
          >
            {/* Side label */}
            <div className="md:w-56 shrink-0 flex md:justify-start justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-l from-deep to-plum text-cream shadow-lg">
                <span className="w-2 h-2 rounded-full bg-mauve" />
                <h3 className="font-display text-lg whitespace-nowrap">{g.title}</h3>
              </div>
            </div>

            {/* Certificates row */}
            <div className="flex-1 flex flex-wrap gap-5 justify-center md:justify-start">
              {g.items.map((c) => {
                const globalIdx = allCerts.findIndex((x) => x.src === c.src);
                return (
                  <button
                    key={c.src}
                    onClick={() => setOpenIndex(globalIdx)}
                    title={c.title}
                    className="group relative w-40 sm:w-44 md:w-48 aspect-[4/3] rounded-2xl overflow-hidden bg-white ring-1 ring-deep/15 hover:ring-mauve/50 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <img
                      src={c.src}
                      alt={c.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 w-9 h-9 rounded-full bg-cream/95 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-deep">
                        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M11 11L14 14M7 5V9M5 7H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-cream border-deep/20 overflow-hidden">
          {openIndex !== null && (
            <div className="flex flex-col">
              <img
                src={allCerts[openIndex].src}
                alt={allCerts[openIndex].title}
                className="w-full h-auto object-contain bg-white"
              />
              <div className="p-4 border-t border-deep/10 text-right">
                <h3 className="font-display text-lg text-deep">{allCerts[openIndex].title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
