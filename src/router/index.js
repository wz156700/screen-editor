import { createRouter, createWebHashHistory } from "vue-router";
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/editor/:id",
            name: "editor",
            component: () => import("../views/editor-main/index.vue"),
        },
        {
            path: "/preview/:id",
            name: "preview",
            component: () => import("../views/preview/index.vue"),
        },
        {
            path: "",
            component: () => import("../views/project/index.vue"),
        },
        {
            path: "/download",
            component: () => import("../views/download/index.vue"),
        },
    ],
});
