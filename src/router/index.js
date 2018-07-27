import Vue from 'vue'
import Router from 'vue-router'

import main from '@/containers/Main'
import login from '@/containers/Login'
import messageList from '@/containers/MessageList'
import appTabbar from '@/containers/AppTabbar'
import swipe from '@/containers/Swipe'
import layzLoad from '@/containers/LayzLoad'

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
      path: '/messageList',
      name: 'messageList',
      component: messageList
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
      component: appTabbar
    }
  ]
})
