<template>
  <div>
    <textarea
      v-if="type === 'long'"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
    <input
      v-else
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
  </div>
</template>
<script>
export default {
  props: ['value', 'type']
}
</script>
