<template>
  <div class="header">
    <div class="header-fixed">
      <mt-header fixed v-bind:title='title'>
        <router-link to="/" slot="right">
          <mt-button>关闭</mt-button>
        </router-link>
      </mt-header>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderB",
    props: ['title'],
    methods: {
      close() {
        // 根据浏览器记录返回上一层
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .header {
    width: auto;
    height: 44px;
  }

  .header-fixed {
    width: auto;
    height: 44px;
  }
</style>
