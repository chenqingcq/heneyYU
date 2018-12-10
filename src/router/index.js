import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Story from '@/components/story'
import Honey from '@/components/honey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/index',
      redirect:'/'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/honey',
      name: 'honey',
      component: Honey
    },
  ]
})
