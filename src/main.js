import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/index'
import 'normalize.css'
import './css/iconfont/iconfont.js'
import axios from 'axios'
import yxPost from '../config/yxAxios'

axios.defaults.baseURL = 'api/' // 目前只有开发环境，先不配置
Vue.prototype.$http = axios
Vue.prototype.$yxPost = yxPost
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App></App>'
})
