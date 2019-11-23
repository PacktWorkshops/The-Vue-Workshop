<template>
  <div>
    <button @click="getYounger">Younger</button>
    <button @click="getOlder">Older</button>
  </div>
</template>

<script>
export default {
  name: 'Age',
  methods: {
    getYounger() {
      this.$store.commit('fountainOfYouth');
    },
    getOlder() {
      this.$store.commit('birthday');
    }
  }
}
</script>

