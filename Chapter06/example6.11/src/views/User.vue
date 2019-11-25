<template>
  <div>
    <h1>About a user: {{$route.params.id}}</h1>
    <router-link :to="{ name: 'userinfo', params: { id: id }}">Info</router-link> |
    <router-link :to="`/user/${id}/extra`">Extra</router-link>
    <router-view/>
  </div>
</template>
<script>

export default {
  props: {
    id: String
  }
}
</script>