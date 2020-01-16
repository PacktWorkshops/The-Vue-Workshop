<template>
  <div class="card">
    <img :src="url" width="100%" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String
  }
}
</script>

<style scoped>
.card {
  margin: 10px;
  max-width: 150px;
}
h3 {
  font-weight: normal;
}
</style>
