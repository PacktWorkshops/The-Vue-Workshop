<template>
  <form>
    <div>
      <label for="textarea-field">Address</label>
      <textarea
        id="textarea-field"
        v-model="address"
      />
    </div>
    <button
      @click="$emit('back')"
      type="submit"
    >
      Back
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      address: ''
    }
  }
}
</script>
