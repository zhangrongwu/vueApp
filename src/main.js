// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

import toolBar from './components/toolBar.vue'
import viewMain from './components/viewMain.vue'
import aheader from './components/Header.vue'
import bheader from './components/HeaderB.vue'


import {Loadmore} from 'mint-ui'
import {Actionsheet} from 'mint-ui'
import {Swipe, SwipeItem} from 'mint-ui'
import {Lazyload} from 'mint-ui'

import Axios from 'axios'
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api'; 

// 可添加默认数据信息
// 默认设置 范围广
Axios.defaults.headers = {
  accept: 'defaults'
}

// 拦截器对每一次请求都有效
// 拦截器范围广 权利大，可覆盖默认的
Axios.interceptors.request.use(function(config) {
  console.log(config);
  config.headers = {
    accept:'defaults'
  }
  //必须要return
  return config;
})
Vue.prototype.$axios = Axios;



Vue.component('toolBar', toolBar);
Vue.component('viewMain', viewMain);
Vue.component('aheader', aheader);
Vue.component('bheader', bheader);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// Vue.prototype.selected = "事业"
import defines from './config'
Vue.prototype.defines = defines

// Vue.use(Lazyload, merge({
//   loading: require('./assets/loading-spin.svg'),
//   attempt: 3
// }, config.lazyload));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
