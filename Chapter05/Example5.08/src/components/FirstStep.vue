<template>
  <form>
    <div>
      <label for="name-field">Name</label>
      <input
        id="name-field"
        type="text"
        v-model="name"
      />
    </div>
    <button
      @click="$emit('next')"
      type="submit"
    >
      Next
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
