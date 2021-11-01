// Creating the store (like Redux)
import { createStore } from "vuex";
const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: {
    // Mutations have access to the state
    increment(state) {
      state.counter += 1;
    },
    incrementBy(state, { value }) {
      state.counter += value;
    },
  },
  actions: {
    incrementBy(context, { value }) {
      setTimeout(() => {
        context.commit("incrementBy", { value });
      }, 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_state, getters) {
      const finalCounter = getters.finalCounter * 3;
      if (finalCounter < 0) return 0;
      else if (finalCounter > 100) return 100;
      else return finalCounter;
    },
  },
};
const store = createStore({
  modules: { numbers: counterModule },
  state() {
    return { counter: 0, isLoggedIn: false };
  },
  actions: {
    // Actions have commits. To mutate the state, commit a mutation using the context param

    login(context) {
      console.log("Login Action");
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      console.log("Logout Action");
      context.commit("setAuth", { isAuth: false });
    },
  },
  mutations: {
    setAuth(state, { isAuth }) {
      console.log("Set Auth", isAuth);
      state.isLoggedIn = isAuth;
    },
  },
  getters: {
    authStatus(state) {
      return state.isLoggedIn;
    },
  },
});
export default store;
