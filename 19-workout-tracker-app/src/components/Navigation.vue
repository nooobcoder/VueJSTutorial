<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex items-center gap-x-4">
        <img
          class="w-14"
          src="../assets/images/dumbbell-light.png"
          alt="app-logo"
        />
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }"
          >Home</router-link
        ><router-link
          class="cursor-pointer"
          v-if="user"
          :to="{ name: 'Create' }"
          >Create</router-link
        ><router-link
          v-if="!user"
          class="cursor-pointer"
          :to="{ name: 'Login' }"
          >Login</router-link
        >
        <li
          class="cursor-pointer"
          v-if="user"
          @click.prevent="methods.logoutUser"
        >
          Logout
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
import store from "../store/index";

export default {
  setup() {
    // Get user from store
    let user = store.getters.getUser;
    // Setup ref to router
    const router = useRouter();

    // Logout function
    const logoutUser = async () => {
      try {
        let { error } = await supabase.auth.signOut();

        if (error) {
          throw error;
        }
        router.go();
      } catch (error) {
        // Handle Error
        console.error(error);
      }
    };

    return { user, methods: { logoutUser } };
  },
};
</script>
