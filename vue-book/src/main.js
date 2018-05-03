// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from "vue-awesome-swiper";
import store from "./store";
/*import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img4.imgtn.bdimg.com/it/u=971725090,2859205920&fm=200&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
});*/
Vue.use(Swiper);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
