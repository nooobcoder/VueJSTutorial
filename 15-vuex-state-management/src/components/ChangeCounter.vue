<template>
  <button @click="incrementBy({ value: 10 })">Add Ten(10)</button>
  <button @click="increment">Add One(1)</button>
</template>
<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions("numbers", ["incrementBy"]),
    ...mapMutations("numbers", ["increment"]),
    /* addOne() {
      this.$store.commit("increment");
    },
    addBy(value) {
      this.$store.dispatch({ type: "incrementBy", value });
      // this.$store.commit("incrementBy", { value });
    }, */
  },
};
</script>
