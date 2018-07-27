<template>
  <div class="sidebar">
    <div class="middle_left_menu">
      <ul v-for="(menu, index) in menus" class="menu">
        <img :src=menu.img alt="" v-if="!menu.active">
        <img :src=menu.imgs alt="" v-if="menu.active">
        <li :class="{'active' : menu.active}" @click="select(menu, index)">{{menu.menu}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import index from "../router/index";

  export default {
    data() {
      return {
        menus: [{
          menu: '应用管理',
          active: true,
          img: require('../assets/icon1.png'),
          imgs: require('../assets/icon1-selected.png')
        }, {
          menu: '用户管理',
          active: false,
          img: require('../assets/icon2.png'),
          imgs: require('../assets/icon2-selected.png')
        }, {
          menu: '日志管理',
          active: false,
          img: require('../assets/icon3.png'),
          imgs: require('../assets/icon3-selected.png')
        }]
      }
    },
    methods: {
      select(menu, index) {
        this.menus.forEach(menu => {
          menu.active = false
        })
        menu.active = true
        this.$emit('update:state', index)
        dialog.$emit('type', index)
      }
    },
    mounted() {
      var self = this;
    }
  }
</script>

<style scoped>
  .sidebar {
    flex: 1;
    position: relative;
  }
  .middle_left_menu {
    width: 200px;
    height: 100%;
    margin-left: 0px;
    margin-top: 0px;
    float: left;
    background-color: #dadadb;
  }

  .menu {
    height: 40px;
    width: 160px;
    margin: 0 auto;
    text-align: left;
  }
</style>
