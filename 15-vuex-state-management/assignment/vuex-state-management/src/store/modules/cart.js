export default {
  namespaced: true,
  state() {
    return { items: [], total: 0, qty: 0 };
  },
  actions: {
    addToCart(ctx, { productData }) {
      const { id } = productData;
      const products = ctx.rootGetters["prods/products"];
      const product = products.find((prod) => prod.id === id);
      ctx.commit("addProductToCart", product);
    },
    removeFromCart(ctx, payload) {
      ctx.commit("removeProductFromCart", payload);
    },
  },
  mutations: {
    addProductToCart(state, productData) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeProductFromCart(state, { prodId }) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
  },
};
