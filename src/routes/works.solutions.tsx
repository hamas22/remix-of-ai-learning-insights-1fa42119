import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/works/solutions")({
  component: () => <Outlet />,
});
