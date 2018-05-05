import Vue from '@/main.ts';

export default {
  state: {
    loggedIn: false,
    token: '',
    userInfo: localStorage.getItem('userInfo') || {
      username: '',
      gender: '',
    },
  },
  getters: {
    getUserInfo(state: any) {
      return state.userInfo;
    },
    getUserWithAccessToken(state: any) {
      return {
        username: state.userInfo.username,
        token: state.token,
      };
    },
    getActionUrls(state: any, getters: any, rootState: any, rootGetters: any) {
      return rootState.url;
    },
  },
  mutations: {
    setUserInfo(state: any, payload: any) {
      state.userInfo = payload;
    },
    setLoginStatus(state: any, payload: any) {
      state.loggedIn = payload.loggedIn;
    },
    setAccessToken(state: any, payload: any) {
      state.token = payload;
    },
  },
  actions: {
    login({dispatch, commit, getters, rootGetters}) {

    },
    logout(context: any) {

    },
  },
};