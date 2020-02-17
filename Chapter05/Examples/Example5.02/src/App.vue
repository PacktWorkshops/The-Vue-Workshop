<template>
  <div ref="zone" />
</template>
<script>
const firstMixin = {
  mounted() {
    console.log('First mixin mounted hook')
  } 
}
const secondMixin = {
  mounted() {
    console.log('Second mixin mounted hook')
  }
}
export default {
  mixins: [firstMixin, secondMixin],
  mounted() {
    console.log('Component mounted hook')
  }
}
</script>
