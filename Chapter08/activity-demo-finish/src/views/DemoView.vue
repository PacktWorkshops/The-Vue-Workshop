<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white font-bold flex items-center flex-col rounded-lg border shadow-lg p-10">
      <p class="text-center pb-4">I'm the DemoView component</p>
      <ButtonComponent />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent";
export default {
  components: {
    ButtonComponent
  }
};
</script>

<style>
</style>
