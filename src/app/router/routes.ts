import { RouteRecordRaw } from "vue-router";

import HomePage from "../pages/HomePage.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
];
