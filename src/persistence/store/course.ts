import axios from 'axios';
import {ActionContext} from "vuex";
import {Subject} from "rxjs/Subject";

export interface CourseStateInterface {
  version: number;
  categoryItems: Array<any>;
  $categoryItems: Subject<any>;
}

export default {
  namespaced: true,
  state: {
    version: 0,
    categoryItems: [],
    $categoryItems: new Subject<any>(),
  },
  getters: {},
  mutations: {
    setCategoryItems(state: CourseStateInterface, payload: Array<any>) {
      state.categoryItems = payload;
      state.$categoryItems.next(payload);
    },
    setCategoryVersion(state: CourseStateInterface, version: number) {
      state.version = version;
    }
  },
  actions: {
    async init({commit, dispatch, rootState}: ActionContext<CourseStateInterface, any>) {
      const isVersionValid = await dispatch('isVersionValid');
      const items = JSON.parse(localStorage.getItem(rootState.StoreKeys.course.categoryItems));

      // if cache is valid
      if (isVersionValid && items) {
        console.log('categories from cache');
        commit('setCategoryItems', items);
      }
      // update from remote data
      else {
        console.log('categories from remote');
        const {data: {items: remoteItems, version}} = await dispatch('queryCategory');
        commit('setCategoryItems', remoteItems);
        commit('setCategoryVersion', version);
        // save info to localStorage
        localStorage.setItem(rootState.StoreKeys.course.categoryItems, JSON.stringify(remoteItems));
        localStorage.setItem(rootState.StoreKeys.course.categoryVersion, JSON.stringify(version));
      }
    },
    async isVersionValid({rootState}: ActionContext<CourseStateInterface, any>): Promise<boolean> {
      const localVersion = Number(localStorage.getItem(rootState.StoreKeys.course.categoryVersion));
      if (!localVersion) return false;

      const {data: {version: remoteVersion}} = await axios.get(rootState.ActionUrls.course.getCategoryVersion);
      return localVersion === remoteVersion;
    },
    async queryCategory({rootState}: ActionContext<CourseStateInterface, any>) {
      return axios.get(rootState.ActionUrls.course.getCategoryInfo);
    }
  }
}
