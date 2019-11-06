<template>
  <div>
    <button @click="send()">Emit in Send Method</button>
    <button @click="$emit('send', message)">Emit inline</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    send() {
      this.$emit('send', this.message)
    }
  }
}
</script>