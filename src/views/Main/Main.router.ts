import {RouteConfig} from 'vue-router'
import BlogRouter from '@/views/Bundle/Blog/Blog.router'
import CourseRouter from '@/views/Course/Course.router'
import ManagementRouter from '@/views/Management/Management.router'
import UserCenterRouter from '@/views/UserInfo/UserCenter.router'

const MainRouter: RouteConfig = {
  path: '/',
  component: () => import(/* webpackChunkName: "group-main" */ '@/views/Main/Main.vue'),
  children: [
    // Modules
    BlogRouter,
    CourseRouter,
    ManagementRouter,
    UserCenterRouter,
    {
      path: '',
      name: 'home',
      meta: {title: '首页'},
      component: () => import(/* webpackChunkName: "group-main" */ '@/views/Main/Home.vue'),
    }, {
      path: 'about',
      name: 'about',
      meta: {title: '关于我们'},
      component: () => import(/* webpackChunkName: "group-main" */ '@/views/Main/About.vue'),
    },
  ],
}

export default MainRouter