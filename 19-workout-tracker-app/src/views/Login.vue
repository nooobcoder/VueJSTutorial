<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling -->
    <div
      v-if="errorMessage"
      class="mb-10 p-4 rounded-md bg-light-grey shadow-lg"
    >
      <p class="text-red-500">{{ errorMEssage }}</p>
    </div>

    <!-- Login Form -->
    <form
      action=""
      class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"
      @submit.prevent="methods.loginUser"
    >
      <h1 class="text-3xl text-at-light-green mb-4">Register</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-at-light-green">
          Email Address
        </label>
        <input
          type="text"
          required
          class="p-2 text-grey-500 focus:outline-none"
          id="email"
          v-model="email"
          placeholder="Email Address"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-at-light-green">
          Password
        </label>
        <input
          type="password"
          required
          class="p-2 text-grey-500 focus:outline-none"
          id="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        class="
          mt-6
          py-2
          px-6
          rounded-sm
          self-start
          text-sm text-white
          bg-at-light-green
          duration-200
          border-solid border-2 border-transparent
          hover:border-at-light-green hover:bg-white hover:text-at-light-green
        "
      >
        Login
      </button>

      <router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }">
        Don't have an account?
        <span class="text-at-light-green"> Sign Up </span>
        Instead
      </router-link>
    </form>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
export default {
  name: "register",
  setup() {
    const route = useRouter();
    // Create data / vars
    const userData = reactive({
      email: null,
      password: null,
    });
    const { email, password } = toRefs(userData);
    const errorMessage = ref(null);

    // Login function
    const loginUser = async () => {
      try {
        let { user, error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        console.log(user, email.value);
        if (error) throw error;
        // Redirect the user to the homepage
        route.replace({ name: "Home" });
      } catch (error) {
        errorMessage.value = error.message;
        setTimeout(() => {
          errorMessage.value = null;
        }, 5000);
      }
    };

    return { errorMessage, email, password, methods: { loginUser } };
  },
};
</script>
