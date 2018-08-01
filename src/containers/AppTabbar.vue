<template>
  <div class="page-tabbar">

    <!--header位置-->
    <bheader v-bind:title="selected"></bheader>
    <div class="page-wrap">
      <!--每一个控制器可自定义-->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item :id="item.id" v-for="item in tabList" :key="item.id">
          <!--自定义组件结合-->
          <mt-cell v-for="n in 90" :title="n + '事业任务'" :key="n" v-if="item.id == '事业'" />
              <news-selected-bar v-if="item.id == '资讯'"></news-selected-bar>
          <resource-vue v-if="item.id == '资源'"></resource-vue>
          <mt-cell v-for="n in 100" :title="n + '我的页面cell'" :key="n" v-if="item.id == '我的'" />
        </mt-tab-container-item>       
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item :id="list.id" v-for="list in tabList" :key="list.id">
        <img slot="icon" :src="list.img">
        <span>{{list.id}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import newsSelectedBar from "./NewsSelectedBar";
import resourceVue from "./Resource"
export default {
  name: "AppTabbar",
  created() {},
  data() {
    return {
      selected: this.defines.tabBarItemSelected,

      tabList: [
        {
          id: "事业",
          img: "static/100x100.png"
          // img: require('../assets/100x100.png')
        },
        {
          id: "资讯",
          img: "static/100x100.png"
        },
        {
          id: "资源",
          img: "static/100x100.png"
        },
        {
          id: "我的",
          img: "static/100x100.png"
        }
      ]
    };
  },
  components: {
    newsSelectedBar: newsSelectedBar,
    resourceVue: resourceVue
  },
  watch: {
    selected: function(newValue, oldValue) {
      // alert(this.tabBarItemSelected)
      this.defines.settabBarItemSelected(newValue);
      console.log("newValue, oldValue", newValue, oldValue);
    }
  }
};
</script>

<style scoped>
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
