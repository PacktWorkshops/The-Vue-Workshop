<template>
  <div id="app">
    <Greet greeting="Hello" audience="World" />
    <GreetRender greeting="Hello" audience="World" />
  </div>
</template>
<script>
import Greet from './components/Greet.vue'
import GreetRender from './components/GreetRender.js'

export default {
  components: {
    Greet,
    GreetRender
  }
}
</script>
