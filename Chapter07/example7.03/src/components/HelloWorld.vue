<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle Hello World msg
    </button>
    <transition
      name="slide"
      enter-active-class="swing"
      leave-active-class="tada"
    >
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

.tada {
  animation-fill-mode: both;
  animation-name: tada;
  animation-duration: 10s;
}

.swing {
  animation: swing ease-in-out 5s infinite alternate;
  transform-origin: top center;
}

@keyframes tada {
  0% {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.8, .9, .8) rotate3d(0, 0, 1, -5deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes swing {
  20% { transform: rotate(5deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
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
