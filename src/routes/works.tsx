import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/works")({
  component: () => <Outlet />,
  head: () => ({
    meta: [
      { title: "الأعمال | ألاء الزهراني" },
      { name: "description", content: "أعمال ومشاريع تعليمية: حلول، تصاميم، تقارير، عروض وورش عمل." },
    ],
  }),
});
