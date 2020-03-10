<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition
      name="zoom"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s, transform 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
<style>
/**Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.4, 0.4, 0.4);
  }

  100% {
    opacity: 1;
  }
}
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
