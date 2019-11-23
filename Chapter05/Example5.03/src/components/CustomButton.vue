<template>
  <button @click="$emit('click', $event)">
    <slot />
  </button>
</template>
