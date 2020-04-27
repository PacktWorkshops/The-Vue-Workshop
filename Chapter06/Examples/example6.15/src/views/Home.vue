<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DefaultLayout from '../layouts/default.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    this.$emit('update:currentLayout', DefaultLayout)
  }
}
</script>
