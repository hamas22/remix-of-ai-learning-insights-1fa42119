import { createFileRoute } from "@tanstack/react-router";
import CategoryPage from "@/components/CategoryPage";
import { otherSections } from "@/data/works";

const section = otherSections.find((s) => s.slug === "presentations")!;

export const Route = createFileRoute("/works/presentations")({
  component: () => <CategoryPage section={section} />,
  head: () => ({
    meta: [
      { title: "العروض | الأعمال" },
      { name: "description", content: section.description },
    ],
  }),
});
