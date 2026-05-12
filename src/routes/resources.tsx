import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  component: () => <Outlet />,
  head: () => ({
    meta: [
      { title: "المصادر | ألاء الزهراني" },
      { name: "description", content: "أرشيف مصادر تعليمية متخصصة." },
    ],
  }),
});
