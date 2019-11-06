<template>
  <div id="app">
    <Repeat :times="3" :content="55" />
    <!-- <button @click="increment()">Repeat</button> -->
  </div>
</template>

<script>
import Repeat from './components/RepeatTyped.vue'

export default {
  components: {
    Repeat 
  },
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count += 1
    }
  }
}
</script>
