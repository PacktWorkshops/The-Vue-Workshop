<template>
  <body class="antialiased bg-gray-200 font-sans">
    <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center h-full min-h-screen">
            <!-- Property Card with editable fields-->
            <section class="max-w-sm w-full py-6 px-3">
                <PropertyCard @update-editable-field="updateEditableField" @input-updated="inputUpdated" :property="property" />
            </section>
            <!-- Property order form card -->
            <section class="max-w-sm w-full py-6 px-3">
                <PropertyOrder :property="property" />
            </section>
        </div>
    </div>
</body>
</template>

<script>
import PropertyOrder from '../components/PropertyOrder'
import PropertyCard from '../components/PropertyCard'

export default {
  components: {
      PropertyOrder,
      PropertyCard
  },
  props: {
    property: {
        type: Object,
        required: true, 
        default: () => { return {} }
    }
  },
  methods: {
    inputUpdated (payload) {
      this.$emit('input-updated', payload)
    },
    updateEditableField (payload) {
      this.$emit('update-editable-field', payload)
    }
  }
}
</script>
