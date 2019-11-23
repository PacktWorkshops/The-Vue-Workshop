<template>
  <div id="app">
    <p>
    My name is {{ name }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      "name"
    ])
  }
}
</script>

