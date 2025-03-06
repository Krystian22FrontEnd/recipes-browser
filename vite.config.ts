import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from '@svgr/rollup';

// https://vite.dev/config/
export default defineConfig({
  base: "/search-recipe/",
  plugins: [react(), svgr()],
  server: {
    open: true,
  },
});
