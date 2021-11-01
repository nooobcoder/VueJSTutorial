<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    /* counter() {
      return this.$store.getters.normalizedCounter;
    }, */
    // https://stackoverflow.com/questions/45131928/access-vue-vuex-namespaced-getter-from-template/45172986#:~:text=The%20first%20parameter%20of%20mapGetters%20can%20be%20a%20namespace%3A
    // First parameter is the namespace and the second param are the getters
    ...mapGetters("numbers", ["finalCounter"]),
  },
};
</script>
