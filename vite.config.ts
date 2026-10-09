import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

/**
 * GitHub Pages serves 404.html for unknown paths. Copying the built index.html
 * lets wouter render its own "not found" route instead of GitHub's default page.
 */
function githubPagesFallback(): Plugin {
  let outDir = "dist";
  return {
    name: "github-pages-404-fallback",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexFile = resolve(outDir, "index.html");
      if (existsSync(indexFile)) copyFileSync(indexFile, resolve(outDir, "404.html"));
    },
  };
}

export default defineConfig({
  // Relative base => every asset is emitted as ./assets/..., so the build works
  // at https://username.github.io/repository/ as well as at a domain root.
  base: "./",
  plugins: [react(), tailwindcss(), githubPagesFallback()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
