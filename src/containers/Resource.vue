<template>
    <div>
        查找资源
        <button  @click="postHTTP">Post请求</button>
        <button @click="getHTTP">Get请求</button>
        <button @click="loginHttp">登陆icome测试拦截器</button>
        <button @click="requestList">获取资源列表</button>
    </div>
</template>

<script>
// const axios = require('axios')
import {getResourceList, getBanner} from '../api/ResourceApi.js' 
import {login} from '../api/LoginApi.js'

export default {
  name: "Detail",
  data() {
    return {
      data: []
    };
  },
  methods: {
    postHTTP: function() {
      getResourceDetail('id').then(result => {
        console.log(result)
      })
    },
    getHTTP: function() {
      getBanner('123').then(result => {
        this.data = result.data
      }).catch(err => {
        console.log(err)
      })
    },
   requestList: function () {
     getResourceList('token', 'account').then(response => {
     }).catch((err) => {
       console.log(err)
     })
   },
   
   loginHttp() {
     login('name').then(result => {
       console.log(result)
     }).catch(err =>{
       console.log(err)
     })     
    }
  },
  created() {}
};
</script>

<style scoped>
</style>
