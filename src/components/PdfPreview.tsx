import { useEffect, useRef, useState } from "react";

import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

type PdfPreviewProps = {
  src: string;
  title: string;
};

export default function PdfPreview({ src, title }: PdfPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [scale, setScale] = useState(1.15);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setPdfDoc(null);
    setPageNumber(1);
    setPageCount(0);

    const loadPdf = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
        const loadingTask = pdfjs.getDocument(src);
        const loadedPdf = await loadingTask.promise;
        if (cancelled) {
          loadedPdf.destroy();
          return;
        }
        setPdfDoc(loadedPdf);
        setPageCount(loadedPdf.numPages);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    loadPdf();

    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [src]);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let cancelled = false;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const renderPage = async () => {
      try {
        renderTaskRef.current?.cancel();
        const page = await pdfDoc.getPage(pageNumber);
        if (cancelled) return;
        const viewport = page.getViewport({ scale });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const renderTask = page.render({
          canvasContext: context,
          viewport,
          transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
        });
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (error) {
        if (!cancelled && !(error instanceof Error && error.name === "RenderingCancelledException")) {
          setStatus("error");
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [pdfDoc, pageNumber, scale]);

  const canGoBack = pageNumber > 1;
  const canGoForward = pageNumber < pageCount;

  if (status === "loading") {
    return <div className="min-h-[60vh] grid place-items-center text-deep/70 text-sm font-bold">جاري تحميل المستند…</div>;
  }

  if (status === "error") {
    return (
      <div className="min-h-[40vh] grid place-items-center p-8 text-center">
        <div className="space-y-4">
          <p className="text-deep font-bold">تعذّر عرض المستند داخل الصفحة.</p>
          <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-deep px-5 py-2 text-sm font-bold text-cream">
            فتح الملف مباشرة ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-deep/10 bg-deep/5">
        <div className="flex items-center gap-2 text-[11px] font-bold text-deep/70">
          <span>{title}</span>
          <span className="text-deep/40">—</span>
          <span>
            صفحة {pageNumber} من {pageCount}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setPageNumber((p) => Math.max(1, p - 1))} disabled={!canGoBack} className="h-8 w-8 rounded-full bg-deep/10 text-deep disabled:opacity-30" aria-label="الصفحة السابقة">
            ‹
          </button>
          <button type="button" onClick={() => setPageNumber((p) => Math.min(pageCount, p + 1))} disabled={!canGoForward} className="h-8 w-8 rounded-full bg-deep/10 text-deep disabled:opacity-30" aria-label="الصفحة التالية">
            ›
          </button>
          <button type="button" onClick={() => setScale((s) => Math.max(0.8, Number((s - 0.15).toFixed(2))))} className="h-8 w-8 rounded-full bg-deep/10 text-deep" aria-label="تصغير">
            −
          </button>
          <button type="button" onClick={() => setScale((s) => Math.min(1.8, Number((s + 0.15).toFixed(2))))} className="h-8 w-8 rounded-full bg-deep/10 text-deep" aria-label="تكبير">
            +
          </button>
        </div>
      </div>
      <div className="max-h-[72vh] overflow-auto bg-deep/5 p-4">
        <canvas ref={canvasRef} className="mx-auto max-w-none shadow-md" />
      </div>
    </div>
  );
}