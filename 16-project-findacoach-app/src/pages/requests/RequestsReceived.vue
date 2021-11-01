<template>
  <div>
    <base-dialog :show="!!error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading" />
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="request in getRequests"
            :key="request.id"
            userEmail
            :email="request.userEmail"
            :message="request.message"
          />
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RequestItem from "../../components/requests/RequestItem";

export default {
  components: { RequestItem },
  computed: { ...mapGetters("requests", ["getRequests", "hasRequests"]) },
  data() {
    return { isLoading: false, error: null };
  },
  methods: {
    ...mapActions("requests", ["fetchRequests"]),
    handleError() {
      this.error = null;
    },
  },
  async created() {
    this.isLoading = true;
    try {
      await this.fetchRequests();
    } catch (error) {
      this.error = error.message || "Something went wrong!";
    }
    this.isLoading = false;
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
