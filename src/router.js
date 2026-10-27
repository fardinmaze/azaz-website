import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Research from './views/Research.vue'
import Books from './views/Books.vue'
import Media from './views/Media.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/research', component: Research },
    { path: '/books', component: Books },
    { path: '/media', component: Media },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
