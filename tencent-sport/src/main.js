// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import axios from '@/lib/axios'

// 样式重置 flex引入
import 'lib-flexible/flexible.js';
import './assets/styles/reset.css';
import './assets/styles/iconfont/iconfont.css';

import './assets/styles/common.scss';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
