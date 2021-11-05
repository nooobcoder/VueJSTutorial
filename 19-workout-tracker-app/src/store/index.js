import { Store } from "vuex";

const store = new Store({
  state: { user: null },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload ? payload.user : null;
    },
  },
  actions: {
    setUser(ctx, payload) {
      ctx.commit("setUser", payload);
    },
  },
});

export default store;
