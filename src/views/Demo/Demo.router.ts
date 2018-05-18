import {RouteConfig} from 'vue-router'

const DemoRouter: RouteConfig = {
  path: '/demo',
  name: 'demo',
  component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo.vue'),
  children: [
    {
      path: 'carousel',
      name: 'carousel',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/Carousel.demo.vue'),
    }, {
      path: 'pagination',
      name: 'pagination',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/Pagination.demo.vue'),
    }, {
      path: 'panel',
      name: 'panel',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/OptionPanel.demo.vue'),
    }, {
      path: 'form',
      name: 'form',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/Form.demo.vue'),
    }, {
      path: 'typing',
      name: 'typing',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/Typing.demo.vue'),
    }, {
      path: 'exam',
      name: 'exam',
      component: () => import(/* webpackChunkName: "group-demo" */ '@/views/Demo/ExamSheet.demo.vue'),
    },
  ],
}

export default DemoRouter