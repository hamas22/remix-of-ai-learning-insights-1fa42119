export default function SiteFooter() {
  return (
    <footer className="mt-32 px-6 md:px-14 pb-10">
      <div className="hairline mb-8" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-center md:text-right">
        <div>
          <p className="font-display text-3xl md:text-4xl text-deep">
            ألاء هاشم الزهراني
          </p>
          <p className="text-plum mt-2 text-sm">
            مصممة تعليمية · ماجستير تقنيات التعليم
          </p>
        </div>
        <p className="text-mauve text-sm">© 2026 — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
