<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click.prevent="getUserExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      firebaseEndpoint: `https://vue-http-demo-622bf-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json`,
      results: [],
      isLoading: false,
    };
  },
  beforeMount() {
    this.getUserExperiences();
    setInterval(() => {
      this.getUserExperiences();
    }, 10000);
  },
  methods: {
    async getUserExperiences() {
      this.isLoading = true;
      this.results = [];
      try {
        const { data } = await axios.get(this.firebaseEndpoint);

        for (const value of Object.values(data)) {
          this.results.push(value);
        }

        this.isLoading = false;
      } catch (e) {
        console.tree(e);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
