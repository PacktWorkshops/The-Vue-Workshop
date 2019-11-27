<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle Hello World msg
    </button>
    <transition name="slide">
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
.slide-enter, .slide-leave-to {
  transform: translateX(-100px);
}

.slide-enter-active {
  animation: slide 5s;
}

.slide-leave-active {
  animation: slide 5s reverse;
}

@keyframes slide {
    0% { transform: translateX(-100px)}
    100% { transform: translateX(0px)}
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
