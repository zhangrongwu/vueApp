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
