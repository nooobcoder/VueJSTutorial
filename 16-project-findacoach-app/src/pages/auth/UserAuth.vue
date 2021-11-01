<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed title="Authenticating..." :show="isLoading">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form v-on:submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password. (Minimum 6 characters)
        </p>
        <base-button>
          {{ submitButtonCaption }}
        </base-button>
        <base-button type="button" mode="flat" @click.prevent="switchAuthMode">
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
      email: null,
      password: null,
      formIsValid: true,
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === "login" ? "Login" : "Signup";
    },
    switchModeButtonCaption() {
      return this.mode === "login" ? "Signup Instead" : "Login Instead";
    },
  },
  methods: {
    ...mapActions(["signup", "login"]),
    handleError() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        this.loading = true;
        // TODO: Send an auth POST request here.
        if (this.mode === "login") {
          // Dispatch a login action
          await this.login(actionPayload);
        } else if (this.mode === "signup") {
          // Dispatch a signup action
          await this.signup(actionPayload);
        }
        this.loading = false;

        const redirectUrl = `/${this.$route.query?.redirect || "coaches"}`;
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error =
          error.message ||
          "Failed to authenticate, try later. Check your login data.";
        this.loading = false;
      }
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
