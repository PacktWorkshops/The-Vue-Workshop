<template>
  <div class="container">
    <input v-model="firstWord" placeholder="Enter an interesting word" />
    <input v-model="lastWord" placeholder="Enter an interesting word" />
    <input v-model="wordPair" placeholder="Enter an interesting word" />


    
    <button @click="triggerSetter">Trigger the setter</button>

    <h3 v-if="showPair" class="output">{{ wordPair }}</h3>
    {{ reverseWords }}

    {{ firstWord }} {{ lastWord}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstWord: '',
      lastWord: '',
      reverseWords: '',
    }
  },
  methods: {
    triggerSetter() {
      this.firstWord = 'balls'
    },
  },
  computed: {
    showPair() {
      return !!this.firstWord && !!this.lastWord
    },
    wordPair: {
      // getter
      get() {
        return this.firstWord + ' & ' + this.lastWord
      },
      // setter
      set(newValue) {
        var names = newValue.split(' & ')
        this.firstWord = names[0]
        this.lastWord = names[names.length - 1]
        this.reverseWords = this.firstWord.length + this.lastWord.length
      },
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 16px;
}
</style>
