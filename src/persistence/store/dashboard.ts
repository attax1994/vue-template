export default {
  namespaced: true,
  state: {
    isHome: false,
    isEnabled: false,
    isOpen: false,
  },
  getters: {
    isDashBoardActive(state: any) {
      return state.isHome && state.isEnabled && state.isOpen;
    },
  },
  mutations: {
    changeHomeState(state: any, payload: boolean) {
      state.isHome = payload;
    },
    changeDashBoardEnabled(state: any, payload: boolean) {
      state.isEnabled = payload;
    },
    changeDashBoardOpen(state: any, payload: boolean) {
      state.isOpen = payload;
    },
  },
  actions: {
    showDashBoard(context: any, payload: boolean) {
      context.commit('changeHomeState', payload);
      context.commit('changeDashBoardEnabled', payload);
      context.commit('changeDashBoardOpen', payload);
    },
    queryDashBoardState() {

    },
  }
}