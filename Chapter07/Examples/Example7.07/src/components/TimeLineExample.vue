<template>
  <div>
    <div class="box" id="box-green"></div>
    <div class="box" id="box-red"></div>
    <div class="box" id="box-purple"></div>
  </div>
</template>
<script>
import gsap from 'gsap';

export default {
    mounted() {
      // var tl = gsap.timeline({ repeat: -1});
      // tl.to("#box-green", { duration: 2, x: 550 })
      // //1 second after end of timeline (gap)
      // tl.to("#box-red", { duration: 2, x: 550, scale: 0.5 }, "+=1")
      // //0.5 seconds before end of timeline (overlap)
      // tl.to("#box-purple", { duration: 2, rotation: 360, x:550, scale: 1.2, ease: "bounce" }, "-=1")

      var tl = gsap.timeline({ defaults: { duration: 2 }, repeat: -1});

      tl.to("#box-green", { x: 550 })
        .to("#box-red", { scale: 0.5, x: 450 }, "+=1")
        .to("#box-purple", { scale: 1.2, ease: "bounce", x: 500 }, "-=1")
  }
}
</script>
<style scoped>
  #box-green {
    background: green;
  }

  #box-red {
    background: red;
  }

  #box-purple {
    background: purple;
  }
</style>