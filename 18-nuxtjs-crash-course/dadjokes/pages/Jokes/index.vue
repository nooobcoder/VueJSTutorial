<template>
  <div>
    <h3>Jokes</h3>
    <search-jokes @search-text="searchText" />

    <ul v-for="joke in jokes" :key="joke.id">
      <TheJoke :id="joke.id" :joke="joke.joke" />
    </ul>
  </div>
</template>

<script>
import TheJoke from '../../components/TheJoke.vue'
import SearchJokes from '../../components/SearchJokes.vue'

export default {
  components: { TheJoke, SearchJokes },
  data() {
    return { jokes: [] }
  },
  head() {
    return {
      title: 'Welcome to Dad Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best Place for corny dad jokes',
        },
      ],
    }
  },
  async created() {
    const config = { headers: { Accept: 'application/json' } }
    try {
      const res = await this.$axios.get(
        `https://icanhazdadjoke.com/search`,
        config
      )
      const { results } = res.data
      this.jokes = results
    } catch (error) {
      // Handle the error somehow
    }
  },
  methods: {
    async searchText(text) {
      const config = { headers: { Accept: 'application/json' } }
      try {
        const res = await this.$axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        )
        const { results } = res.data
        this.jokes = results
      } catch (error) {
        // Do error handling
      }
    },
  },
}
</script>

<style scoped></style>
