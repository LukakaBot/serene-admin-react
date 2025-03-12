import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { vitePluginFakeServer } from "vite-plugin-fake-server";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [
      react(),
      UnoCSS(),
      AutoImport({
        imports: ["react", "react-router"],
        dts: "src/types/auto-import.d.ts",
        include: [/\.[tj]sx?$/, /\.md$/],
      }),
      vitePluginFakeServer({
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
