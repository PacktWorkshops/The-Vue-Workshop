<template>
  <div>
    <button v-on:click="show = !show">
      {{ show ? "Hide list": "Show list"}}
    </button>
    <transition-group
      name="fade"
      tag="div"
    >
      <p v-for="message in messages" :key="message" v-show="show">{{message}}</p>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hello, how are you?',
        'The weather is nice',
        'This is message feed',
        'And I am the forth message'
      ],
      show: false
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: all 5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

.fade-move {
  transition: transform 2s ease-in;
}
</style>