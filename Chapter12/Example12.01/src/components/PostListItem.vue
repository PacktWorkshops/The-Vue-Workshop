<template>
  <div class="flex flex-col m-auto w-full md:w-3/5 lg:w-2/5 mb-4">
    <h3 class="flex text-md font-semibold text-gray-700">{{ title }}</h3>
    <p class="flex leading-relaxed">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
