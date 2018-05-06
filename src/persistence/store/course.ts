import axios from 'axios';
import {ActionContext} from "vuex";
import {Subject} from "rxjs/Subject";

export interface CourseStateInterface {
  version: number;
  categoryItems: Array<any>;
  categoryItems$: Subject<any>;
}

export default {
  namespaced: true,
  state: {
    version: 0,
    categoryItems: [],
    categoryItems$: new Subject<any>(),
  },
  getters: {},
  mutations: {
    setCategoryItems(state: CourseStateInterface, payload: Array<any>) {
      state.categoryItems = payload;
      state.categoryItems$.next(payload);
    },
    setCategoryVersion(state: CourseStateInterface, version: number) {
      state.version = version;
    }
  },
  actions: {
    async init({commit, dispatch, rootState}: ActionContext<CourseStateInterface, any>) {
      const localItems = JSON.parse(localStorage.getItem(rootState.StoreKeys.course.categoryItems));
      if (localItems) {
        commit('setCategoryItems', localItems);

        const isVersionValid = await dispatch('isVersionValid');
        if (isVersionValid) {
          console.log('Loaded categories from cache');
        } else {
          console.log('Loaded categories from remote');
          await dispatch('queryCategoryFromRemote');
        }

      } else {
        console.log('Loaded categories from remote');
        await dispatch('queryCategoryFromRemote');
      }
    },
    async isVersionValid({rootState}: ActionContext<CourseStateInterface, any>): Promise<boolean> {
      const localVersion = Number(localStorage.getItem(rootState.StoreKeys.course.categoryVersion));
      if (!localVersion) return false;

      const {data: {version: remoteVersion}} = await axios.get(rootState.ActionUrls.course.getCategoryVersion);
      return localVersion === remoteVersion;
    },
    async queryCategoryFromRemote({commit, rootState}: ActionContext<CourseStateInterface, any>) {
      const {data: {items: remoteItems, version}} = await axios.get(rootState.ActionUrls.course.getCategoryInfo);
      commit('setCategoryItems', remoteItems);
      commit('setCategoryVersion', version);
      // save info to localStorage
      localStorage.setItem(rootState.StoreKeys.course.categoryItems, JSON.stringify(remoteItems));
      localStorage.setItem(rootState.StoreKeys.course.categoryVersion, JSON.stringify(version));
    }
  }
}
