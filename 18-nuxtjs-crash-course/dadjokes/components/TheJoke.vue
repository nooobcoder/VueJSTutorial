<template>
  <div class="joke">
    <nuxt-link :to="`/jokes/${id}`">
      <p>{{ joke }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheJoke',
  props: {
    joke: { type: String, required: true },
    id: { type: String, required: true },
  },
}
</script>

<style scoped>
div:hover {
  text-decoration: underline;
  cursor: pointer;
}
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
