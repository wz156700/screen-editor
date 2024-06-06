import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/td-visual-editor/" : "",
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag === "iconpark-icon",
                },
            },
        }),
        DefineOptions()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
