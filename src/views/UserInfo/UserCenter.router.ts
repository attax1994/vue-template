import {RouteConfig} from "vue-router";

const UserCenterRouter: RouteConfig = {
    path: "userInfoCenter",
    component: () => import('@/views/UserInfo/UserCenter.vue'),
    children: [
        {
            path: '/userInfoCenter/userDetails',
            name: 'userDetails',
            meta: {title: '个人信息'},
            component: () => import('@/views/UserInfo/UserDetails.vue'),
        },
        {
            path: '/userInfoCenter/userOrders',
            name: 'userOrders',
            meta: {title: '我的订单'},
            component: () => import('@/views/UserInfo/UserOrders.vue'),
        },
        {
            path: '/userInfoCenter/studyRecord',
            name: 'studyRecord',
            meta: {title: '学习记录'},
            component: () => import('@/views/UserInfo/StudyRecord.vue'),
        },
        {
            path: '/userInfoCenter/userCollect',
            name: 'userCollect',
            meta: {title: '我的收藏'},
            component: () => import('@/views/UserInfo/UserCollect.vue'),
        }
    ]
};

export default UserCenterRouter;