<template>
  <div class="about">
    <h1>About {{user}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    user: String,
  }
}
</script>