import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexPage from "@/features/categories/routes/IndexPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/category",
      name: "category",
      component: IndexPage
    }
  ]
});

export default router;
