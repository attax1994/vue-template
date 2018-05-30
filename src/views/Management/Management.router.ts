import {RouteConfig} from "vue-router";

const ManagementRouter: RouteConfig = {
  path: 'management',
  component: () => import(/* webpackChunkName: "group-management" */ '@/views/Management/ManagementWrapper.vue'),
  children: [
    {
        path: '/management/userRegister',
        name: 'userRegister',
        meta: {title: '用户注册'},
        component: () => import(/* webpackChunkName: "group-management" */ '@/views/Management/UserRegister.vue')
    }
  ]
};

export default ManagementRouter;