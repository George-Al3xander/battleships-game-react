import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        port: 3000,
    },
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
});
