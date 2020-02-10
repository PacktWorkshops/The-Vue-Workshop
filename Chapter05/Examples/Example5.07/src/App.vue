<template>
  <div id="app">
    Display mode:
    <input
      type="radio"
      name="style"
      value="card"
      v-model="itemComponent"
      id="card-radio"
    />
    <label for="card-radio">Card</label>

    <input
      type="radio"
      name="style"
      value="image-entry"
      v-model="itemComponent"
      id="image-radio"
    />
    <label for="image-radio">Image</label>

    <div class="grid">
      <component
        class="grid-item"
        v-for="item in items"
        :key="item.id"
        :is="itemComponent"
        :url="item.url"
        :title="item.title"
      />
    </div>
  </div>
</template>
<script>
import Card from './components/Card.vue';
import ImageEntry from './components/ImageEntry.vue';

export default {
  components: {
    Card,
    ImageEntry,
  },
  data() {
    return {
      itemComponent: 'card',
      items: [
        {
          id: '10',
          title: 'Forest Shot',
          url: 'https://i.picsum.photos/id/10/1000/750.jpg',
        },
        {
          id: '1000',
          title: 'Cold cross',
          url: 'https://i.picsum.photos/id/1000/1000/750.jpg',
        },
        {
          id: '1002',
          title: 'NASA shot',
          url: 'https://i.picsum.photos/id/1002/1000/750.jpg',
        },
        {
          id: '866',
          title: 'Peak',
          url: 'https://i.picsum.photos/id/866/1000/750.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped>
.grid {
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
}
.grid-item {
  display: flex;
  flex-direction: column;
}
</style>
