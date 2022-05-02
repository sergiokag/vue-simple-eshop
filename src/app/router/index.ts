import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// routes
import { routes as homeRoutes } from "./routes";
import { routes as productRoutes } from "@/product/routes"

const routes: RouteRecordRaw[] = [
    ...homeRoutes,
    ...productRoutes,
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
