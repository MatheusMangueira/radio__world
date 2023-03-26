import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      stream: "stream-browserify",
    },
  },

  base: "./",
});
