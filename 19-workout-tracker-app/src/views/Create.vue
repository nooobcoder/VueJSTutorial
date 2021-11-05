<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- Status Message -->
    <div
      v-if="statusMessage || errorMessage"
      class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
    >
      <p class="text-at-light-green">
        {{ statusMessage }}
      </p>
      <p class="text-red-500">
        {{ errorMessage }}
      </p>
    </div>

    <!-- Create Form -->
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <form @submit.prevent="" class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green">Record Workout</h1>

        <!-- Workout Name -->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-green"
            >Workout Name</label
          >
          <input
            type="text"
            name="workout-name"
            required
            id="workout-name"
            class="p-2 text-gray-500 focus:outline-none"
            v-model="workoutName"
          />
        </div>

        <!-- Workout Type -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-green"
            >Workout Type</label
          >
          <select
            id="workout-type"
            class="p-2 text-gray-500 focus:outline-none"
            required
            v-model="workoutType"
          >
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Strength</option>
          </select>
        </div>

        <!-- Strength Training Inputs -->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/3">
            <label for="exercise-name" class="mb-1 text-sm text-at-light-green">Exercise</label>
            <input type="text" required class="p-2 w-full text-gray-500 focus:outline-none" v-model=""/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";

export default {
  name: "create",
  setup() {
    // Create data
    const workoutCreateObj = reactive({
      workoutName: "",
      workoutType: "select-workout",
      exercises: [],
    });
    const statusMessage = ref(null);
    const errorMessage = ref(null);
    const { workoutName, workoutType, exercises } = toRefs(workoutCreateObj);

    // Add exercise
    // const addExercise = () => {};

    // Delete exercise
    // const deleteExercise = () => {};

    // Listens for chaging of workout type input

    // Create workout

    return { workoutName, workoutType, exercises, statusMessage, errorMessage };
  },
};
</script>
