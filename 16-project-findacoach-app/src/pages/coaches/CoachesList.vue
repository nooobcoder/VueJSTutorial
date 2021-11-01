<template>
  <div>
    <base-dialog :show="!!error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section><coach-filter @change-filter="setFilters" /></section>
    <section>
      <base-card>
        <div class="controls">
          <base-button
            mode="outline"
            @click.prevent="loadCoaches({ forceRefresh: true })"
            >Refresh</base-button
          >
          <base-button
            link
            to="/auth?redirect=register"
            v-if="!isAuthenticated"
          >
            Login to Register as a Coach
          </base-button>
          <base-button
            v-if="!isCoach && !isLoading && isAuthenticated"
            to="/register"
            link
            >Register as Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner />
        </div>
        <ul v-else-if="hasCoaches && !isLoading">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :rate="coach.hourlyRate"
          ></coach-item>
        </ul>
        <h3 v-else>No Coaches Found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CoachItem from "../../components/coaches/CoachItem";
import CoachFilter from "../../components/coaches/CoachFilter";
export default {
  components: { CoachItem, CoachFilter },
  computed: {
    ...mapGetters("coaches", ["coaches", "hasCoaches", "isCoach"]),
    ...mapGetters(["isAuthenticated"]),
    filteredCoaches() {
      const filtered = this.coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
      return filtered;
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: { fontend: true, backend: true, career: true },
    };
  },
  methods: {
    ...mapActions("coaches", ["loadCoaches"]),
    handleError() {
      this.error = null;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  async created() {
    this.isLoading = true;
    try {
      await this.loadCoaches({ forceRefresh: false });
    } catch (error) {
      this.error = error?.message || "Something went wrong";
    }
    this.isLoading = false;
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
