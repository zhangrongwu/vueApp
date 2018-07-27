<template>
  <div class="page-tabbar">
    <!--header位置-->
    <bheader v-bind:title="selected"></bheader>
    <!--每一个控制器可自定义-->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="事业">
        <!--自定义组件结合-->
        <mt-cell v-for="n in 9" :title="n + '事业任务'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="资讯">
        <!--自定义组件进行结合成页面-->
        <div>
          <newsSelectedBar></newsSelectedBar>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="工具">
        <div>
          这是一个工具页面，具体自己定制
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 100" :title="n + '我的页面cell'" :key="n"/>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="事业">
        <img slot="icon" src="../assets/100x100.png">
        事业
      </mt-tab-item>
      <mt-tab-item id="资讯">
        <img slot="icon" src="../assets/100x100.png">
        资讯
      </mt-tab-item>
      <mt-tab-item id="工具">
        <img slot="icon" src="../assets/100x100.png">
        工具
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import newsSelectedBar from './NewsSelectedBar'
  export default {
    name: "AppTabbar",
    data() {
      return {
        selected: '事业'
      }
    },
    components: {
      'newsSelectedBar': newsSelectedBar
    }
  }
</script>

<style scoped>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

</style>
