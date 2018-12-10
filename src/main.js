// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

import {Popup, Swipe, SwipeItem } from 'mint-ui';
import $modal from './base/modal/index';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '@/assets/css/normal.css'
// import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.prototype.$modal = $modal;
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
