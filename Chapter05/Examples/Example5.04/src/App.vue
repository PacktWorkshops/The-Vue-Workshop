<template>
  <div id="app">
    <Epoch>
      <template v-slot:default="{ epoch }">
        Epoch as rendered with parent template {{ epoch }}
      </template>
    </Epoch>
  </div>
</template>
<script>
import Epoch from './components/Epoch.vue'
export default {
  components: {
    Epoch
  }
}
</script>
