<template>
  <span class="min-w-1/2 max-w-xs">
    <!-- Field before / after editing -->
    <span
      v-show="!field.editable"
      @click="updateEditableField(true)"
      v-text="field.text"
    />
    <!-- Input field to edit content -->
    <input 
      class="border-b border-green-300 w-full"
      v-show="field.editable"
      :value="field.text"
      @input="emitNewInputValue($event.target.value)"
      @blur="updateEditableField(false)"
      @keyup.enter="updateEditableField(false)"
    />
  </span>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
      default: () => { return ({ text: '', editable: false }) }
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    emitNewInputValue (newValue) {
      this.$emit('input-updated', {
        text: newValue, 
        editable: true,
        id: this.id
      })
    },
    updateEditableField (isEditable) {
      this.$emit('update-editable-field', { id: this.id, isEditable })
    }
  }
}
</script>
