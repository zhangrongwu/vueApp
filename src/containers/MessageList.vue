<template>
  <div class="mint-loadmore">
    列表
    <Loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-load="allLoaded" ref="loadmore">
      <ul>
        <li v-for="(item, index) in list" class="mint-loadmore-list" :key="item">
         {{index}} {{item}}
        </li>
      </ul>
    </Loadmore>
  </div>
</template>

<script>
  export default {
    name: "MessageList",

    data() {
      return {
        list: ['张荣武', '兆赫', '王安东', '陈全胜', '林传彬', '马总正', '大马哥', '赵赫b', '赵赫c']
      }
    },

    methods: {
      loadTop: function (id) {
        console.log('下拉刷新')
        this.$broadcast('onTopLoaded', id);
      },
      loadBottom: function () {
        console.log('上拉加载')
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$broadcast('onBottomLoaded', id);
      },
      allLoaded: function () {
        console.log('加载全部')
      }
    }
  }
</script>

<style scoped>
  .mint-loadmore {
    width: 100%;
    height: 100%;
    background-color: bisque;
  }
  .mint-loadmore-list {
    text-align: left;
    color: blue;
    height: 30px;
  }

</style>
