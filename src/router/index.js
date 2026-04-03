
import Layout from "@/MainLayout/Layout.vue";
import About from "@/Pages/About.vue";
import Blog from "@/Pages/Blog.vue";
import BlogDetails from "@/Pages/BlogDetails.vue";
import Home from "@/Pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "blog",
        name: "blog",
        component: Blog,
      },
      {
        path: "blog/:id",
        name: "blogDetails",
        component: BlogDetails,
      },
      {
        path: "about",
        name: "about",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
