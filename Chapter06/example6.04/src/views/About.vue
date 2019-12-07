<template>
  <div class="about">
    <h1>About {{user}}</h1>
    <h2>Age: {{age}}</h2>
  </div>
</template>
<script>
export default {
  props: {
    user: String,
    age: Number
  }
}
</script>
