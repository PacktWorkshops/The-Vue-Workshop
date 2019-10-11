<template>
  <span class="min-w-1/2 max-w-xs">
    <!-- Field before / after editing -->
    <span
      v-show="!field.editable"
      @click="toggleEditableField(true)"
      v-text="field.text"
    />
    <!-- Input field to edit content -->
    <input 
      class="border-b border-green-300 w-full"
      v-show="field.editable"
      :value="field.text"
      @input="updateField"
      @blur="toggleEditableField(false)"
      @keyup.enter="toggleEditableField(false)"
    />
  </span>
</template>

<script>
import EventBus from '../event-bus'

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
    updateField (e) {
      EventBus.$emit('UPDATE_FIELD', {
        newValue: e.target.value,
        id: this.id
      })
    },
    toggleEditableField (isEditable) {
      EventBus.$emit('TOGGLE_EDITABLE_FIELD', {
        isEditable,
        id: this.id
      })
    }
  }
}
</script>
