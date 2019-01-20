import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/base.css'
Vue.use(ElementUI);

import VueAxios from './lib/VueAxios';

Vue.use(VueAxios);

import router from './lib/router'
// d导入我的面包屑

import myBreadcrumb from './components/myBreadcrumb.vue';
Vue.component('myBreadcrumb',myBreadcrumb);

// 导入时间插件monment.js
import moment from 'moment';

Vue.filter('beautifulTime',(value)=>{
 return moment(value).format('YYYY年MM月DD日 hh:mm:ss');
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});