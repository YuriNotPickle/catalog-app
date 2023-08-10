import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../view/Homepage.vue";
import BlogDetail from "../view/BlogDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: BlogDetail,
      props: true,
    },
  ],
});

export default router;
