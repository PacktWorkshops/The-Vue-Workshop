<template>
  <div id="app">
    <PropertyView :property="property" />
  </div>
</template>

<script>
import PropertyView from './views/PropertyView.vue'
import EventBus from './event-bus.js'

export default {
  name: 'app',
  components: {
    PropertyView
  },
  created () {
    this.updateField()
    this.toggleEditableField()
  },
  beforeDestroy() {
    EventBus.$off('UPDATE_FIELD')
    EventBus.$off('TOGGLE_EDITABLE_FIELD')
  },
  data: function () {
    return {
      // This is the base state of the application
      property: {
        field: {
          'address': { text: '742 Evergreen Terrace', editable: false },
          'type': { text: 'Detached house', editable: false },
          'price': { text: '$750,000', editable: false },
          'bedrooms': { text: 4, editable: false }, 
          'bathrooms': { text: 2, editable: false },
          'age': { text: '5 years old', editable: false },
          'realtor': { text: 'Tiffany Heffner', editable: false },
          'contact': { text: '(555) 555-4321', editable: false }
        }
      }
    }
  },
  methods: {
    updateField () {
      EventBus.$on('UPDATE_FIELD', ({ newValue, id }) => {
        this.property.field[id].text = newValue
      })
    },
    toggleEditableField () {
      EventBus.$on('TOGGLE_EDITABLE_FIELD', ({ id, isEditable }) => {
        // clone the property object so we don't mutate the property data directly.
        let propertyClone = Object.assign({}, this.property)
        // set all fields to not be editable
        for (let key in propertyClone.field) {
          propertyClone.field[key].editable = false
        }
        // highlight the clicked field
        propertyClone.field[id].editable = isEditable
        // safely set the property data
        this.property = propertyClone
      })
    },
  }
}
</script>
