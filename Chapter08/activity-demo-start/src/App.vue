<template>
  <div id="app">
    <main class="p-4 bg-gray-300">
      <h1 class="bg-white font-bold text-center rounded-lg border shadow-lg p-4">I'm the main App component!</h1>
      <DemoView /> 
    </main>
  </div>
</template>

<script>
import DemoView from './views/DemoView'

export default {
  name: 'app',
  components: {
    DemoView
  },
  data: function () {
    return {
      // This is the base state of the application
    }
  },
}
</script>
