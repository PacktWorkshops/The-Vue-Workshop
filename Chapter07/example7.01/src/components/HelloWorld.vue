<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle Hello World msg
    </button>
    <transition name="fade-in">
      <h1 v-if="show">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
<style>
.fade-in-enter, .fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 3s ease-in;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
