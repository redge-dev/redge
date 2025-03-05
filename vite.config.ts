import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import brifui from "@brifui/postcss";

export default defineConfig({
  ssr: {
    noExternal: [/^@brifui\/.*$/]
  },
  css: {
    postcss: {
      plugins: [brifui]
    }
  },
  plugins: [reactRouter(), tsconfigPaths()]
});
