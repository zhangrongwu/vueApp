<template>
  <div>
    新闻详情
  </div>
</template>

<script>
  import connect from '../connect.js'
  export default {
    data() {
      return {}
    },
    methods: {
      login:function () {
        connect.$emit('type', '测试全局数据')
      }
    },
    created() {
        // 数据初始化 获取路由参数 
        // $route （数据） $router （功能函数）
        alert(this.$route.params.name)
        alert(this.$route.query.name)
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
