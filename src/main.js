import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes';
import store from './store/store'
import axios from 'axios'

Vue.use(VueRouter);
axios.defaults.baseURL = 'https://shoppingcart-f56c4.firebaseio.com/';

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
