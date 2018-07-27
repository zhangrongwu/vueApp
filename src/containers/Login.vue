<template>
  <div>
    <button @click="login">登陆</button>
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
    }
  }
</script>

<style scoped>

</style>
