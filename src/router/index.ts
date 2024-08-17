import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexPage from "@/features/categories/routes/IndexPage.vue";
import { PublicLayout } from "@/components/layout";
import TodoListPage from "@/features/todo/list/TodoListPage.vue";

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
    },
    {
      path: "/todo",
      name: "todo",
      component: TodoListPage,
      meta: {
        layout: PublicLayout
      }
    }
  ]
});

export default router;
