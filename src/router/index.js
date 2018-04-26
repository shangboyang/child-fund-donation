import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Container from '@/components/Container'
import Users from '@/components/Users'
import FundList from '@/components/FundList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/main',
      name: 'Container',
      component: Container,
      // Children Component 会被渲染在 Container 的 <router-view> 中
      children: [
        {
          path: 'users',
          component: Users
        }, {
          path: 'funds',
          component: FundList
        }
      ]
    }
  ]
})
