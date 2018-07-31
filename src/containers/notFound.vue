<template>
  <div>
    <p>
      404页面丢失...
    </p>
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
p{
  font-size: 25px;
}
</style>
