import jsconfigPaths from "vite-jsconfig-paths";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  test: {
    // some paths to the files that are test files
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      app: path.resolve(__dirname, "./src/app/"),
    },
  },
});
