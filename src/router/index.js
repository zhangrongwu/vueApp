import Vue from 'vue'
import Router from 'vue-router'

import main from '@/containers/Main'
import login from '@/containers/Login'
import appTabbar from '@/containers/AppTabbar'
import newsDetail from '@/containers/NewsDetail'
import swipe from '@/containers/Swipe'
import layzLoad from '@/containers/LayzLoad'

import NotFound from '@/containers/notFound'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: swipe
    },
    {
      path: '/layzLoad',
      name: 'layzLoad',
      component: layzLoad
    },
    {
      path: '/appTabbar',
      name: 'appTabbar',
      children: [
       
      ],
      component: appTabbar
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      // router重定向
      path: '/re',
      redirect: {name: 'appTabbar'},
      component: appTabbar
    },
    {
      // router 404页面
      path:'*',
      name:'*',
      component: NotFound
    }
  ]
})
