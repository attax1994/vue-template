import {RouteConfig} from 'vue-router'

const UserCenterRouter: RouteConfig = {
  path: 'userInfoCenter',
  component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/UserCenter.vue'),
  children: [
    {
      path: '/userInfoCenter/userDetails',
      name: 'userDetails',
      meta: {title: '个人信息'},
      component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/UserDetails.vue'),
    },
    {
      path: '/userInfoCenter/userOrders',
      name: 'userOrders',
      meta: {title: '我的订单'},
      component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/UserOrders.vue'),
    },
    {
      path: '/userInfoCenter/studyRecord',
      name: 'studyRecord',
      meta: {title: '学习记录'},
      component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/StudyRecord.vue'),
    },
    {
      path: '/userInfoCenter/userCollect',
      name: 'userCollect',
      meta: {title: '我的收藏'},
      component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/UserCollect.vue'),
    },
    {
        path: '/userInfoCenter/userMsg',
        name: 'userMsg',
        meta: {title: '我的消息'},
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/UserMsg.vue'),
    },
    {
        path: '/userInfoCenter/courseManagement',
        name: 'courseManagement',
        meta: {title: '课程管理'},
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/UserInfo/CourseManagement.vue'),
    }
  ],
}

export default UserCenterRouter