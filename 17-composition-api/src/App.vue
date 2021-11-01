<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click.prevent="helpers.setNewAge">Change Age</button>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    // https://v3.vuejs.org/guide/composition-api-setup.html#usage-with-templates
    /* 
      const userName = ref('nooobcoder')
      const age = ref(30)
    */
    const user = reactive({ userName: "nooocoder", age: 30 });

    const setNewAge = () => {
      user.age += 10;
    };

    const userRef = toRefs(user);
    return { ...userRef, helpers: { setNewAge } };
  },
  // data() {
  //   return {
  //     userName: "nooobcoder",
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age += 10;
  //   },
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
