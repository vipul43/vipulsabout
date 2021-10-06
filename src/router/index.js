import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Schooling from '../views/Schooling.vue'
import Works from '../views/Works.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/Errors/NotFound.vue'
import Blog from '../views/Blog.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/schooling',
    name: 'Schooling',
    component: Schooling
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
