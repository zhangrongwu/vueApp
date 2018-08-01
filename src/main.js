// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(MintUI);
Vue.config.productionTip = false;

import toolBar from "./components/toolBar.vue";
import viewMain from "./components/viewMain.vue";
import aheader from "./components/Header.vue";
import bheader from "./components/HeaderB.vue";

import { Loadmore } from "mint-ui";
import { Actionsheet } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import { Lazyload } from "mint-ui";

import Axios from "axios";
Axios.defaults.baseURL = "http://eim.enn.cn/";

// 可添加默认数据信息
// 默认设置 范围广
Axios.defaults.headers = {
  accept: "defaults"
};

import { Indicator } from "mint-ui";

// 拦截器对每一次请求都有效
// 拦截器范围广 权利大，可覆盖默认的
Axios.interceptors.request.use(function(config) {
  console.log(config);
  console.log("请求启动");
  Indicator.open("数据加载中...");
  config.headers = {
    accept: "defaults"
  };
  //必须要return
  return config;
});
// 拦截器 拦截失败
Axios.interceptors.response.use(
  function(response) {
    console.log("请求结束");
    Indicator.close();
    return response;
  },
  function(err) {
    Indicator.close();
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误(400)";
          break;
        case 401:
          err.message = "未授权，请重新登录(401)";
          break;
        case 403:
          err.message = "拒绝访问(403)";
          break;
        case 404:
          err.message = "请求出错(404)";
          break;
        case 408:
          err.message = "请求超时(408)";
          break;
        case 500:
          err.message = "服务器错误(500)";
          break;
        case 501:
          err.message = "服务未实现(501)";
          break;
        case 502:
          err.message = "网络错误(502)";
          break;
        case 503:
          err.message = "服务不可用(503)";
          break;
        case 504:
          err.message = "网络超时(504)";
          break;
        case 505:
          err.message = "HTTP版本不受支持(505)";
          break;
        default:
          err.message = `连接出错(${err.response.status})!`;
      }
    } else {
      err.message = "连接服务器失败!";
    }
    message.error(err.message);
    return Promise.reject(err);
  }
);
Axios.interceptors.Vue.prototype.$axios = Axios;

Vue.component("toolBar", toolBar);
Vue.component("viewMain", viewMain);
Vue.component("aheader", aheader);
Vue.component("bheader", bheader);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// Vue.prototype.selected = "事业"
import defines from "./config";
Vue.prototype.defines = defines;

// Vue.use(Lazyload, merge({
//   loading: require('./assets/loading-spin.svg'),
//   attempt: 3
// }, config.lazyload));
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
