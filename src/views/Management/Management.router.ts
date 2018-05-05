import {RouteConfig} from "vue-router";

const ManagementRouter: RouteConfig = {
  path: 'my',
  component: () => import(/* webpackChunkName: "group-management" */ '@/views/Management/ManagementWrapper.vue'),
  children: [
    {
      path: ''
    }
  ]
};

export default ManagementRouter;