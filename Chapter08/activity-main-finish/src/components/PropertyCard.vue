<template>
  <article class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://bit.ly/2NHN02w)" /> 
    
    <!-- Property Address, Price & Type Section -->
    <section class="p-4">
      <p class="flex uppercase tracking-wide text-sm font-bold text-gray-700">
        <EditableField :field="property.field.type"  id="type" />
        <span class="px-1">•</span> 
        <EditableField :field="property.field.age" id="age" />
      </p>
      <p class="text-3xl text-gray-900">
        <EditableField :field="property.field.price" id="price" />
      </p>
      <p class="property-address text-gray-700">
        <EditableField :field="property.field.address" id="address" />
      </p>
    </section>

    <!-- Property Bed & Bath Section -->
    <section class="flex p-4 border-t border-gray-300 text-gray-700">
      <div class="flex-1 inline-flex items-center">
        <BedLogo />
        <p class="flex">
            <span class="property-bedrooms text-gray-900 font-bold pr-2">
              <EditableField :field="property.field.bedrooms" id="bedrooms" /> 
            </span>
            Bedrooms
        </p>
      </div>
      <div class="flex-1 inline-flex items-center pl-2">
        <BathLogo />
        <p class="flex">
          <span class="property-bathrooms text-gray-900 font-bold pr-2">
            <EditableField :field="property.field.bathrooms" id="bathrooms" /> 
          </span>
          Bathrooms
        </p>
      </div>
    </section>

    <!-- Property Realtor Section -->
    <section class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
      <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
      <div class="flex items-center pt-2">
        <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(https://bit.ly/2MMCSG3)" />
        <div>
          <p class="property-realtor-name font-bold text-gray-900">
            <EditableField :field="property.field.realtor" id="realtor" /> 
          </p> 
          <p class="property-realtor-number text-sm text-gray-700">
            <EditableField :field="property.field.contact" id="contact" /> 
          </p>
        </div>
      </div>
    </section>

  </article>
</template>

<script>
import BedLogo from '../assets/BedLogo'
import BathLogo from '../assets/BathLogo'
import EditableField from './EditableField'

export default {
    components: {
        BedLogo,
        BathLogo,
        EditableField
    },
    props: {
        property: {
            type: Object,
            required: true,
            default: () => { return {} }
        }
    }
}
</script>
