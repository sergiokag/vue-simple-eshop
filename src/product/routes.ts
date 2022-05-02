import { RouteRecordRaw } from "vue-router";

import ProductPage from "./pages/ProductPage.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: '/product',
        name: 'Product',
        component: ProductPage
    },
];
