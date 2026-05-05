export default function SiteFooter() {
  return (
    <footer className="mt-32 px-6 md:px-14 pb-10">
      <div className="hairline mb-8" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-mono-en text-deep/60">Curated Portfolio</p>
          <p className="font-serif-en italic text-3xl md:text-4xl text-deep mt-2">
            Alaa Hashem Alzahrani
          </p>
          <p className="text-plum mt-1 text-sm">
            ألاء هاشم الزهراني — مصممة تعليمية · ماجستير تقنيات التعليم
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-mono-en text-deep/60">© 2026 — All rights reserved</p>
          <p className="font-serif-en italic text-deep mt-1 text-lg">
            Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
