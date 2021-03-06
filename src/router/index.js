import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home/Home'
import PostTest from '@test/PostTest'
import manager from '@/router/manager' // 子路由

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: manager
    },
    {
      path: '/postTest',
      name: 'PostTest',
      component: PostTest
    }
  ]
})
