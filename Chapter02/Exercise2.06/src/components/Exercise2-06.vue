<template>
  <div class="container">
    <h1>Async fetch</h1>

    <button @click="getApi()">{{
      loading ? 'Loading...' : 'Learn something profound'
    }}</button>

    <blockquote v-if="quote">{{ quote }}</blockquote>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      response: {},
    }
  },
  computed: {
    quote() {
      return this.response && this.response.slip
        ? this.response.slip.advice
        : null
    },
  },
  methods: {
    async getApi() {
      this.loading = true
      return axios.get('https://api.adviceslip.com/advice').then(({ data }) => {
        this.response = data
        this.loading = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
blockquote {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 1.2em 30px 1.2em 30px;
  background: #ededed;
  border-left: 8px solid #78c0a8;
  font-size: 24px;
  color: #555555;
  line-height: 1.6;
}
</style>
