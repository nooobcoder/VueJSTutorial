<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    /* 
      const userName = ref('nooobcoder')
      const age = ref(30)

      setTimeout(() => {
        user.value.userName = "ankurpaul";
        user.value.age += 10;
      }, 2000);
    */
    const user = reactive({ userName: "nooocoder", age: 30 });

    setTimeout(() => {
      user.userName = "ankurpaul";
      user.age += 10;
    }, 2000);

    return { user };
  },
  // data() {
  //   return {
  //     userName: "nooobcoder",
  //   };
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
