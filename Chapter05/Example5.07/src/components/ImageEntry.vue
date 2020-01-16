<template>
  <img class="image" :src="url" />
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>

<style scoped>
.image {
  margin: 20px;
  max-width: 300px;
}
</style>
