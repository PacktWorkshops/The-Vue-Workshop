<template>
  <div id="app">
    <PaginatedList :items="snacks" :offset="offset" :limit="limit"/>
    
    <button @click="offset++">
      Increment Offset (current: {{ offset }})
    </button>
    <button @click="limit++">
      Increment Limit (current: {{ limit }})
    </button>
  </div>
</template>

<script>
import PaginatedList from './components/PaginatedList.vue'

export default {
  components: {
    PaginatedList
  },
  data() {
    return {
      offset: 0,
      limit: 0,
      snacks: [
        {
          id: 'ready-salted',
          content: 'Ready Salted'
        },
        {
          id: 'cheese-onion',
          content: 'Cheese & Onion'
        },
        {
          id: 'salt-vinegar',
          content: 'Salt & Vinegar'
        },
      ]
    }
  }
}
</script>
