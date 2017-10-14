import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Hello from '@/views/Hello'

import Navbar from '@/components/Navbar'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/hello',
          name: 'Hello',
          component: Hello
        },
      ]
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
  ]
})
