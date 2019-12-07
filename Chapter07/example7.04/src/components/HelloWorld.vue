<template>
  <div class="hello">
    <button v-on:click="show = !show">
      Toggle Hello World msg
    </button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <h1 v-if="show">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      TweenMax.to(el, 2, {
        opacity: 1,
        fontSize: '20px',
        onComplete: done
      })
    },
    leave(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });
      
      tl.to(el, {rotation: -270, duration: 1, ease: "elastic"})
        .to(el, {rotation: -360})
        .to(el, {rotation: -180, opacity: 0});
    }
  }
}
</script>
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
