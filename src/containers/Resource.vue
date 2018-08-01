<template>
    <div>
        查找资源
        <button  @click="postHTTP">Post请求</button>
        <button @click="getHTTP">Get请求</button>
    </div>
</template>

<script>
// const axios = require('axios')
export default {
  name: "Detail",
  data() {
    return {
      data: []
    };
  },
  methods: {
    postHTTP: function() {
      this.$axios.post("/postcomment/300", {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      });
    },
    getHTTP: function() {
      this.$axios
        .get("/getlunbo", {
            params:{
                id: 123
            }
        })
        .then(result => {
          console.log(result);
          this.data = result.data;
        })
        .catch(err => {});
    }
  },
  created() {}
};
</script>

<style scoped>
</style>
