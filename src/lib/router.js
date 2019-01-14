import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
import user from '../components/user.vue'

import login from "../components/login.vue";
import main from "../components/main.vue";
const routes = [
  {
    path: "/login",
    component: login
  },
  {
    path: "/",
    component: main,
    children:[
      {
        path:'users',
        component:user
      }
    ]
  }
];
let router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path === "/login") {
    next();
  } else {
    let token = window.sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      Vue.prototype.$message.error("请先登录");
      next("/login");
    }
  }
});

export default router;
