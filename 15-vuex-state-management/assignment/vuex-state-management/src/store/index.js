import { createStore } from "vuex";
import productsModule from "./modules/products";
import cartModule from "./modules/cart";

export default createStore({
  modules: { prods: productsModule, cart: cartModule },
  state() {
    return { isLoggedIn: false };
  },
  actions: {
    login(ctx) {
      ctx.commit("login");
    },
    logout(ctx) {
      ctx.commit("logout");
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  getters: {
    authState(state) {
      return state.isLoggedIn;
    },
  },
});
