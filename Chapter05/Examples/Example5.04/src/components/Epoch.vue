<template>
  <div>
    <slot :epoch="epoch" />
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: Date,
      default() {
        return new Date()
      }
    }
  },
  computed: {
    epoch() {
      return Number(this.date)
    }
  }
}
</script>
