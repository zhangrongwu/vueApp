<template>
  <div>
    <aheader></aheader>
    新闻详情的id为{{id}}
  </div>
</template>

<script>
  import connect from '../connect.js'
  export default {
    data() {
      return {
          id: ''
      }
    },
    methods: {
      login:function () {
        connect.$emit('type', '测试全局数据')
      }
    },
    created() {
        // 数据初始化 获取路由参数 
        // $route （数据） $router （功能函数）
        this.id = this.$route.query.id
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
