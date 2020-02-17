<template>
  <div id="app">
    <Hello :who="appWho"/>
    <button @click="setWho('JavaScript')">JavaScript</button>
    <button @click="setWho('Everyone')">Everyone</button>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  components: {
    Hello
  },
  data() {
    return {
      appWho: 'Vue.js'
    }
  },
  methods: {
    setWho(newWho) {
      this.appWho = newWho
    }
  }
}
</script>