<template>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<script>
import { mapActions } from "vuex";
// https://vuex.vuejs.org/guide/actions.html#dispatching-actions-in-components
export default {
  methods: {
    ...mapActions(["login", "logout", "incrementBy"]),
  },
};
</script>
