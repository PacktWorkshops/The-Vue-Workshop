<template>
  <article class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="p-4">
      <h2 class="text-xl font-semibold pb-3">Order for {{ property.field.address.text }}</h2>
      <!-- Order Metadata -->
      <section class="order-metadata pb-4">
        <p class="italic">
          <span class="text-gray-800">Order No. </span>
          <span class="text-gray-600">{{ randomOrderNo }}</span>
        </p>
        <p class="italic">
          <span class="text-gray-800">Date: </span> 
          <span class="text-gray-600">{{ today }}</span>
        </p>
        <p class="italic">
          <span class="text-gray-800">Sold by: </span>
          <span class="text-gray-600">{{ property.field.realtor.text }}</span>
        </p>
      </section>

      <!-- Order Details -->
      <section class="order-table">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Details</th>
              <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Count</th>
            </tr>
          </thead>
          <tbody class="align-baseline">
            <tr>
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap" v-text="'Age'" />
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre" v-text="property.field.age.text" />
            </tr>
            <tr>
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap" v-text="'Bedrooms'" />
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre" v-text="property.field.bedrooms.text" />
            </tr>
            <tr>
              <td class="p-2 border-t border-gray-200 font-mono text-xs text-purple-700 whitespace-no-wrap" v-text="'Bathrooms'" />
              <td class="p-2 border-t border-gray-200 font-mono text-xs text-blue-700 whitespace-pre" v-text="property.field.bathrooms.text" />
            </tr>
            <tr>
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap" v-text="'Price'" />
              <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre" v-text="property.field.price.text" />
            </tr>
          </tbody>
        </table>
      </section>
      
    </div>
  </article>
</template>

<script>
export default {
  props: {
    property: {
        type: Object,
        required: true, 
        default: () => { return {} }
    }
  },
  computed: {
    randomOrderNo () {
      return Math.round( Math.random() * 1000 )
    },
    today () {
      return new Date().toDateString()
    }
  }
}
</script>
