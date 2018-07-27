<template>
  <div class="page-swipe">
    轮播图
    <Swipe :auto="4000">
      <swipe-item class="slide1">1</swipe-item>
      <swipe-item class="slide3">3</swipe-item>
      <swipe-item class="slide5">5</swipe-item>
    </Swipe>
  </div>
</template>

<script>
  export default {
    name: "Swipe"
  }
</script>

<style scoped>
  .page-swipe {

  }
  .slide1 {
    background-color: aqua;
    color: azure;
  }

  .slide3 {
    background-color: black;
    color: aliceblue;
  }

  .slide5 {
    background-color: brown;
    color: aquamarine;
  }
</style>
