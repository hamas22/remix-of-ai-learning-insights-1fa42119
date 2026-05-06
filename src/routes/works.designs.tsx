import { createFileRoute } from "@tanstack/react-router";
import CategoryPage from "@/components/CategoryPage";
import { otherSections } from "@/data/works";

const section = otherSections.find((s) => s.slug === "designs")!;

export const Route = createFileRoute("/works/designs")({
  component: () => <CategoryPage section={section} />,
  head: () => ({
    meta: [
      { title: "التصاميم | الأعمال" },
      { name: "description", content: section.description },
    ],
  }),
});
