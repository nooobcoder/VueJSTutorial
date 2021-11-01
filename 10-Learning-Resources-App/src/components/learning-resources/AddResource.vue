<template>
  <base-dialog
    v-if="userInputInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template v-slot:default>
      <p>Unfortunately, atleast one user input is invalid</p>
      <p>
        Please check all inputs and check you enter atleast a character in each
        of the input fields.
      </p></template
    >
    <template v-slot:actions>
      <base-button @click.prevent="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="title">Description</label>
        <textarea
          name="description"
          for="description"
          id="description"
          cols="20"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label
        ><input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit" @click.prevent="submitData"
          >Add Resource</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["addResource"],
  data() {
    return { userInputInvalid: false };
  },
  methods: {
    confirmError() {
      this.userInputInvalid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredURL = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === "" ||
        enteredURL.trim() === "" ||
        enteredDescription.trim() === ""
      ) {
        this.userInputInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredURL);
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
