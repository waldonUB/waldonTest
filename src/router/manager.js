import Vue from 'vue'
import Router from 'vue-router'
import TagManage from '@/pages/tagManage/TagManage'
import CustomerList from '@/pages/customerList/CustomerList'

Vue.use(Router)

export default [
  {
    path: '',
    component: CustomerList
  },
  {
    path: 'customerList',
    component: CustomerList
  },
  {
    path: 'tagManage',
    component: TagManage
  }
]
