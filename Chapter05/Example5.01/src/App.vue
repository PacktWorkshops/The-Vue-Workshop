<template>
  <div>{{ greet('World') }}</div>
</template>
<script>
import greeter from './mixins/greeter.js'
export default {
  mixins: [greeter],
  data() {
    return {
      greeting: 'Hi'
    }
  }
}
</script>
