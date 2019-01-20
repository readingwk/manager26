import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
import user from '../components/user.vue'

import login from "../components/login.vue";
import main from "../components/main.vue";
import roles from "../components/roles.vue";
import rights from "../components/rights.vue";
import goods from "../components/goods.vue";
import params from "../components/params.vue";
import reports from "../components/reports.vue";
import categories from "../components/categories.vue";
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
      },
      {
        path:'roles',
        component:roles
      },
      {
        path:'rights',
        component:rights
      },
      {
        path:'goods',
        component:goods
      },
      {
        path:'params',
        component:params
      },
      {
        path:'reports',
        component:reports
      },
      {
        path:'categories',
        component:categories
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
