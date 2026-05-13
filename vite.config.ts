import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
    pages: [
      { path: "/" },
      { path: "/works" },
      { path: "/works/designs" },
      { path: "/works/presentations" },
      { path: "/works/reports" },
      { path: "/works/workshops" },
    ],
  },
});
