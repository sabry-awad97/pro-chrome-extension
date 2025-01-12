import { crx, ManifestV3Export } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import manifest from "./manifest.json" with { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), crx({ manifest: manifest as ManifestV3Export })],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
