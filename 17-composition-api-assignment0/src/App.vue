<template>
  <h2>My Course Goal</h2>
  <h3>OUTPUT COURSE GOAL</h3>

  <!-- Options API -->
  <!-- <div v-if="goalVisibility">
    <p>{{ mainGoal }}</p>
  </div>
  <button @click.prevent="toggleVisibility">Toggle Goal</button> -->

  <!-- Composition API -->
  <div v-if="goalVisibility">
    <p>{{ mainGoal }}</p>
    <p>{{ mainGoalReactive }}</p>
  </div>
  <button @click.prevent="helpers.toggleVisibility">Toggle Goal</button>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
  setup() {
    const goalVisibility = ref(true);
    const mainGoal = ref("Understand the Composition API top to bottom");
    const mainGoalReactiveObj = reactive({
      mainGoalReactive: "(Reactive) Understand the Composition API",
    });

    const toggleVisibility = () =>
      (goalVisibility.value = !goalVisibility.value);

    return {
      mainGoal,
      ...toRefs(mainGoalReactiveObj),
      goalVisibility,
      helpers: { toggleVisibility },
    };
  },
  /* data() {
    return {
      goalVisibility: true,
      mainGoal: "Understand the Composition API top to bottom",
    };
  },
  methods: {
    toggleVisibility() {
      console.log("here");
      this.goalVisibility = !this.goalVisibility;
    },
  }, */
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
