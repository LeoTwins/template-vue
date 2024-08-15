import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexPage from "@/features/categories/routes/IndexPage.vue";
import { PublicLayout } from "@/components/layout";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: PublicLayout
      }
    },
    {
      path: "/category",
      name: "category",
      component: IndexPage,
      meta: {
        layout: PublicLayout
      }
    }
  ]
});

export default router;
