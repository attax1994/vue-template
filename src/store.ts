import Vue from 'vue';
import Vuex from 'vuex';
import {ActionUrls, StoreKeys} from '@/persistence/store/global';
import dashboard from '@/persistence/store/dashboard';
import user from '@/persistence/store/user';
import course from '@/persistence/store/course';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ActionUrls,
    StoreKeys
  },
  mutations: {},
  actions: {},
  modules: {
    dashboard,
    user,
    course
  }
})
