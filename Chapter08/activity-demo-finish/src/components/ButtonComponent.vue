<template>
  <button 
    @click="updateData" 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    v-text="'Button Component'"
  />
</template>

<script>
import EventBus from '../event-bus'

export default {
  methods: {
    updateData  () {
      EventBus.$emit('update-data', {
        name: 'John Doe',
        age: 30,
        favPets: ['dog', 'turtle',  'rabbit']
      })
    }
  }
}
</script>

<style>
</style>
