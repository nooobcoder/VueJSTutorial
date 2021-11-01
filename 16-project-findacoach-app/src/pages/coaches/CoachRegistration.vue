<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form @save-data="saveData" />
    </base-card>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: { CoachForm },
  methods: {
    ...mapActions("coaches", ["addCoach"]),
    saveData(data) {
      this.addCoach(data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
