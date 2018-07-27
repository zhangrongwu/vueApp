<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">新闻</mt-tab-item>
      <mt-tab-item id="2">咨询</mt-tab-item>
      <mt-tab-item id="3">问候</mt-tab-item>
      <mt-tab-item id="4">创客</mt-tab-item>
      <mt-tab-item id="5">专题</mt-tab-item>
      <mt-tab-item id="6">传记</mt-tab-item>
      <mt-tab-item id="7">招聘</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <newsBanner></newsBanner>
        <newsList></newsList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 5" :title="n + '咨询'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 2" :title="n + '问候'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 2" :title="n + '创客'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <mt-cell v-for="n in 2" :title="n + '传记'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <mt-cell v-for="n in 2" :title="n + '招聘'" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="7">
        <mt-cell v-for="n in 2" :title="n + '我的新闻'" :key="n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import newsBanner from '../components/NewsBanner'
  import newsList from '../components/NewsList'
  export default {
    name: "NewsSelectedBar",
    data() {
      return {
        selected: '1'
      }
    },
    components: {
      'newsBanner': newsBanner,
      'newsList': newsList
    }
  }
</script>

<style scoped>

</style>
