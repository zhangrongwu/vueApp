<template>
  <div class="middle">
    <info></info>
    <div>
      {{textOne}} {{textTwo}}
    </div>
    <button @click="toast">Toast</button>
    <button @click="indicator0">Indicator0</button>
    <button @click="indicator1">Indicator1</button>
    <button @click="closeIndicator">closeIndicator</button>
    <div>
      <button @click="openList">列表刷新</button>
    </div>
    <div>
      alert:
      <button @click="messageBox0">messageBox0</button>
      <button @click="messageBox1">打开提示框，带输入与回调</button>
      <button @click="confirm">confirm提示</button>
    </div>
    <div>
      actionSheet:
      <button @click.native="sheetVisible=true" size="large">actionsheet0,带取消按钮, 好像失败</button>
      <button @click.native="sheetVisible2=true" size="large">actionsheet1,不带取消按钮, 好像失败</button>

      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>

      <button @click="showAction">显示action</button>
      <button @click="showAction1">显示action1</button>
    </div>
    <div>
      <button @click="openSwipe">轮播图, 好像失败</button>
    </div>
    <div>
      <button @click="layzLoad">懒加载图片</button>
    </div>
    <div>
      <button @click="openTabbar">打开自定义的tabbar控制器</button>
    </div>
    
    <router-link :to="{name: 'login'}">router-link页面跳转</router-link>
    
    <router-view class="router-v"></router-view>
    <button @click="testParams">点击传参数</button>
    <button @click="notFound">进入404页面</button>

    <div>
    <input placeholder="输入测试数据" v-model="text">
    {{text}}
    <button @click="chanågeMessage">修改文字</button>
    </div>
   
    <div>
      单价：<input type="text" name='' v-model="price"> *
      件数：<input type="text" name='' v-model="num"> *
      折扣：<input type="text" name='' v-model="rate"> = {{sum}} （元）
    </div>

    <div class="webViewObject">
      <button @click="openNativeMethod">打开原生界面的方法</button>
      <button @click="openNativeMethodWithParam()">打开原生界面的方法，带参数</button>
      <button @click="openNativeMethodWithParams()">打开原生界面的方法，带多个参数</button>
    </div>
  </div>
</template>

<script>
import info from "../components/info";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
import { MessageBox } from "mint-ui";

export default {
  components: {
    info
  },
  created() {
    // alert('开始创建viewMain')
  },
  watch: {
    text: function(newV, oldV) {
      console.log(newV);
    }
  },
  data() {
    return {
      text: "内容",
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: [],
      price: 0,
      num: 0,
      rate: 0
    };
  },
  methods: {
    changeMessage: function() {
      this.text = "修改后的数据";
    },
    toast: function() {
      Toast("这是一个toast的效果测试");
    },
    indicator0: function() {
      Indicator.open("数据加载中...");
    },
    indicator1: function() {
      Indicator.open({
        text: "Loading",
        spinnerType: "fading-circle"
      });
      closeIndicator();
    },
    closeIndicator: function() {
      Indicator.close();
    },
    openList: function() {
      this.$router.push({ name: "messageList" });
    },
    messageBox0: function() {
      MessageBox({
        title: "Notice",
        message: "Are you sure?",
        showCancelButton: true
      });
    },
    messageBox1: function() {
      MessageBox.prompt("请输入您的姓名").then(({ value, action }) => {
        Toast(value);
      });
    },
    confirm: function() {
      MessageBox.confirm("消息", "title").then(action => {
        Toast("提示");
      });
    },
    takePhoto: function() {
      console.log("taking photo");
    },
    openAlbum: function() {
      console.log("opening album");
    },
    goBack: function() {
      history.go(-1);
    },
    showAction: function() {
      this.sheetVisible = true;
    },
    showAction1: function() {
      this.sheetVisible2 = true;
    },
    openSwipe: function() {
      this.$router.push({ name: "swipe" });
    },
    layzLoad: function() {
      this.$router.push({ name: "layzLoad" });
    },
    openTabbar: function() {
      this.$router.push({ name: "appTabbar" });
    },
    testParams() {
      this.$router.push({
        // 传递参数
        name: "newsDetail",
        query: { id: 1, name: "query2" },
        params: { id: 2, name: "params2" }
      });
    },
    notFound() {
      this.$router.push({ name: "home" });
    },
    openNativeMethod: function() {
      try {
       vueProject.test();
      } catch (error) {
        Toast(error.message)
      }
    },
    openNativeMethodWithParam () {
        try {
          vueProject.testFunction('这是一个测试数据，希望你能正常接收 - 来自外太空')
        } catch (error) {
        Toast(error.message)
        }
    }, 
    openNativeMethodWithParams () {
      try {
        vueProject.testFunctionWith('参数1','参数二','不知道这样能不能过去 - 来自外太空的呼唤')
      } catch (error) {
        Toast(error.message)
      }
    }
  },
  // 计算属性
  computed: {
    sum() {
      return this.price * this.num * this.rate;
    }
  },
  mounted() {
    this.actions = [
      {
        name: "拍照",
        method: this.takePhoto
      },
      {
        name: "相册选取图片",
        method: this.openAlbum
      }
    ];
    this.actions2 = [
      {
        name: "确定"
      },
      {
        name: "返回上一步",
        method: this.goBack
      }
    ];
  },
  //  接受伏组件参数值
  props: ["textOne", "textTwo", "type"]
};
</script>

<style scoped>
.middle {
  margin-top: 10px;
  width: 90%;
  height: 100%;
  /*display: flex;*/
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: aliceblue;
}
.webViewObject {
  width: 200px;
  height: 100px;
  background-color: brown;
}
</style>
