<template>
  <div>
    <span v-for="r in repetitions" :key="r">
      {{ content }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    times: {
      type: Number
    },
    content: {
      type: [String, Number]
    }
  },
  computed: {
    repetitions() {
      return Array.from({ length: this.times });
    }
  }
}
</script>
