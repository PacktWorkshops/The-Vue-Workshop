import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let user = 'Adam';

router.beforeEach((to, from, next) => {
  if (to.name === 'about' && (!to.params || !to.params.user)) {
    next({ name: 'about', params: { user }})
  }
  else {
    user = to.params.user;
    next()
  }

  console.log('beforeEach: user - ', user)
});

router.afterEach((to, from) => {
  if (to.name === 'about' && to.params && to.params.user) {
    user = to.params.user;
  }

  console.log('afterEach: user - ', user)
})

export default router
