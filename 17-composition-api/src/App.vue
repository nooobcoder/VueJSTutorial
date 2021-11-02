<template>
  <section class="container">
    <h2>{{ computed.getFullName }}</h2>
    <h3>{{ age }}</h3>
    <button @click.prevent="helpers.setNewAge">Change Age</button>
    <div>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="First Name"
        v-model.trim="firstName"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Last Name"
        v-model.trim="lastName"
      />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const uAge = ref(30);

    const getFullName = computed(() =>
      firstName.value.length > 0 || lastName.value.length > 0
        ? `${firstName.value} ${lastName.value}`
        : undefined
    );

    const setNewAge = () => +(uAge.value += 10);
    // watch([deps],(newValues,oldValues)=>{}) -> Overload for multiple dependencies
    watch(uAge, (newValue, oldValue) =>
      console.log(`Old Age: ${oldValue}\nNew Age: ${newValue}`)
    );

    return {
      firstName,
      lastName,
      age: uAge,
      helpers: { setNewAge },
      computed: { getFullName },
    };
  },
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
