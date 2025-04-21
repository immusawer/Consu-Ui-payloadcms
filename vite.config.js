import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./public/assets"),
    },
  },
  server: {
    port: 5173, // Explicitly set frontend port
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/media': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    } 
  },
  preview: {
    port: 5173 // For production preview
  }
});