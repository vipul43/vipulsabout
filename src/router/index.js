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
import TechBlog from '../views/Blogs/TechBlogs/TechBlog.vue'
import LifeBlog from '../views/Blogs/LifeBlogs/LifeBlog.vue'
import FFSplBlog from '../views/Blogs/FFSplBlogs/FFSplBlog.vue'
import CocktailBlog from '../views/Blogs/CocktailBlogs/CocktailBlog.vue'

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
    path: '/blog/techblog/:title',
    name: 'TechBlog',
    component: TechBlog,
    props: (route) => ({ selectedComp: route.params.title })
  },
  {
    path: '/blog/lifeblog/:title',
    name: 'LifeBlog',
    component: LifeBlog,
    props: (route) => ({ selectedComp: route.params.title })
  },
  {
    path: '/blog/ffsplblog/:title',
    name: 'FFSplBlog',
    component: FFSplBlog,
    props: (route) => ({ selectedComp: route.params.title })
  },
  {
    path: '/blog/cocktailblog/:title',
    name: 'CocktailBlog',
    component: CocktailBlog,
    props: (route) => ({ selectedComp: route.params.title })
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
