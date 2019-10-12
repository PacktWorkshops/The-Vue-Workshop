<template>
  <div id="app">
    <main class="p-4 bg-gray-300">
      <section class="bg-white text-center rounded-lg border shadow-lg p-4">
        <h1 class="font-bold ">I'm the main App component!</h1>
        <div v-if="favPets.length > 0">
          <p>My favourite pets are: <br>
          <ul>
            <li v-for="(pet, index) in favPets" :key="pet + '__' + index" v-text="pet" class="inline" />
          </ul>
          </p>
        </div>
      </section>
      <DemoView /> 
    </main>
  </div>
</template>

<script>
import DemoView from './views/DemoView'
// Import Event Bus & test it out!
import EventBus from './event-bus.js'

export default {
  name: 'app',
  components: {
    DemoView
  },
  data () {
    return {
      favPets: []
    }
  },
  created () {
    EventBus.$on('update-data', ({ favPets }) => {
      const last = favPets.pop();
      const result = favPets.join(', ') + ' & ' + last
      this.favPets =  result
    })
  }
}
</script>
