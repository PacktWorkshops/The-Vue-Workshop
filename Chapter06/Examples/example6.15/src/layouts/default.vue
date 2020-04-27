<template>
  <div class="default">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main class="main">
      <slot/>
    </main>
    <footer>
      <div>Vue Workshop Chapter 06</div>
    </footer>
  </div>
</template>
<style>
nav {
  border-bottom: 1px lightgray solid;
  padding: 10px;
}

footer {
  border-top: 1px lightgray solid;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>