<template>
  <div>
    <h1>About Dadjokes</h1>
    <p>This is an app that displays corny dad jokes</p>
    <a
      href="http://https://icanhazdadjoke.com/api#fetch-a-random-dad-joke"
      rel="noopener noreferrer"
      >API Reference</a
    >
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best Place for corny dad jokes',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
