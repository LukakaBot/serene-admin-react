import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { vitePluginFakeServer } from "vite-plugin-fake-server";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const viteEnv = loadEnv(mode, process.cwd());
  const { VITE_APP_MOCK } = viteEnv;

  return {
    plugins: [
      react(),
      tailwindcss(),
      AutoImport({
        imports: ["react", "react-router"],
        dts: "src/types/auto-import.d.ts",
        include: [/\.[tj]sx?$/, /\.md$/],
      }),
      vitePluginFakeServer({
        enableDev: VITE_APP_MOCK === "true",
        include: "mock",
        logger: !isProd,
        infixName: false,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
