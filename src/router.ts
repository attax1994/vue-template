import Vue from 'vue'
import Router from 'vue-router'
import {Route} from "vue-router/types/router";
import EmptyRoute from '@/views/EmptyRoute.vue'
import MainRouter from "@/views/Main/Main.router";
import DemoRouter from "@/views/Demo/Demo.router";

Vue.use(Router);

const router = new Router({
  base: '/',
  routes: [
    MainRouter,
    DemoRouter,
    {
      path: '**',
      name: 'EmptyRoute',
      component: EmptyRoute,
    }
  ]
});

router.beforeEach((to: Route, from: Route, next: Function) => {
  // change title
  document.title = to.meta.title || 'DaXiaoke';

  console.log(to);

  next();
});

export default router;

