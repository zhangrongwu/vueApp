<template>
  <div>
    <aheader></aheader>
    <toolBar></toolBar>
    <viewMain :type="type"  v-bind:textTwo="type" textOne="父组件传值"></viewMain>
  </div>
</template>

<script>
  import connect from '../connect.js'
  export default {
    components: {

    },
    create () {
      this.type = 1
      connect.$on('type', function (msg) {
        alert(msg)
      })
    },
    data() {
      return {
        data: '',
        type: '5',
        item: ''
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
