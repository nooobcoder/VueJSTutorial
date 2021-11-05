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
      console.log(payload);
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
