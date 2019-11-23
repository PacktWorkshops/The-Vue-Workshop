<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hi, I'm a component, and I also have access to state! My name is {{ $store.state.name }}.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
