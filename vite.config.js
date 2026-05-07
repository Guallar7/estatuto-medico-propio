import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/estatuto-medico-propio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        anteproyecto: resolve(rootDir, "anteproyecto.html"),
        reivindicaciones: resolve(rootDir, "reivindicaciones.html"),
        noticias: resolve(rootDir, "noticias.html"),
        novedades: resolve(rootDir, "novedades.html"),
        fuentes: resolve(rootDir, "fuentes.html"),
        argumentario: resolve(rootDir, "argumentario.html"),
        mir: resolve(rootDir, "mir.html")
      }
    }
  }
});
