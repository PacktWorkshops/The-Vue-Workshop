<template>
  <div id="app">
    <h1>About Me</h1>
    <p>
      My name is {{ $store.state.name }} and I am {{ $store.state.age }} years old.
    </p>
    <p>
      <input v-model="newName"> <button @click="setName" :disabled="!newName">Update Name</button>
    </p>
    <Age/>
  </div>
</template>

<script>
import Age from './components/Age.vue'

export default {
  name: 'app',
  components: {
    Age
  },
  data() {
    return {
      newName:''
    }
  },
  methods: {
    setName() {
      if(this.newName) {
        this.$store.commit('setName', this.newName);
        this.newName = '';
      }
    }
  }
}
</script>
