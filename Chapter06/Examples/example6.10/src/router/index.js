import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
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

export const beforeEach = ((to, from, next) => {
  if (to.name === 'about' && (!to.params || !to.params.user)) {
    next({ name: 'about', params: { user }})
  }
  else {
    user = to.params.user;
    next()
  }
});

export const afterEach = ((to, from) => {
  if (to.name === 'about' && to.params && to.params.user) {
    user = to.params.user;
  }
})

router.beforeEach = beforeEach
router.afterEach = afterEach

export default router
