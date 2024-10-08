/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), react(), svgr()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.ts",
    },
});
