<template>
  <div class="about">
    <h1>About {{user}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!to.params || !to.params.user) {
      next(comp => {
        comp.user = 'Alexs'
      })
    }
    else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    const ans = window.confirm('You are about to leave the About page.  Are you sure?');

    next(!!ans);
  }
}
</script>
