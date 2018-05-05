import {RouteConfig} from "vue-router";

const CourseRouter: RouteConfig = {
  path: 'course',
  component: () => import(/* webpackChunkName: "group-course" */ '@/views/Course/CourseWrapper.vue'),
  children: [
    {
      path: '',
      name: 'Courses',
      meta: {title: '全部课程'},
      component: () => import(/* webpackChunkName: "group-course" */ '@/views/Course/Courses.vue'),
    }, {
      path: 'detail/:id',
      name: 'CourseDetail',
      meta: {title: '课程详情'},
      component: () => import(/* webpackChunkName: "group-course" */ '@/views/Course/CourseDetail/CourseDetail.vue'),
    }, {
      path: 'create',
      name: 'CreateCourse',
      meta: {title: '创建课程'},
      component: () => import(/* webpackChunkName: "group-course" */ '@/views/Course/CreateCourse.vue'),
    }
  ],
};

export default CourseRouter;