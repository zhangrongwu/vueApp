<template>
  <div class="banner">
    <mt-swipe>
      <mt-swipe-item class="slide1">
        <img class="slide1-img" src="http://static.dongmaihulian.com/img/2018/2018-07/138ae699-857a-11e8-84ef-00163e0898f4.jpeg">
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <img src="http://static.dongmaihulian.com/img/2018/2018-07/7e9f33d7-899c-11e8-84ef-00163e0898f4.jpeg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "NewsBanner"
  }
</script>

<style scoped>
 img {
    width: 100%;
    height: 100%;
  }
  .banner {
    width: 100%;
    height: 300px;
  }
  .slide1 {
    color: azure;
    width: 100%;
    height: 350px;
  }

  .slide3 {
    background-color: black;
    width: 100%;
    height: 350px;
  }
  .slide1-img {
    width: 100%;
    height: 350px;
  }
</style>
