<template>
  <div>
    <Box>
      <h3>This whole h3 is rendered in the slot with parent count {{ count }}</h3>
    </Box>
    <button @click="count++">Increment</button>
  </div>
</template>
<script>
import Box from './components/Box.vue'
export default {
  components: {
    Box
  },
  data() {
    return { count: 0 }
  }
}
</script>
