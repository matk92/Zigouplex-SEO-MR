import path from "path"
import react from "@vitejs/plugin-react"
import viteCompression from "vite-plugin-compression"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})