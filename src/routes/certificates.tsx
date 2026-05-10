import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CertificatesSection from "@/components/CertificatesSection";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/certificates")({
  component: CertificatesPage,
  head: () => ({
    meta: [
      { title: "الشهادات | ألاء الزهراني" },
      { name: "description", content: "شهادات واعتمادات ألاء الزهراني في تقنيات التعليم والذكاء الاصطناعي." },
    ],
  }),
});

function CertificatesPage() {
  useReveal();
  return (
    <div className="min-h-screen paper overflow-hidden">
      <SiteNav />
      <CertificatesSection />
      <SiteFooter />
    </div>
  );
}
