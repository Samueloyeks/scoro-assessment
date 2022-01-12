import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {}
  },
  server: {
    host: 'localhost.scoro.com',
    port: 8080,
},
  envPrefix: "APP_"
});
