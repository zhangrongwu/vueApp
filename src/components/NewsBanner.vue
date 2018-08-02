<template>
  <div class="banner">
    <mt-swipe>
      <mt-swipe-item class="slide1" v-for="(value, index) in data" :key="index">
        <a :href="value.url">
        <img class="slide1-img" :src="value.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "NewsBanner",
    data() {
      return {
        data: [
        {
            img: 'http://static.dongmaihulian.com/img/2018/2018-07/138ae699-857a-11e8-84ef-00163e0898f4.jpeg',
            url: 'http://www.baidu.com'
        },
        {
            img: 'http://static.dongmaihulian.com/img/2018/2018-07/7e9f33d7-899c-11e8-84ef-00163e0898f4.jpeg',
            url: 'http://www.jianshu.com'
        }
        ]
      }
    }
  }
</script>

<style scoped>
 .banner {
    width: 100%;
    height: 200px;
  }
 img {
    width: 100%;
    height: 100%;
    background-repeat: round
    /* max-height: 180px; */
  }
 
  .slide1 {
    color: azure;
    width: 100%;
    height: 100%
  }

  .slide3 {
    background-color: black;
    width: 100%;
    max-height: 100%;
  }
</style>
