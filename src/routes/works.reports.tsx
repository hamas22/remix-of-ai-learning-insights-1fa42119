import { createFileRoute } from "@tanstack/react-router";
import CategoryPage from "@/components/CategoryPage";
import { otherSections } from "@/data/works";

const section = otherSections.find((s) => s.slug === "reports")!;

export const Route = createFileRoute("/works/reports")({
  component: () => <CategoryPage section={section} />,
  head: () => ({
    meta: [
      { title: "التقارير | الأعمال" },
      { name: "description", content: section.description },
    ],
  }),
});
