import { defineConfig } from "@brifui/theme";

export default defineConfig({
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./packages/components/src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@brifui/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extends: {
      tokens: {
        fonts: {
          heading: {
            value: "var(--font-funnel-display)"
          },
          body: {
            value: "var(--font-geist-sans)"
          }
        }
      }
    }
  }
});
