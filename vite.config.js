import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve( "./src"),
      "assets": path.resolve( "./public/assets"),
    },
  },
  server: {
    port: 5173, // Frontend dev server
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/media': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5173, // For production preview
  },
});
