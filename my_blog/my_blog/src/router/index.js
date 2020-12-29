import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '../components/AddBlog'
import BrowseBlog from '../components/BrowseBlog'
import AboutBlog from '../components/AboutBlog'
import DetailsBlog from '../components/DetailsBlog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BrowseBlog
    },
    {
      path:'/addblog',
      component:AddBlog
    },
    {
      path:'/aboutblog',
      component:AboutBlog
    },
    {
      path:'/detailsblog/:id',
      component:DetailsBlog
    }
  ]
})
