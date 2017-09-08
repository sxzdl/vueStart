// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store'
import App from './App';
import axios from  'axios';
import router from './router/index.js';
import FastClick from 'fastclick';

Vue.config.productionTip = false;
const instance = axios.create();
instance.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};
Vue.prototype.$http = instance;
FastClick.attach(document.body);

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
  router,
  render: function(createElement) { return createElement(App)},
  /*template: '<App/>',
  components: { App }*/
});
// console.log(app);

