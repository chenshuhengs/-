import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./request/http.js";

import Toasted from "vue-toasted";
Vue.use(Toasted);

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
Vue.use(ViewUI);

// 返回顶部
import header from "@/plugin/header.js";
Vue.prototype.topFunction = header;

// 粒子背景
import CanvasNest from "canvas-nest-class.js";
new CanvasNest({
  el: document.querySelector("canvas"), // 默认自动添加 <canvas> 到 <body>
  opacity: 0.1, // 最低透明度，默认 0.1
  color: "0,0,0", // 线条颜色，默认 "0,0,0"
  count: 100, // 生成点的数量，默认 99
  zIndex: -1, // 自动添加的 <canvas> z-index样式属性，默认 -1
});

Vue.config.productionTip = false;
import "@/assets/css/index.less";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
