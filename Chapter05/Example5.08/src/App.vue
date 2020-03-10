<template>
  <div id="app">
    <keep-alive>
      <component
        :is="activeStep"
        @next="activeStep = 'second-step'"
        @back="activeStep = 'first-step'"
      />
    </keep-alive>
  </div>
</template>
<script>
import FirstStep from './components/FirstStep.vue'
import SecondStep from './components/SecondStep.vue'

export default {
  components: {
    FirstStep,
    SecondStep
  },
  data() {
    return {
      activeStep: 'first-step',
    }
  }
}
</script>
