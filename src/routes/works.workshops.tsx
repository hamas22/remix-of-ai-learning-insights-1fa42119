import { createFileRoute } from "@tanstack/react-router";
import CategoryPage from "@/components/CategoryPage";
import { otherSections } from "@/data/works";

const section = otherSections.find((s) => s.slug === "workshops")!;

export const Route = createFileRoute("/works/workshops")({
  component: () => <CategoryPage section={section} />,
  head: () => ({
    meta: [
      { title: "ورش العمل | الأعمال" },
      { name: "description", content: section.description },
    ],
  }),
});
