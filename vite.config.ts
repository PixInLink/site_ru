import vue from "@vitejs/plugin-vue";
import { execSync } from "node:child_process";
import { defineConfig, type Plugin } from "vite";

let gitHash = "dev";
try { gitHash = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim(); } catch {}

function cacheBusterPlugin(): Plugin {
  return {
    name: "cache-buster",
    transformIndexHtml(html) {
      return html.replace(/overrides\.css/g, `overrides.css?v=${gitHash}`);
    },
  };
}

function htmlLangPlugin(): Plugin {
  return {
    name: "html-lang",
    transformIndexHtml(html) {
      const locale = process.env.VITE_LOCALE || "ru";
      return html.replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);
    },
  };
}

export default defineConfig({
  plugins: [vue(), cacheBusterPlugin(), htmlLangPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
      },
    },
  },
});
