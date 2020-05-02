<template>
  <div>
    <h1>About a user: {{$route.params.id}}</h1>
    <h2>Name: {{name}}</h2>
    <p>Age: {{age}}</p>
  </div>
</template>
<script>
import users from '../assets/users.js';

export default {
  props: {
    id: String
  },
  data() {
    return {
      name: '',
      age: 0
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const user = users[vm.id - 1];
      vm.name = user.name;
      vm.age = user.age;
    }) 
  },
  beforeRouteUpdate(to, from, next) {
    const user = users[to.params.id - 1];
    this.name = user.name;
    this.age = user.age;
    next();
  }
}
</script>
