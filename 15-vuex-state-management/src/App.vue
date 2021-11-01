<template>
  <base-container title="Vuex" v-if="authenticated">
    <the-counter />
    <change-counter />
  </base-container>
  <base-container title="Auth"><user-auth /></base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import UserAuth from "./components/UserAuth.vue";

import { mapState } from "vuex";
// https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,
  },
  computed: mapState({ authenticated: "isLoggedIn" }),
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
