<template>
  <div id="app">
    <p>Message: {{ message }}</p>
    <MessageEditor @send="message = $event" />
    <button @click="message = null">Reset</button>
  </div>
</template>
<script>
import MessageEditor from './components/MessageEditor.vue'

export default {
  components: {
    MessageEditor
  },
  data() {
    return {
      message: null
    }
  }
}
</script>
