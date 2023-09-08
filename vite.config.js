import { defineConfig } from "vite";
import pug from "vite-plugin-pug";

export default defineConfig({
  base: "/",
  plugins: [
    pug({
      localImports: true,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "/src/pages/index.html",
        about: "/src/pages/about.html",
      },
    },
  },
});
