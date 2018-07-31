<template>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item :id="item.id" v-for="item in navList" :key="item.id">
        {{item.text}}
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="item.id" v-for="item in navList" :key="item.id">
        <div v-if="item.id == 1">
          <newsBanner></newsBanner>
          <newsList></newsList>
        </div>
        <mt-cell v-if="item.id == 2" v-for="n in 5" :title="n + '咨询'" :key="n"/>
        <mt-cell v-if="item.id == 3" v-for="n in 2" :title="n + '问候'" :key="n"/>
        <mt-cell v-if="item.id == 4" v-for="n in 2" :title="n + '创客'" :key="n"/>
        <mt-cell v-if="item.id == 5" v-for="n in 2" :title="n + '传记'" :key="n"/>
        <mt-cell v-if="item.id == 6" v-for="n in 2" :title="n + '招聘'" :key="n"/>
        <mt-cell v-if="item.id == 7" v-for="n in 2" :title="n + '我的新闻'" :key="n"/>
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
        selected: this.defines.newsBarSelected,
        navList: [
          {
            id: "1",
            text: '新闻'
          },
          {
            id: "2",
            text: '咨询'
          },
          {
            id: "3",
            text: '问候'
          },
          {
            id: "4",
            text: '创客'
          },
          {
            id: "5",
            text: '传记'
          },
          {
            id: "6",
            text: '招聘'
          },
          {
            id: "7",
            text: '我的新闻'
          }
        ]
      }
    },
    components: {
      'newsBanner': newsBanner,
      'newsList': newsList
    },
    watch: {
      selected: function (newValue, oldValue) {
        this.defines.setnewsBarSelected = newValue
      }
    }
  }
</script>

<style scoped>

</style>
