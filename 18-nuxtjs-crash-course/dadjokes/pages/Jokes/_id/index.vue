<template>
  <div>
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr />
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
export default {
  data() {
    return { joke: null, jokeId: undefined }
  },
  head() {
    return {
      title: this.joke,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes',
        },
      ],
    }
  },

  async beforeMount() {
    const { id } = this.$route.params
    this.jokeId = id

    try {
      const axiosOptions = { headers: { Accept: 'application/json' } }
      const res = await this.$axios.get(
        `https://icanhazdadjoke.com/j/18h3wcU8xAd`,
        axiosOptions
      )

      this.joke = res.data?.joke
    } catch (error) {
      // Do some error handling
    }
  },
}
</script>

<style scoped></style>
