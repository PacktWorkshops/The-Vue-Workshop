<template>
  <div id="app">
    <button @click="show = !show">Show logo</button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
      @leave="leave"
    >
      <img v-if="show" alt="Vue logo" src="./assets/logo.png">
    </transition>
    <div class="box green"></div>
    <div class="box red"></div>
    <div class="box grey"></div>
    <div class="bubble">
      <img v-if="show" alt="Vue logo" src="./assets/logo.png">
    </div>

    <div class="boxes-container">
      <div class="box stagger-box" v-for="i in 10" :key="i">
      </div>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TimeLineExample/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TimeLineExample from './components/TimeLineExample.vue'
import gsap, { Elastic, Back, Power1 } from 'gsap';

export default {
  name: 'app',
  components: {
    HelloWorld,
    TimeLineExample
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {duration: 3, opacity: 1, onComplete: done});
    },
    leave(el, done) {
      gsap.to(el, {duration: 3, opacity: 0, onComplete: done})
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    gsap.to(".green", {duration: 3, x: 500, rotation: 360});
    gsap.from(".red", {duration: 3, x: 300, scale: 0.5, opacity: 0});
    gsap.fromTo(".grey",
      { duration: 3, opacity: 0, scale: 0.5, x: 600 },
      { duration: 3, opacity: 1, scale: 1, x: 200, rotation: 360}
    )
    gsap.to(`.bubble`, 2, {
      scale: 0.2,
      rotation: 16,
      ease: Back.easeOut.config(1.7),
    }) 
    gsap.to(".bubble", 4, {
      scale: 1.2,
      rotation: '-=16',
      ease: Elastic.easeOut.config(2.5, 0.5),
    })
    gsap.to('.stagger-box', 2, {
      scale: 0.1, 
      y: 60,
      yoyo: true, 
      repeat: -1, 
      ease: Power1.inOut,
      delay:1,
      stagger: {
        amount: 1.5, 
        grid: "auto",
        from: "center"
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: 50px;
  display: block;
  height: 50px;
}

.green {
  background: green;
}

.red {
  background: red;
}

.grey {
  background: grey;
}

.bubble {
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.stagger-box {
  background: lightcoral;
  display: inline-block;
  margin: 10px
}

.boxes-container {
  margin-top:20px;
}
</style>
