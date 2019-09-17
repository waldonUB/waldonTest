import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/index'
import 'normalize.css'
import './css/iconfont/iconfont.js'
import axios from 'axios'

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App></App>'
})
