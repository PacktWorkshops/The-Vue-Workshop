<template>
  <div id="app">
    <PropertyView 
      @update-editable-field="updateEditableField" 
      @input-updated="inputUpdated" 
      :property="property" 
    />
  </div>
</template>

<script>
import PropertyView from './views/PropertyView.vue'

export default {
  name: 'app',
  components: {
    PropertyView
  },
  created () {
    // created hook functions here ...
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
    inputUpdated ({ text, editable, id }) {
      console.log(`phew here's the new value for ${id}:  ${text}`)
      // create a clone of this.property so we don't mutate state directly
      const propertyCopy = Object.assign({}, this.property)
      // update the property copy's field with the changed text and editable values
      propertyCopy.field[id] = {
        text,
        editable
      }
      // we can safely update the property data
      this.property = propertyCopy
    },
    updateEditableField ({ id, isEditable }) {
      this.property.field[id].editable = isEditable
    }
  }
}
</script>
