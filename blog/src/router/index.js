import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/article:id",
    component: () => import("@/views/article.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/sole",
    component: () => import("@/views/sole.vue"),
    children: [
      {
        path: "detailedsole:name", //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        component: () => import("@/components/detailedSole.vue"),
      },
    ],
  },
  {
    path: "/technology",
    component: () => import("@/views/technology.vue"),
  },
  {
    path: "/advance ",
    component: () => import("@/views/advance.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
