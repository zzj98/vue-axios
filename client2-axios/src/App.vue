<template>
  <div id="app">
    <button @click="show">点我</button>
    <div class="show" v-show="showText">
      {{content}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        content: '',
        showText: false,
      }
    },
    mounted() {
      // this.$ajax.get('https://easy-mock.com/mock/5d5df6a45cc2542cdb769e39/asd/data')
      //   .then(response => {
      //     this.content = response.data;
      //     console.log('ok')
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   }),

      this.$ajax({
        method: 'get', //请求方式
        url: 'https://easy-mock.com/mock/5d5df6a45cc2542cdb769e39/asd/data'
      })
        .then(response => {
          this.content = response.data;
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      show() {
        this.showText = !this.showText
      }
    },
  }
</script>

<style>
</style>
