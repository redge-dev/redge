import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import brifui from "@brifui/postcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [brifui]
    }
  },
  plugins: [reactRouter(), tsconfigPaths()]
});
