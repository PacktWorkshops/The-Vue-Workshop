<template>
  <select>
    <option
      :selected="selected === o.value"
      v-for="o in options"
      :key="o.value"
    >
      {{ o.label }}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    selected: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      validator(options) {
        return options.every(o => Boolean(o.value && o.label))
      }
    }
  }
}
</script>
