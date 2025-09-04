import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  }, resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
    },
  },
});
