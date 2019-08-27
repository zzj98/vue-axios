<template>
  <div id="app">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    mounted(){
      this.$axios.get(' https://easy-mock.com/mock/5d5df6a45cc2542cdb769e39/asd/data',{params:this.searUser})
          .then(res => {
              console.log(res);
          }).catch(err => {
            console.log(err);
      });
    },
}
</script>

<style>
</style>
