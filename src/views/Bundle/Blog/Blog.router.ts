import {RouteConfig} from "vue-router";

const BlogRouter: RouteConfig = {
  path: 'blog',
  component: () => import(/* webpackChunkName: "group-blog" */ '@/views/Bundle/Blog/BlogWrapper.vue'),
  children: [
    {
      path: '',
      name: 'blogList',
      meta: {title: 'Blog List'},
      component: () => import(/* webpackChunkName: "group-blog" */ '@/views/Bundle/Blog/BlogList.vue'),
    }, {
      path: 'detail',
      name: 'blogDetail',
      meta: {title: 'Blog Detail'},
      component: () => import(/* webpackChunkName: "group-blog" */ '@/views/Bundle/Blog/BlogDetail.vue'),
    }
  ]
};

export default BlogRouter;