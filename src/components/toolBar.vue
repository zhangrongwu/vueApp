<template>
  <div class="main">
    <div class="container">
      <div class="newBtnDiv">
        <button class="newBtn" @click="createNew">创建</button>
      </div>
      <div class="search">
        <input class="searchInput" placeholder="搜索应用">
      </div>
      <div class="title">
        应用首页
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      createNew: function () {

      }
    }
  }
</script>

<style scoped>
  .main {
    margin-top: 10px;
    height: 50px;
    background-color: beige;
    box-shadow: 0 2px 3px 0 #cccccc;
  }

  .container {
    width: auto;
    height: 50px;
    margin: 0;
    background-color: beige;
  }

  .newBtnDiv {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }

  .newBtn {
    width: 60px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #dadadb;
  }

  .search {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }

  .searchInput {
    width: 290px;
    height: 30px;
    padding-left: 9px;
    color: #a4a4a4;
    border: 1px solid #dadadb;
    border-radius: 6px;
    outline: none;
    font-size: 14px;
  }
  .title {
    float: left;
    height: 30px;
    margin-left: 10px;
    margin-top: 15px;
  }
</style>
