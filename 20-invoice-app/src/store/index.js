import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModal: false,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      console.log("mutation", state.invoiceModal);
      state.invoiceModal = !state.invoiceModal;
    },
  },
  actions: {},
  modules: {},
});
