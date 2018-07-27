<template>
    <div class="header">
      <div class="header-variation">
        <mt-header title="这是一个正常的导航栏">
          <router-link to="/" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
          <router-link to="/" slot="right">
            <mt-button>关闭</mt-button>
          </router-link>
        </mt-header>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header {
    width: auto;
    height: 44px;
  }
  .header-variation {
    width: auto;
    height: 44px;
  }
</style>
