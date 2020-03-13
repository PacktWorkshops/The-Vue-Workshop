import Vue from 'vue'
import VueRouter from 'vue-router'

import PostList from './components/PostList.vue'
import SinglePost from './components/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PostList
  },
  {
    path: '/:postId',
    component: SinglePost
  }
]

export default new VueRouter({
  routes
})
